import Tabs from "../_components/tabs/tabs";

export default function Page() {
  return (
    <div className="grid sm:grid-cols-[20%_80%] sm:grid-rows-[10rem_1fr] min-h-screen h-full grid-cols-1 grid-rows-[5rem_5rem_auto]">
      <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 row-end-auto border flex items-center justify-center bg-slate-500">
        SIDE NAV
      </div>
      <div className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 col-start-1 row-start-2 border flex items-center justify-center bg-slate-500">
        HERO BANNER
      </div>
      <div className="max-w-full min-h-full sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 col-start-1 row-start-3">
        <Tabs />
      </div>
    </div>
  );
}
