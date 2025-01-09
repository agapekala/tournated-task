import Brackets from "@/_components/brackets";
import { matchesDummy } from "@/_lib/data/matchesData";

export default function Page() {
  return <Brackets matchesData={matchesDummy} />;
}
