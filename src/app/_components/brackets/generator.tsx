"use client";

import { matchesDummy } from "@/app/_lib/data/matchesData";
import Round from "./round";
import useRounds from "@/app/_utils/hooks/useRounds";

const WRAPPER_ID: string = "generator";

export default function Generator({ playersNum }: { playersNum: number }) {
  const rounds = useRounds(playersNum, matchesDummy);

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
