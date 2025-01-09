export enum LocationType {
  CITY,
  CLUB,
}

export enum QualificationTag {
  Q = "Q",
  WC = "WC",
  LL = "LL",
  SE = "SE",
  PR = "PR",
}

export type ITeam = {
  id: number;
  name: string;
  qualificationTag?: QualificationTag;
  location: { type: LocationType; name: string };
  flag: string;
  scores: number[];
};
