import Brackets from "@/_components/brackets";
import Header from "@/_components/tabs/draws/header";
import { matchesDummy } from "@/_lib/data/matchesData";

export default function Draws() {
  const predefinedViewportBreakPoint = 768;

  return (
    <div className="flex flex-col h-full ">
      <Header />
      <Brackets
        viewportBreakpoint={predefinedViewportBreakPoint}
        matchesData={matchesDummy}
      />
    </div>
  );
}
