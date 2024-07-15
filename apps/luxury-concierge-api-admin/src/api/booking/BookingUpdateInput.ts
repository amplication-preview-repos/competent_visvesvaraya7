import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  service?: ServiceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
