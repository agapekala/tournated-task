"use client";

import { useState } from "react";

import Generator from "./generator";
import BracketsSlider from "./slider";
import { ViewportProvider } from "../../_contexts/ViewportContext";

type BracketsProps = {
  viewportBreakpoint?: number;
  maxSliderValue?: number;
};

const DEFAULT_BREAKPOINT: number = 768;
const DEFAULT_MAX_SLIDER: number = 5;

export default function Brackets({
  viewportBreakpoint = DEFAULT_BREAKPOINT,
  maxSliderValue = DEFAULT_MAX_SLIDER,
}: BracketsProps) {
  const [sliderValue, setSliderValue] = useState<number>(1);
  const [numPlayers, setNumPlayers] = useState<number>(2);

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
        <Generator playersNum={numPlayers} />
      </ViewportProvider>
    </>
  );
}
