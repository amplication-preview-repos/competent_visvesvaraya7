import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type RatingWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  service?: ServiceWhereUniqueInput;
};
