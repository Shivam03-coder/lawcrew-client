import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";

// Define the AccountData interface
interface AccountData {
  amount: string;
  status: "Pending" | "Completed";
  bankName: string;
  accountNumber: string;
}

function AddAccount() {
  const [formData, setFormData] = useState<AccountData>({
    amount: "",
    status: "Pending",
    bankName: "",
    accountNumber: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle status change
  const handleStatusChange = (value: "Pending" | "Completed") => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Account Data:", formData);
    // Reset form after submission
    setFormData({
      amount: "",
      status: "Pending",
      bankName: "",
      accountNumber: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-x-3 text-white">
          <PlusCircle /> Add Account
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Add New Account</DialogTitle>
          <DialogDescription>
            Enter your account details and click submit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="accountNumber" className="text-right">
              Account #
            </Label>
            <Input
              id="accountNumber"
              type="number"
              placeholder="1234567890"
              className="col-span-3"
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bankName" className="text-right whitespace-nowrap">
              Bank Name
            </Label>
            <Input
              id="bankName"
              type="text"
              placeholder="XYZ Bank"
              className="col-span-3"
              value={formData.bankName}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="col-span-3"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Status</Label>
            <Select onValueChange={handleStatusChange} value={formData.status}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="flex justify-end gap-2">
          <Button type="button" className="rounded-full bg-red-200">
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-green-200"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddAccount;