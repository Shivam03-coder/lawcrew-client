"use client";
import React from "react";
import CreateAccount from "./create-account";
import {
  useGetAllAccountsQuery,
  useUpdateDefaultAccountMutation,
} from "@/store/api-endpoints/finance-api";
import AccountCard, { AccountCardSkeleton } from "./account-card";
import { useAppToasts } from "@/hooks/use-app-toast";

const Accounts = () => {
  const { data: AccountData, isLoading, isFetching } = useGetAllAccountsQuery();
  const [UpdateDefaultAccount] = useUpdateDefaultAccountMutation();
  const { ErrorToast, SuccessToast } = useAppToasts();

  // Handle toggle default account
  const handleToggleDefault = async (id: string, value: boolean) => {
    try {
      const resp = await UpdateDefaultAccount({ accountId: id }).unwrap();
      if (resp.status === "success") {
        SuccessToast({
          title: resp.message,
        });
      }
    } catch (error) {
      ErrorToast({
        title: "Failed to update default account",
      });
    }
  };

  return (
    <div className="grid gap-7 p-7 md:grid-cols-3 lg:grid-cols-4">
      <CreateAccount />

      {/* Show skeletons if loading */}
      {(isLoading || isFetching) &&
        Array.from({ length: 8 }).map((_, i) => (
          <AccountCardSkeleton key={`skeleton-${i}`} />
        ))}

      {/* Show actual data after loading */}
      {!isLoading &&
        AccountData?.status === "success" &&
        AccountData.result.length > 0 &&
        AccountData.result.map((account) => (
          <AccountCard
            key={account.id}
            id={account.id}
            name={account.name}
            balance={Number(account.balance)}
            type={account.type}
            isActive={account.isDefault}
            onToggle={handleToggleDefault}
          />
        ))}
    </div>
  );
};

export default Accounts;
