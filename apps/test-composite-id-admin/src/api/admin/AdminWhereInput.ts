import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  email?: IntFilter;
  id?: StringFilter;
  username?: IntFilter;
};
