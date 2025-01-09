"use client";

import clsx from "clsx";
import { useAnimate } from "framer-motion";

import { IRound } from "@/_lib/types/Round";
import { useViewport } from "@/_contexts/ViewportContext";
import useViewportSize from "@/_utils/hooks/useViewportSize";
import useViewportAnimation from "@/_utils/hooks/useViewportAnimation";

import Match from "./match";

type RoundProps = {
  round: IRound;
  roundIdx: number;
  wrapperId: string;
};

const MAX_HEIGHT: number = 9999;

export default function Round({ round, roundIdx, wrapperId }: RoundProps) {
  const [scope, animate] = useAnimate();
  const { viewportWidth } = useViewport();
  const currentScreenWidth = useViewportSize();

  const handleExitLeft = (): void => {
    animate(
      scope.current,
      { display: "none" },
      { duration: 0.5, ease: "easeOut" }
    );
    animate(
      scope.current,
      { maxHeight: "0" },
      { duration: 0.5, ease: "easeOut" }
    );
  };

  const handleEnterLeft = (): void => {
    animate(
      scope.current,
      { display: "flex" },
      { duration: 0.5, ease: "easeOut" }
    );
    animate(
      scope.current,
      { maxHeight: `${MAX_HEIGHT}px` },
      { duration: 0.5, ease: "easeOut" }
    );
  };

  const { ref } = useViewportAnimation(
    wrapperId,
    handleEnterLeft,
    handleExitLeft
  );

  const roundClass: string = clsx(
    `flex flex-col snap-start h-auto max-h-[${MAX_HEIGHT}px]`,
    {
      "flex-none w-full": currentScreenWidth <= viewportWidth,
      "flex-1": currentScreenWidth > viewportWidth,
    }
  );

  return (
    <div id={round.title} key={round.title} className={roundClass}>
      <div
        ref={ref}
        className="sticky top-0 z-10 min-w-80 bg-[#f2f3f5] mx-[1.5em] py-2 rounded-lg text-center"
      >
        <h2 className="text-sky-950 font-bold text-lg">{round.title}</h2>
        <p className="text-xs text-gray-400">{round.matches.length} matches</p>
      </div>

      <div
        ref={scope}
        style={{ maxHeight: `${MAX_HEIGHT}px` }}
        className="flex flex-col flex-1"
      >
        {round.matches.map((match) => (
          <Match key={match.id} match={match} roundIdx={roundIdx} />
        ))}
      </div>
    </div>
  );
}
