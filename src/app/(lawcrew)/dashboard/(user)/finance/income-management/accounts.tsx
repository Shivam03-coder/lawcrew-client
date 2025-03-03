import { Button } from "@/components/ui/button";
import { Plus, PlusCircle } from "lucide-react";
import React from "react";
import AddAccount from "../../finance/income-management/add-account";
import AccountDataTable from "./account-data-table";

const Accounts = () => {
  return (
    <div className="h-full w-full rounded-md bg-white p-5 font-lexend">
      <div className="flex items-center justify-between px-4 lg:px-8">
        <h5>Accounts</h5>
        <AddAccount />
      </div>
      <AccountDataTable />
    </div>
  );
};

export default Accounts;
