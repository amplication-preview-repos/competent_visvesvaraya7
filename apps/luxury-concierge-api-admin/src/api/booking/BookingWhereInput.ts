import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  bookingDate?: DateTimeNullableFilter;
  service?: ServiceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
