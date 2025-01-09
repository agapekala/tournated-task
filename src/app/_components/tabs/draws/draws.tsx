import Brackets from "@/_components/brackets";
import Header from "@/_components/tabs/draws/header";
import { matchesDummy } from "@/_lib/data/matchesData";

export default function Draws() {
  const predefinedViewportBreakPoint = 768;

  return (
    <div className="h-full flex flex-col">
      <Header />
      <Brackets
        viewportBreakpoint={predefinedViewportBreakPoint}
        matchesData={matchesDummy}
      />
    </div>
  );
}
