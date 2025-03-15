import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import CreateTransaction from "./create-transaction";
import { useGetAllAccountsQuery } from "@/store/api-endpoints/income-api";
import { AccountResult, Account } from "@/store/types/api";

type Props = {
  triggerLabel?: string;
  defaultAccountId?: string;
  accounts?: Account[];
  budgetId: string;
};

const TransactionModal: React.FC<Props> = ({
  triggerLabel = "New Transaction",
  defaultAccountId,
  accounts,
  budgetId,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-secondary">{triggerLabel}</Button>
      </DialogTrigger>
      <CreateTransaction
        accounts={accounts}
        defaultAccountId={defaultAccountId ?? ""}
        budgetId={budgetId}
      />
    </Dialog>
  );
};

export default TransactionModal;
