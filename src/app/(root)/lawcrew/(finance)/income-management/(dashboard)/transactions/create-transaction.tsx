import React from "react";
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

const CreateTransaction = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "",
      amount: "",
      account: "",
      category: "",
      description: "",
      date: new Date(),
      recurring: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
            className="w-full bg-pink-500 font-semibold text-white hover:bg-pink-600"
          >
            <span className="mr-2">📷</span> Scan Receipt with AI
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
                <SelectItem value="TRANSFER">Transfer</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          {/* Amount */}
          <FormField label="Amount" error={errors.amount?.message}>
            <Input
              type="number"
              {...register("amount", { required: "Amount is required" })}
              placeholder="0.00"
              className={cn(
                "borderDark textDark w-full transition-colors",
                errors.amount &&
                  "border-destructive focus-visible:ring-destructive/30",
              )}
            />
          </FormField>

          {/* Account */}
          <FormField label="Account" error={errors.account?.message}>
            <Select
              onValueChange={(val) => setValue("account", val)}
              defaultValue={watch("account")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Account</SelectItem>
                <SelectItem value="savings">Savings Account</SelectItem>
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
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
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
                    !watch("date") && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {watch("date") ? (
                    format(watch("date"), "PPP")
                  ) : (
                    <span>Select date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={watch("date")}
                  onSelect={(date) => setValue("date", date || new Date())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormField>

          {/* Recurring */}
          <FormField label="Recurring" error={errors.category?.message}>
            <Select
              onValueChange={(val) => setValue("category", val)}
              defaultValue={watch("category")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select recurring" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Daily</SelectItem>
                <SelectItem value="shopping">Weekly</SelectItem>
                <SelectItem value="rent">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </FormField>

          {/* Description - spans 2 columns */}
          <FormField className="col-span-2"  label="Description" error={errors.description?.message}>
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
