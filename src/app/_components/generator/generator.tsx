"use client";

import { matchesDummy } from "@/app/_lib/matchesData";
import Round from "./round";
import useRounds from "@/app/_utils/useRounds";

export default function Generator({ playersNum }: { playersNum: number }) {
  const rounds = useRounds(playersNum, matchesDummy);
  const wrapperId = "generator";

  return (
    <div
      id={wrapperId}
      className="w-full flex-1 overflow-auto snap-x snap-mandatory text-xs lg:text-base"
    >
      <div className="flex justify-center min-w-fit h-fit">
        {rounds.map((round) => (
          <Round round={round} wrapperId={wrapperId} key={round.title} />
        ))}
      </div>
    </div>
  );
}
