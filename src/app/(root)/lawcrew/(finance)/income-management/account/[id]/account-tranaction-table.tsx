import { Transaction } from "@/store/types/api";
import React, { FC } from "react";

interface AccountTranactionTableProps {
  transactions: Transaction[];
}
const AccountTranactionTable: FC<AccountTranactionTableProps> = ({
  transactions,
}) => {
  return <div>{JSON.stringify(transactions)}</div>;
};

export default AccountTranactionTable;
