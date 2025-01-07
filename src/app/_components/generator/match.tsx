import { IMatch } from "@/app/_lib/Match";
import Team from "./team";

interface MatchProps {
  match: IMatch;
}

export default function Match({ match }: MatchProps) {
  const getWinRoundIdxs = (scores1: number[], scores2: number[]): number[] => {
    if (scores1.length !== scores2.length) {
      return [];
    }

    return scores1.reduce((acc: number[], score: number, scoreIdx: number) => {
      if (score > scores2[scoreIdx]) {
        acc.push(scoreIdx);
      }
      return acc;
    }, []);
  };

  return (
    <div className="flex-1 flex items-center py-4 px-[1.5em] relative connector">
      <div className="w-full">
        <div className="text-center border-2 border-slate-100 rounded-md min-w-80 bg-white">
          <Team
            team={match.teams[0]}
            winRoundIdxs={getWinRoundIdxs(
              match.teams[0].scores,
              match.teams[1].scores
            )}
          />

          <Team
            team={match.teams[1]}
            winRoundIdxs={getWinRoundIdxs(
              match.teams[1].scores,
              match.teams[0].scores
            )}
          />
        </div>
        <p className="whitespace-nowrap text-xs">{match.date || ""}</p>
      </div>
    </div>
  );
}
