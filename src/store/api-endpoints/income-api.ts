import { EncryptData } from "@/utils/encrypt";
import ApiServices from "../middleware/api-services";
import { Account, TransactionForm } from "@/types/finance.types";
import {
  AccountResponse,
  AccountTransActionResponse,
  ApiResponse,
  BudgetResponse,
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
        url: `/finance/accounts/${accountId}/transactions`, // Ensuring consistency
        method: "GET",
      }),
      providesTags: (data, _error, body) =>
        data?.result.transactions
          ? [
              ...data.result.transactions.map((transaction) => ({
                type: "TRANSACTION" as const,
                id: transaction.id,
              })),
              { type: "TRANSACTION", id: `LIST-${body.accountId}` },
            ]
          : [{ type: "TRANSACTION", id: `LIST-${body.accountId}` }],
    }),

    createAccountTransaction: build.mutation<ApiResponse, TransactionForm>({
      query: (payload) => {
        const encryptedPayload = EncryptData(payload);
        return {
          url: "/finance/accounts/transactions",
          method: "POST",
          body: {
            payload: encryptedPayload,
          },
        };
      },
      invalidatesTags: (_result, _error, body) => [
        { type: "TRANSACTION", id: `LIST-${body.accountId}` },
        { type: "ACCOUNTS", id: "LIST" },
        { type: "BUDGET", id: body.budgetId },
      ],
    }),

    deleteAccountTransactions: build.mutation<
      ApiResponse,
      {
        accountId: string;
        transactionIds: string[];
      }
    >({
      query: ({ accountId, transactionIds }) => ({
        url: `/finance/accounts/${accountId}/transactions`,
        method: "DELETE",
        body: { transactionIds },
      }),
      invalidatesTags: (_result, _error, body) => {
        if (!body) return [];
        const { accountId, transactionIds } = body;
        return [
          ...transactionIds.map((id) => ({
            type: "TRANSACTION" as const,
            id,
          })),
          { type: "TRANSACTION", id: `LIST-${body.accountId}` },
          { type: "ACCOUNTS" as const, id: accountId },
          { type: "ACCOUNTS", id: "LIST" },
        ];
      },
    }),

    // Query Get Account Budget
    getAccountBudget: build.query<BudgetResponse, void>({
      query: () => ({
        url: "/finance/accounts/budget",
        method: "GET",
      }),
      providesTags: (budget) => {
        const id = budget?.result?.budget?.id ?? "LIST";
        return [{ type: "BUDGET", id }];
      },
    }),

    updateAccountBudget: build.mutation<ApiResponse, { amount: number }>({
      query: (payload) => {
        const encryptedPayload = EncryptData(payload);
        return {
          url: "/finance/accounts/budget",
          method: "POST",
          body: {
            payload: encryptedPayload,
          },
        };
      },
      invalidatesTags: (_result, _error, _arg) => [
        { type: "BUDGET", id: "LIST" },
      ],
    }),
  }),
});

// Export hooks
export const {
  useCreateAccountMutation,
  useGetAllAccountsQuery,
  useUpdateDefaultAccountMutation,
  useGetAccountTransactionsQuery,
  useDeleteAccountTransactionsMutation,
  useGetAccountBudgetQuery,
  useUpdateAccountBudgetMutation,
  useCreateAccountTransactionMutation,
} = financeServices;
