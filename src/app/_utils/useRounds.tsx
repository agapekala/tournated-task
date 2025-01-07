import { useEffect, useState } from "react";
import { IRound } from "../_lib/Round";
import { IMatch } from "../_lib/Match";

export default function useRounds(playersNum: number, matchesData: IMatch[]) {
  const [rounds, setRounds] = useState<IRound[]>([]);

  const calculateRoundsNum = (players: number): number =>
    Math.ceil(Math.log2(players));

  const calculateMatchesInRound = (roundIndex: number): number => {
    const teamsInRound = Math.floor(playersNum / Math.pow(2, roundIndex));
    return Math.floor(teamsInRound / 2);
  };

  const generateRounds = () => {
    const totalRounds = calculateRoundsNum(playersNum);
    const result: IRound[] = [];
    let startIdx = 0;

    for (let roundIdx = 0; roundIdx < totalRounds; roundIdx++) {
      const matchesNum = calculateMatchesInRound(roundIdx);
      const matches = matchesData.slice(startIdx, startIdx + matchesNum);
      startIdx += matchesNum;
      result.push(createRound(roundIdx, matches));
    }

    return result;
  };

  const createRound = (roundIndex: number, matches: IMatch[]): IRound => ({
    title: `Round ${roundIndex}`,
    matches,
  });

  useEffect(() => {
    if (playersNum > 0) {
      const rounds = generateRounds();
      setRounds(rounds);
    }
  }, [playersNum, matchesData]);

  return rounds;
}
