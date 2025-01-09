import Brackets from "../../brackets/brackets";
import Header from "../../brackets/header";

export default function Draws() {
  const predefinedViewportBreakPoint = 768;

  return (
    <div className="h-full flex flex-col">
      <Header />
      <Brackets viewportBreakpoint={predefinedViewportBreakPoint} />
    </div>
  );
}
