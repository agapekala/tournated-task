"use client";

import { Slider, SliderValue } from "@nextui-org/slider";
import { useState } from "react";

interface BracketsSliderProps {
  updateValueAction: (newValue: number) => void;
  calculatePlayersNumberAction: (value: number) => void;
  maxSliderValue: number;
  defaultValue: number;
}

export default function BracketsSlider({
  updateValueAction,
  calculatePlayersNumberAction,
  maxSliderValue,
  defaultValue,
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
        getValue={(value) => `${calculatePlayersNumberAction(Number(value))}`}
      />
    </div>
  );
}
