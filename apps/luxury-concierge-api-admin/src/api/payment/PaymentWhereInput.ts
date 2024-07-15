import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: StringNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
