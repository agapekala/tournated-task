"use client";

import { IRound } from "@/app/_lib/Round";
import { useAnimate } from "framer-motion";
import Match from "./match";
import useViewportAnimation from "@/app/_utils/useViewportAnimation";

interface RoundProps {
  round: IRound;
  wrapperId: string;
}

export default function Round({ round, wrapperId }: RoundProps) {
  const [scope, animate] = useAnimate();

  const handleExitLeft = () => {
    animate(
      scope.current,
      { maxHeight: "0" },
      { duration: 0.5, ease: "easeOut" }
    );
    animate(scope.current, { opacity: 0 }, { duration: 1, ease: "easeIn" });
  };

  const handleEnterLeft = () => {
    animate(
      scope.current,
      { maxHeight: "3000px" },
      { duration: 0.5, ease: "easeOut" }
    );
    animate(scope.current, { opacity: 1 }, { duration: 1, ease: "easeIn" });
  };

  const { ref } = useViewportAnimation(
    wrapperId,
    handleEnterLeft,
    handleExitLeft
  );

  return (
    <div
      id={round.title}
      key={round.title}
      className="flex flex-col flex-1 snap-start h-auto max-h-[3000px]"
    >
      <p ref={ref} className="sticky top-0">
        {round.title}
      </p>
      <div ref={scope} className="flex flex-col flex-1">
        {round.matches.map((match) => (
          <Match key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
