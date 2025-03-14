import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import CreateTransaction from "./create-transaction";

type Props = {
  triggerLabel?: string; // Optional label for the trigger button
};

const TransactionModal: React.FC<Props> = ({
  triggerLabel = "New Transaction",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-secondary">{triggerLabel}</Button>
      </DialogTrigger>
      <CreateTransaction />
    </Dialog>
  );
};

export default TransactionModal;
