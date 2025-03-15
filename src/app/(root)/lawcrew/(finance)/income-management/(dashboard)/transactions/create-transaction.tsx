"use client";

import React, { FC } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import FormField from "@/components/form-feild";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/schema";
import { categories, getCategoriesByType } from "@/constants";
import { Account } from "@/store/types/api";
import { useCreateAccountTransactionMutation } from "@/store/api-endpoints/income-api";
import { TransactionForm } from "@/types/finance.types";
import { useAppToasts } from "@/hooks/use-app-toast";

interface CreateTransactionProps {
  defaultAccountId: string;
  accounts?: Account[];
  budgetId: string;
}

const CreateTransaction: FC<CreateTransactionProps> = ({
  defaultAccountId,
  accounts,
  budgetId,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      type: "EXPENSE",
      amount: "",
      description: "",
      date: new Date(),
      accountId: defaultAccountId,
      category: "EXPENSE",
      isRecurring: false,
      recurringInterval: "MONTHLY",
    },
  });

  const [createAccountTransaction, { isLoading }] =
    useCreateAccountTransactionMutation();
  const { ErrorToast, SuccessToast } = useAppToasts();
  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      amount: parseFloat(data.amount),
      budgetId,
    };
    try {
      const res = await createAccountTransaction(data).unwrap();
      if (res.status === "success") {
        SuccessToast({
          title: res.message,
        });
        reset();
      }
    } catch (error) {
      ErrorToast({
        title: "Something went wrong ❌",
      });
    }
  };

  const type = watch("type") as keyof typeof categories;
  const filteredCategories = getCategoriesByType(type);
  const selectedDate = watch("date");
  const isRecurring = watch("isRecurring");

  return (
    <DialogContent className="bg-white sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Create Transaction</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="col-span-2">
          <Button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-pink-600"
          >
            <span className="text-lg">📷</span>
            Scan Receipt with AI
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="Type" error={errors.type?.message}>
            <Select
              onValueChange={(val) => setValue("type", val)}
              defaultValue={watch("type")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EXPENSE">Expense</SelectItem>
                <SelectItem value="INCOME">Income</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Amount" error={errors.amount?.message}>
            <Input
              type="number"
              {...register("amount")}
              placeholder="0.00"
              step={0.05}
              className={cn(
                "borderDark textDark w-full transition-colors",
                errors.amount &&
                  "border-destructive focus-visible:ring-destructive/30",
              )}
            />
          </FormField>

          <FormField label="Account" error={errors.accountId?.message}>
            <Select
              onValueChange={(val) => setValue("accountId", val)}
              defaultValue={watch("accountId")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                {accounts?.map((account) => (
                  <SelectItem
                    className="capitalize"
                    key={account.id}
                    value={account.id}
                  >
                    {account.name} ₹{parseFloat(account.balance).toFixed(2)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Category" error={errors.category?.message}>
            <Select
              onValueChange={(val) => setValue("category", val)}
              defaultValue={watch("category")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {filteredCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField label="Date">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setValue("date", date || new Date())}
                  initialFocus
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                />
              </PopoverContent>
            </Popover>
          </FormField>

          <FormField label="Recurring">
            <div className="flex h-full items-center justify-between rounded-md p-[0.4375rem] px-3 shadow">
              <h5 className="text-sm font-semibold text-gray-900">
                Recurring Transaction
              </h5>
              <Switch
                checked={isRecurring}
                onCheckedChange={(checked) => setValue("isRecurring", checked)}
              />
            </div>
          </FormField>

          {isRecurring && (
            <FormField
              className="col-span-2"
              label="Recurring Interval"
              error={errors.recurringInterval?.message}
            >
              <Select
                onValueChange={(val) => setValue("recurringInterval", val)}
                defaultValue={watch("recurringInterval")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {["DAILY", "WEEKLY", "MONTHLY", "YEARLY"].map((interval) => (
                    <SelectItem key={interval} value={interval}>
                      {interval}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          )}

          <FormField
            className="col-span-2"
            label="Description"
            error={errors.description?.message}
          >
            <Textarea
              {...register("description")}
              placeholder="Add description (optional)"
              className={cn(
                "borderDark textDark w-full transition-colors",
                errors.description &&
                  "border-destructive focus-visible:ring-destructive/30",
              )}
            />
          </FormField>
        </div>

        <DialogFooter className="col-span-2">
          <Button
            type="submit"
            className={cn(
              "w-full bg-primary font-lexend uppercase text-secondary transition-all",
              isLoading
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/80",
            )}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateTransaction;
