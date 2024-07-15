import { Service } from "../service/Service";
import { User } from "../user/User";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bookingDate: Date | null;
  service?: Service | null;
  user?: User | null;
};
