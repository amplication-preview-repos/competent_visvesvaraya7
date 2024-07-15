import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type RatingCreateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
};
