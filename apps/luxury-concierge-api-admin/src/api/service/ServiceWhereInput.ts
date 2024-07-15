import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  bookings?: BookingListRelationFilter;
  ratings?: RatingListRelationFilter;
  image?: JsonFilter;
};
