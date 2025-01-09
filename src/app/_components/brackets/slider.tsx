"use client";

import { useState } from "react";

import { Slider, SliderValue } from "@nextui-org/slider";

type BracketsSliderProps = {
  maxSliderValue: number;
  defaultValue: number;
  updateValueAction: (newValue: number) => void;
  calculatePlayersNumberAction: (value: number) => void;
};

export default function BracketsSlider({
  maxSliderValue,
  defaultValue,
  updateValueAction,
  calculatePlayersNumberAction,
}: BracketsSliderProps) {
  const [value, setValue] = useState<number>(defaultValue);

  const handleSliderChange = (value: SliderValue) => {
    setValue(Number(value));
    updateValueAction(Number(value));
  };

  return (
    <div className="flex w-full justify-center py-4">
      <Slider
        className="max-w-full md:max-w-md"
        classNames={{
          value: "font-bold",
        }}
        defaultValue={defaultValue}
        label="Number of Players"
        maxValue={maxSliderValue}
        minValue={1}
        step={1}
        color="warning"
        showSteps={true}
        value={value}
        onChange={handleSliderChange}
        aria-label="Number of players"
        getValue={(value: SliderValue) =>
          `${calculatePlayersNumberAction(Number(value))}`
        }
      />
    </div>
  );
}
