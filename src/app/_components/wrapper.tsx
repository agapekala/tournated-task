"use client";

import { useState } from "react";
import Generator from "./generator/generator";
import Input from "./generator/input";

export default function Wrapper() {
  const [numPlayers, setNumPlayers] = useState<number>(2);

  const handleSliderChange = (value: number) => {
    setNumPlayers(value);
  };

  return (
    <>
      <div className="border h-full flex flex-col">
        <div>
          <h1>Draws</h1>
          <button>Documents</button>
        </div>
        <div>
          <input type="text" placeholder="Placehoder" />
          <select>
            <option>All categories</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <select>
            <option>All segments</option>
            <option>Segment 1</option>
            <option>Segment 2</option>
          </select>
        </div>
        <Input updateValueAction={handleSliderChange} />
        {/* <div> */}
        <Generator playersNum={numPlayers} />
        {/* </div> */}
      </div>
    </>
  );
}
