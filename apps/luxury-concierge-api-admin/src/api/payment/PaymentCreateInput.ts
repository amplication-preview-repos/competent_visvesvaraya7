import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  status?: string | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
