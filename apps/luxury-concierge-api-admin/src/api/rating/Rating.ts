import { User } from "../user/User";
import { Service } from "../service/Service";

export type Rating = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  user?: User | null;
  service?: Service | null;
};
