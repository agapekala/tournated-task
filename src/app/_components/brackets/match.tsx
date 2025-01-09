import { IMatch } from "@/_lib/types/Match";
import { analyzeMatch, MatchResult } from "@/_utils/bracketsUtils";
import styles from "@/_styles/brackets.module.css";

import Team from "./team";

type MatchProps = {
  match: IMatch;
  roundIdx: number;
};

export default function Match({ match, roundIdx }: MatchProps) {
  const result: MatchResult = analyzeMatch(match);

  return (
    <div
      className={`flex-1 flex w-full items-center py-4 px-[1.5em] relative ${styles.connector}`}
    >
      <div className="w-full">
        <div className="text-center border-2 border-slate-100 rounded-md min-w-80 bg-white">
          <Team
            team={match.teams[0]}
            winRoundIdxs={result.winningSets[match.teams[0].id]}
            isWinner={result.winningTeam === match.teams[0].id}
          />

          <Team
            team={match.teams[1]}
            winRoundIdxs={result.winningSets[match.teams[1].id]}
            isWinner={result.winningTeam === match.teams[1].id}
          />
        </div>
        <MatchFooter match={match} roundIdx={roundIdx} />
      </div>
    </div>
  );
}

const MatchFooter = ({ match, roundIdx }: MatchProps) => {
  return (
    <div className="flex justify-between whitespace-nowrap text-xs text-[#86909F]">
      <span>
        Round {roundIdx + 1} - {match.date || ""} - {match.location}
      </span>
      <a href="">View Details</a>
    </div>
  );
};
