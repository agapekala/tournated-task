import { ReactElement } from "react";

import Flags from "country-flag-icons/react/3x2";
import { ITeam, LocationType, QualificationTag } from "@/_lib/types/Team";
import { BuildingOffice2Icon, MapPinIcon } from "@heroicons/react/24/solid";
import styles from "@/_styles/brackets.module.css";

type TeamProps = {
  team: ITeam;
  winRoundIdxs: number[];
  isWinner: boolean;
};

export default function Team({ team, winRoundIdxs, isWinner }: TeamProps) {
  return (
    <div className="flex justify-between border-b border-slate-100">
      <TeamData team={team} isWinner={isWinner} />
      <ScoreTable team={team} winRoundIdxs={winRoundIdxs} />
    </div>
  );
}

type FlagProps = {
  countryCode: string;
};

const Flag = ({ countryCode }: FlagProps) => {
  const FlagComponent = Flags[countryCode.toUpperCase() as keyof typeof Flags];
  return <FlagComponent />;
};

const TeamData = ({ team, isWinner }: { team: ITeam; isWinner: boolean }) => {
  const getLocationIcon = (locationType: LocationType): ReactElement => {
    const className = "size-3 mx-1";
    if (locationType === LocationType.CLUB) {
      return <BuildingOffice2Icon className={className} />;
    }
    return <MapPinIcon className={className} />;
  };

  return (
    <div className="grid grid-cols-auto items-center grid-rows-auto gap-0 w-fit py-2 text-sm">
      <p className="whitespace-nowrap col-start-1 col-span-1 row-start-1 row-span-1 px-2">
        {team.id}
      </p>
      <div
        className={`${styles.flag} col-start-2 col-span-1 row-start-1 row-span-1`}
      >
        <Flag countryCode={team.flag} />
      </div>
      <div className="whitespace-nowrap flex gap-1 items-center col-start-3 col-span-1 row-start-1 row-span-1 px-2 text-[#425466]">
        <p className={`${isWinner ? "text-accent-500" : ""} font-medium`}>
          {team.name}
        </p>
        <Tag tag={team.qualificationTag} />
      </div>

      <div className="whitespace-nowrap flex items-center col-start-3 col-span-1 row-start-2 row-span-1 px-2 text-secondary">
        {getLocationIcon(team.location.type)}
        <p className="text-xs">{team.location.name}</p>
      </div>
    </div>
  );
};

type ScoreTableProps = {
  team: ITeam;
  winRoundIdxs: number[];
};

const ScoreTable = ({ team, winRoundIdxs }: ScoreTableProps) => {
  return (
    <div className="flex">
      {team.scores.map((score, scoreIdx) => (
        <div
          className={`${
            winRoundIdxs.includes(scoreIdx)
              ? "text-accent-500 bg-gradient-to-t from-orange-50 to-white"
              : ""
          } flex items-center border-l px-2 text-sm`}
          key={scoreIdx}
        >
          {score}
        </div>
      ))}
    </div>
  );
};

const Tag = ({ tag }: { tag?: QualificationTag }) => {
  const getTagClass = (qualificationTag: QualificationTag): string => {
    switch (qualificationTag) {
      case QualificationTag.LL:
        return "bg-tag-LL";
      case QualificationTag.PR:
        return "bg-tag-PR";
      case QualificationTag.Q:
        return "bg-tag-Q";
      case QualificationTag.SE:
        return "bg-tag-SE";
      case QualificationTag.WC:
        return "bg-tag-WC";
      default:
        return "";
    }
  };
  if (!tag) return;
  return (
    <p className={`${getTagClass(tag)} text-xs px-1 rounded-sm font-semibold`}>
      {tag}
    </p>
  );
};
