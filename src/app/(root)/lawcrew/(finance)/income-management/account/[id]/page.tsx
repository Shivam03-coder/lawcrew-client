"use client";

import React, { Suspense } from "react";
import { useGetAccountTransactionsQuery } from "@/store/api-endpoints/finance-api";
import { notFound } from "next/navigation";
import AccountHeader from "./account-header";
import AccountTranactionTable from "./account-tranaction-table";
import IncomeChart from "./income-chart";
import ExpenseChart from "./expense-chart";
import RemainingBalance from "./remaining-balance";

interface AccountPageProps {
  params: Promise<{
    id: string;
  }>;
}

const AccountPage = ({ params }: AccountPageProps) => {
  const { id } = React.use(params);

  const {
    data: AccountData,
    isLoading,
    isError,
    error,
  } = useGetAccountTransactionsQuery({
    accountId: id,
  });

  if (isLoading) {
    return <div>Loading transactions...</div>;
  }

  if (isError && !AccountData?.result && AccountData?.status === "failed") {
    notFound();
  }

  return (
    <div className="page">
      <Suspense>
        <AccountHeader
          balance={AccountData?.result.balance as string}
          name={AccountData?.result.name as string}
          totalTransactions={AccountData?.result._count.transactions!}
          type={AccountData?.result.type!}
        />
      </Suspense>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <IncomeChart transactions={AccountData?.result.transactions as any[]} />
        <ExpenseChart
          transactions={AccountData?.result.transactions as any[]}
        />
        <RemainingBalance
          balance={AccountData?.result.balance as string}
          transactions={AccountData?.result.transactions as any[]}
        />
      </div>
      <Suspense fallback={<h1 className="text-yellow-300">Loading......</h1>}>
        <AccountTranactionTable
          accountId={id}
          transactions={AccountData?.result.transactions as any[]}
        />
      </Suspense>
    </div>
  );
};

export default AccountPage;
