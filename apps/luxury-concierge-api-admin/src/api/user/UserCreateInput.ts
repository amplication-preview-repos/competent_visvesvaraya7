import { InputJsonValue } from "../../types";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  bookings?: BookingCreateNestedManyWithoutUsersInput;
};
