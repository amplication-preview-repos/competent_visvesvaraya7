import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: string | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
