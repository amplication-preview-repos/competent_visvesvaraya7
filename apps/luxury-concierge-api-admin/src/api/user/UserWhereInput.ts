import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  ratings?: RatingListRelationFilter;
  payments?: PaymentListRelationFilter;
  bookings?: BookingListRelationFilter;
};
