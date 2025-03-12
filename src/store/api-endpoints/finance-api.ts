import { EncryptData } from "@/utils/encrypt";
import ApiServices from "../middleware/api-services";
import { Account } from "@/types/finance.types";

const financeServices = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    createAccount: build.mutation<ApiResponse, Account>({
      query: (payload) => {
        const encryptedPayload = EncryptData(payload);
        return {
          url: "/finance/create-account",
          method: "POST",
          body: {
            payload: encryptedPayload,
          },
        };
      },
    }),
  }),
});

export const { useCreateAccountMutation } = financeServices;
