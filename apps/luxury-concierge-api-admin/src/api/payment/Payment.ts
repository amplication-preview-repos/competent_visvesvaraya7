import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status: string | null;
  paymentDate: Date | null;
  user?: User | null;
};
