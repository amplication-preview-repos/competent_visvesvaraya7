import { InputJsonValue } from "../../types";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  ratings?: RatingUpdateManyWithoutUsersInput;
  payments?: PaymentUpdateManyWithoutUsersInput;
  bookings?: BookingUpdateManyWithoutUsersInput;
};
