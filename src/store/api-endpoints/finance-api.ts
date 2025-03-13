import { EncryptData } from "@/utils/encrypt";
import ApiServices from "../middleware/api-services";
import { Account } from "@/types/finance.types";
import {
  AccountResponse,
  AccountTransActionResponse,
  ApiResponse,
  UpdateDefaultAccountResponse,
} from "../types/api";

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

    // Query: Get All Accounts

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

    // Mutation: Update Default Account

    updateDefaultAccount: build.mutation<
      UpdateDefaultAccountResponse,
      { accountId: string }
    >({
      query: ({ accountId }) => ({
        url: `/finance/accounts/${accountId}`,
        method: "PATCH",
      }),
      invalidatesTags: (data) =>
        data
          ? [
              { type: "ACCOUNTS", id: data.result.id },
              { type: "ACCOUNTS", id: "LIST" },
            ]
          : [{ type: "ACCOUNTS", id: "LIST" }],
    }),

    getAccountTransactions: build.query<
      AccountTransActionResponse,
      { accountId: string }
    >({
      query: ({ accountId }) => ({
        url: `/finance/accounts/${accountId}/transactions`,
        method: "GET",
      }),
      providesTags: (data) =>
        data?.result.transactions
          ? [
              ...data.result.transactions.map((transaction) => ({
                type: "TRANSACTION" as const,
                id: transaction.id,
              })),
              { type: "TRANSACTION", id: "LIST" },
            ]
          : [{ type: "TRANSACTION", id: "LIST" }],
    }),
  }),
});

// Export hooks
export const {
  useCreateAccountMutation,
  useGetAllAccountsQuery,
  useUpdateDefaultAccountMutation,
  useGetAccountTransactionsQuery,
} = financeServices;
