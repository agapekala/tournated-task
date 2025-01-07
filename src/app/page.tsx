import Wrapper from "./_components/wrapper";
import { NextUIProvider } from "@nextui-org/react";

export default function Page() {
  return (
    <NextUIProvider>
      <div className="px-80 h-[85vh]">
        <Wrapper />
      </div>
    </NextUIProvider>
  );
}
