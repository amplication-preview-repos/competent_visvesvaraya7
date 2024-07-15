import { JsonValue } from "type-fest";
import { Rating } from "../rating/Rating";
import { Payment } from "../payment/Payment";
import { Booking } from "../booking/Booking";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  ratings?: Array<Rating>;
  payments?: Array<Payment>;
  bookings?: Array<Booking>;
};
