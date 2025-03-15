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

interface CreateTransactionProps {
  defaultAccountId: string;
  accounts?: Account[];
}
const CreateTransaction: FC<CreateTransactionProps> = ({
  defaultAccountId,
  accounts,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
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

  const onSubmit = (data: any) => {
    console.log("Transaction data:", data);
  };

  const type = watch("type") as keyof typeof categories;
  const filteredCategories = getCategoriesByType(type);
  const selectedDate = watch("date");
  const isRecurring = watch("isRecurring");

  return (
    <DialogContent className="bg-white sm:max-w-[700px]">
      <DialogHeader>
        <DialogTitle>Create Transaction</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Scan Receipt */}
        <div className="col-span-2">
          <Button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-pink-600"
          >
            <span className="text-lg">📷</span>
            Scan Receipt with AI
          </Button>
        </div>

        {/* Grid for fields */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Type */}
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

          {/* Amount */}
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

          {/* Account */}
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
                    {account.name} ₹{parseFloat(account.balance)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          {/* Category */}
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

          {/* Date */}
          <FormField label="Date">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? (
                    format(selectedDate, "PPP")
                  ) : (
                    <span>Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => setValue("date", date || new Date())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormField>

          {/* Recurring */}
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
              className="col-span-2 transition-all duration-300"
              label="Recurring Interval"
              error={errors.recurringInterval?.message}
            >
              <Select
                onValueChange={(val) => setValue("recurringInterval", val)}
                defaultValue={watch("recurringInterval")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {["DAILY", "WEEKLY", "MONTHLY", "YEARLY"].map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          )}

          {/* Description - spans 2 columns */}
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

        {/* Submit Button */}
        <DialogFooter className="col-span-2">
          <Button
            type="submit"
            className="w-full bg-primary font-lexend uppercase text-secondary"
          >
            Create
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default CreateTransaction;
