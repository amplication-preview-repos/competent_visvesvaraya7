import { BookingCreateNestedManyWithoutServicesInput } from "./BookingCreateNestedManyWithoutServicesInput";
import { RatingCreateNestedManyWithoutServicesInput } from "./RatingCreateNestedManyWithoutServicesInput";
import { InputJsonValue } from "../../types";

export type ServiceCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  date?: Date | null;
  bookings?: BookingCreateNestedManyWithoutServicesInput;
  ratings?: RatingCreateNestedManyWithoutServicesInput;
  image?: InputJsonValue;
};
