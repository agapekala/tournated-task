import { ITeam } from "./Team";

export type IMatch = {
  id: number;
  teams: Array<ITeam>;
  date?: string;
};
export { ITeam };
