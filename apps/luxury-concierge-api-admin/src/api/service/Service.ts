import { Booking } from "../booking/Booking";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  date: Date | null;
  bookings?: Array<Booking>;
  ratings?: Array<Rating>;
  image: JsonValue;
};
