import { EncryptData } from "@/utils/encrypt";
import ApiServices from "../middleware/api-services";
import { Account } from "@/types/finance.types";
import { AccountResponse, ApiResponse } from "../types/api";

const financeServices = ApiServices.injectEndpoints({
  endpoints: (build) => ({
    // Mutation: Create Account
    createAccount: build.mutation<ApiResponse, Account>({
      query: (payload) => {
        const encryptedPayload = EncryptData(payload);
        return {
          url: "/finance/accounts",
          method: "POST",
          body: {
            payload: encryptedPayload,
          },
        };
      },
      invalidatesTags: [{ type: "ACCOUNTS", id: "LIST" }],
    }),

    getAllAccounts: build.query<AccountResponse, void>({
      query: () => ({
        url: "/finance/accounts",
        method: "GET",
      }),
      providesTags: (accounts) =>
        accounts?.result
          ? [
              ...accounts.result.map((account) => ({
                type: "ACCOUNTS" as const,
                id: account.id,
              })),
              {
                type: "ACCOUNTS",
                id: "LIST",
              },
            ]
          : [{ type: "ACCOUNTS", id: "LIST" }],
    }),
  }),
});

// Export hooks
export const { useCreateAccountMutation, useGetAllAccountsQuery } =
  financeServices;
