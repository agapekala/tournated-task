"use client";

import { IMatch } from "@/_lib/types/Match";
import { IRound } from "@/_lib/types/Round";
import useRounds from "@/_utils/hooks/useRounds";

import Round from "./round";

const WRAPPER_ID: string = "generator";

type GeneratorProps = {
  playersNum: number;
  matchesData: IMatch[];
};

export default function Generator({ playersNum, matchesData }: GeneratorProps) {
  const rounds: IRound[] = useRounds(playersNum, matchesData);

  return (
    <div
      id={WRAPPER_ID}
      className="w-full flex flex-1 overflow-auto overflow-y-scroll snap-x snap-mandatory"
    >
      <div className="flex w-full h-fit">
        {rounds.map((round, roundIdx) => (
          <Round
            round={round}
            roundIdx={roundIdx}
            wrapperId={WRAPPER_ID}
            key={roundIdx}
          />
        ))}
      </div>
    </div>
  );
}
