import Tabs from "@/_components/tabs/tabs";

export default function Page() {
  return (
    <div className="grid min-h-screen h-full sm:grid-cols-[20%_80%] grid-cols-1 sm:grid-rows-[10rem_1fr] grid-rows-[5rem_5rem_auto]">
      <div className="flex items-center justify-center border bg-slate-500 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 row-end-auto ">
        SIDE NAV
      </div>
      <div className="flex items-center justify-center border  bg-slate-500 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 col-start-1 row-start-2">
        HERO BANNER
      </div>
      <div className="max-w-full min-h-full sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 col-start-1 row-start-3">
        <Tabs />
      </div>
    </div>
  );
}
