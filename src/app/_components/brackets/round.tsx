"use client";

import { IRound } from "@/app/_lib/types/Round";
import { useAnimate } from "framer-motion";
import Match from "./match";
import useViewportAnimation from "@/app/_utils/hooks/useViewportAnimation";
import clsx from "clsx";
import { useViewport } from "../../_contexts/ViewportContext";
import useViewportSize from "@/app/_utils/hooks/useViewportSize";

interface RoundProps {
  round: IRound;
  roundIdx: number;
  wrapperId: string;
}

export default function Round({ round, roundIdx, wrapperId }: RoundProps) {
  const [scope, animate] = useAnimate();
  const { viewportWidth } = useViewport();
  const currentScreenWidth = useViewportSize();
  const maxHeight = 9999;

  const handleExitLeft = () => {
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

  const handleEnterLeft = () => {
    animate(
      scope.current,
      { display: "flex" },
      { duration: 0.5, ease: "easeOut" }
    );
    animate(
      scope.current,
      { maxHeight: `${maxHeight}px` },
      { duration: 0.5, ease: "easeOut" }
    );
  };

  const { ref } = useViewportAnimation(
    wrapperId,
    handleEnterLeft,
    handleExitLeft
  );

  const roundClass = clsx(
    `flex flex-col snap-start h-auto max-h-[${maxHeight}px]`,
    {
      "full-width": currentScreenWidth <= viewportWidth,
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
        style={{ maxHeight: `${maxHeight}px` }}
        className="flex flex-col flex-1"
      >
        {round.matches.map((match) => (
          <Match key={match.id} match={match} roundIdx={roundIdx} />
        ))}
      </div>
    </div>
  );
}
