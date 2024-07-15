import { BookingUpdateManyWithoutServicesInput } from "./BookingUpdateManyWithoutServicesInput";
import { RatingUpdateManyWithoutServicesInput } from "./RatingUpdateManyWithoutServicesInput";
import { InputJsonValue } from "../../types";

export type ServiceUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  date?: Date | null;
  bookings?: BookingUpdateManyWithoutServicesInput;
  ratings?: RatingUpdateManyWithoutServicesInput;
  image?: InputJsonValue;
};
