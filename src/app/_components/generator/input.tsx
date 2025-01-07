"use client";

import { Slider, SliderValue } from "@nextui-org/slider";
import { useState } from "react";

interface InputProps {
  updateValueAction: (newValue: number) => void;
}

export default function Input({ updateValueAction }: InputProps) {
  const [value, setValue] = useState<number>(1);

  const calculatePower = (value: number) => {
    return Math.pow(2, value);
  };

  const handleSliderChange = (value: SliderValue) => {
    setValue(+value);
    updateValueAction(calculatePower(+value));
  };

  return (
    <Slider
      className="max-w-md"
      defaultValue={1}
      label="Number of Players"
      maxValue={5}
      minValue={1}
      step={1}
      showSteps={true}
      value={value}
      onChange={handleSliderChange}
      aria-label="Number of players"
      getValue={(num) => `${Math.pow(2, +num)}`}
    />
  );
}
