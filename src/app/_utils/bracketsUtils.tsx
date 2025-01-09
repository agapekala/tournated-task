import { IMatch } from "../_lib/types/Match";

export type MatchResult = {
  winningTeam: number | null;
  winningSets: { [teamId: number]: number[] };
};

export const analyzeMatch = (match: IMatch): MatchResult => {
  const [team1, team2] = match.teams;
  const team1Wins: number[] = [];
  const team2Wins: number[] = [];

  team1.scores.forEach((score, index) => {
    if (score > team2.scores[index]) {
      team1Wins.push(index);
    } else if (score < team2.scores[index]) {
      team2Wins.push(index);
    }
  });

  const team1SetWins = team1Wins.length;
  const team2SetWins = team2Wins.length;

  let winningTeam: number | null = null;
  if (team1SetWins > team2SetWins) {
    winningTeam = team1.id;
  } else if (team2SetWins > team1SetWins) {
    winningTeam = team2.id;
  }

  return {
    winningTeam,
    winningSets: {
      [team1.id]: team1Wins,
      [team2.id]: team2Wins,
    },
  };
};
