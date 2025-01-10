import { IMatch } from "@/_lib/types/Match";
import styles from "@/_styles/brackets.module.css";
import { analyzeMatch, MatchResult } from "@/_utils/bracketsUtils";

import Team from "./team";

type MatchProps = {
  match: IMatch;
  roundIdx: number;
};

export default function Match({ match, roundIdx }: MatchProps) {
  const result: MatchResult = analyzeMatch(match);

  return (
    <div
      className={`${styles.connector} flex flex-1 w-full items-center py-4 px-[var(--connector-gap)] relative`}
    >
      <div className="w-full">
        <div className="min-w-80 text-center border-2 border-slate-100 rounded-md bg-white">
          {match.teams.map((team) => (
            <Team
              key={team.id}
              team={team}
              winRoundIdxs={result.winningSets[team.id]}
              isWinner={result.winningTeam === team.id}
            />
          ))}
        </div>
        <MatchFooter match={match} roundIdx={roundIdx} />
      </div>
    </div>
  );
}

const MatchFooter = ({ match, roundIdx }: MatchProps) => {
  return (
    <div className="flex justify-between whitespace-nowrap text-xs text-typography-secondary">
      <span>
        Round {roundIdx + 1} - {match.date || ""} - {match.location}
      </span>
      <a href="">View Details</a>
    </div>
  );
};
