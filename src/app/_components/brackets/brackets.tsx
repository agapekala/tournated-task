"use client";

import { useState } from "react";

import { ViewportProvider } from "@/_contexts/ViewportContext";

import { IMatch } from "@/_lib/types/Match";

import Generator from "./generator";
import BracketsSlider from "./slider";

type BracketsProps = {
  matchesData: IMatch[];
  selectedTeamId?: number;
  viewportBreakpoint?: number;
  maxSliderValue?: number;
};

const DEFAULT_BREAKPOINT: number = 768;
const DEFAULT_MAX_SLIDER: number = 5;
const DEFAULT_MIN_SLIDER: number = 1;

export default function Brackets({
  matchesData,
  viewportBreakpoint = DEFAULT_BREAKPOINT,
  maxSliderValue = DEFAULT_MAX_SLIDER,
}: BracketsProps) {
  const [sliderValue, setSliderValue] = useState<number>(DEFAULT_MIN_SLIDER);
  const [numPlayers, setNumPlayers] = useState<number>(
    Math.pow(2, DEFAULT_MIN_SLIDER)
  );

  const handleSliderChange = (value: number): void => {
    setSliderValue(value);
    setNumPlayers(calculatePlayersNumber(value));
  };

  const calculatePlayersNumber = (value: number): number => {
    return Math.pow(2, value);
  };

  return (
    <>
      <BracketsSlider
        updateValueAction={handleSliderChange}
        calculatePlayersNumberAction={calculatePlayersNumber}
        maxSliderValue={maxSliderValue}
        defaultValue={sliderValue}
      />
      <ViewportProvider viewportWidth={viewportBreakpoint}>
        <Generator playersNum={numPlayers} matchesData={matchesData} />
      </ViewportProvider>
    </>
  );
}
