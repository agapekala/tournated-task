"use client";

import clsx from "clsx";
import { useAnimate } from "framer-motion";

import { IRound } from "@/_lib/types/Round";
import { useViewport } from "@/_contexts/ViewportContext";
import useViewportWidth from "@/_utils/hooks/useViewportWidth";
import useViewportAnimation from "@/_utils/hooks/useViewportAnimation";

import Match from "./match";
import React from "react";
import styles from "@/_styles/brackets.module.css";

type RoundProps = {
  round: IRound;
  roundIdx: number;
  wrapperId: string;
};

const MAX_HEIGHT: number = 9999;

export default function Round({ round, roundIdx, wrapperId }: RoundProps) {
  const [scope, animate] = useAnimate();
  const { viewportWidth } = useViewport();
  const currentScreenWidth = useViewportWidth();

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
    animate(scope.current, { opacity: 0 });
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
      { duration: 0.5, ease: "easeOut", delay: 0.2 }
    );
    animate(scope.current, { opacity: 1 }, { duration: 0.8, ease: "easeOut" });
  };

  const { ref } = useViewportAnimation(
    wrapperId,
    handleEnterLeft,
    handleExitLeft
  );

  const roundClass: string = clsx(
    `flex flex-col h-auto max-h-[${MAX_HEIGHT}px] snap-start ${styles.roundCol}`,
    {
      "flex-none w-full": currentScreenWidth <= viewportWidth,
      "flex-1": currentScreenWidth > viewportWidth,
    }
  );

  const renderHeader = () => {
    return (
      <div
        ref={ref}
        className="sticky top-0 z-10 text-center min-w-80 bg-[#f2f3f5] mx-[var(--connector-gap)] py-2 rounded-lg "
      >
        <h2 className="font-bold text-lg">{round.title}</h2>
        <p className="text-xs text-typography-secondary">
          {round.matches.length} matches
        </p>
      </div>
    );
  };

  return (
    <div id={round.title} key={round.title} className={roundClass}>
      {renderHeader()}

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
