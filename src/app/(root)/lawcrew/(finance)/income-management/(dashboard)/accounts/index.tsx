"use client";
import React from "react";
import CreateAccount from "./create-account";
import { useGetAllAccountsQuery } from "@/store/api-endpoints/finance-api";
import AccountCard from "./account-card";

const Accounts = () => {
  const { data } = useGetAllAccountsQuery();
  const handleToggleDefault = (id: string, value: boolean) => {
    console.log("Toggled account", id, "Active:", value);
  };

  return (
    <div className="grid gap-7 p-7 md:grid-cols-3 lg:grid-cols-4">
      <CreateAccount />
      {data?.status === "success" &&
        data.result.length > 0 &&
        data.result.map((account) => {
          return (
            <AccountCard
              key={account.id}
              id={account.id}
              name={account.name}
              balance={Number(account.balance)}
              type={account.type}
              isActive={account.isDefault}
              onToggle={handleToggleDefault}
            />
          );
        })}
    </div>
  );
};

export default Accounts;
