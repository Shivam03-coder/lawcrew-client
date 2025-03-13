import React, { FC } from "react";

interface AccountHeaderProps {
  name: string;
  balance: string;
  totalTransactions: number;
  type: "SAVINGS" | "CURRENT";
}
const AccountHeader: FC<AccountHeaderProps> = ({
  balance,
  name,
  totalTransactions,
  type,
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-6 py-4 shadow-sm dark:bg-gray-800">
      {/* Left Side */}
      <div className="space-y-2">
        <h2 className="bg-primary bg-clip-text font-lexend text-2xl font-extrabold capitalize text-transparent dark:text-secondary">
          {name}
        </h2>
        <p className="text-sm text-gray-500">
          {type?.charAt(0).toUpperCase() + type?.slice(1).toLowerCase() || ""}{" "}
          Account
        </p>
      </div>

      {/* Right Side */}
      <div className="space-y-2 text-right">
        <p className="text-lg font-bold text-black dark:text-secondary">
          ${balance || 0.0}
        </p>
        <p className="text-sm text-gray-500 dark:text-secondary">
          {totalTransactions} Transactions
        </p>
      </div>
    </div>
  );
};

export default AccountHeader;
