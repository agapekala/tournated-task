import { ITeam } from "@/app/_lib/Match";
import Flags from "country-flag-icons/react/3x2";
import { MapPinIcon } from "@heroicons/react/24/solid";

type TeamProps = {
  team: ITeam;
  winRoundIdxs: number[];
};

export default function Team({ team, winRoundIdxs }: TeamProps) {
  type FlagProps = {
    countryCode: string;
  };

  const Flag = ({ countryCode }: FlagProps) => {
    const FlagComponent =
      Flags[countryCode.toUpperCase() as keyof typeof Flags];
    return <FlagComponent />;
  };
  return (
    <div className="flex justify-between border-b border-slate-100">
      <div className="grid grid-cols-auto grid-rows-auto gap-0 w-fit py-2">
        <p className="whitespace-nowrap px-2 col-start-1 col-span-1 row-start-1 row-span-1 text-left">
          {team.id}
        </p>
        <div className="h-auto w-4 lg:w-8 col-start-2 col-span-1 row-start-1 row-span-1">
          <Flag countryCode={team.flag} />
        </div>
        <span className="whitespace-nowrap px-2 col-start-3 col-span-1 row-start-1 row-span-1 text-left">
          {team.name}
        </span>
        <div className="flex items-center px-2 col-start-3 col-span-1 row-start-2 row-span-1 text-secondary">
          <MapPinIcon className="size-3 mx-1" />
          <span className="whitespace-nowrap text-left text-xs">
            {team.city}
          </span>
        </div>
      </div>
      <div className="flex">
        {team.scores.map((score, scoreIdx) => (
          <div
            className={`${
              winRoundIdxs.includes(scoreIdx)
                ? "text-accent bg-gradient-to-t from-orange-50 to-white"
                : ""
            } flex items-center border-l px-2 `}
            key={scoreIdx}
          >
            {score}
          </div>
        ))}
      </div>
    </div>
  );
}
