import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comment?: SortOrder;
  rating?: SortOrder;
  userId?: SortOrder;
  serviceId?: SortOrder;
};
