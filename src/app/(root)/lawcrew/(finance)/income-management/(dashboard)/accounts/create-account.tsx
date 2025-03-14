"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountSchema } from "@/schema";
import { cn } from "@/lib/utils";
import { type Account } from "@/types/finance.types";
import FormField from "@/components/form-feild";
import { Label } from "@/components/ui/label";
import { useCreateAccountMutation } from "@/store/api-endpoints/income-api";
import { useAppToasts } from "@/hooks/use-app-toast";
const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const { ErrorToast, SuccessToast } = useAppToasts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<Account>({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      name: "",
      balance: "",
      type: "CURRENT",
      isDefault: false,
    },
  });

  const [CreateAccount, { isLoading }] = useCreateAccountMutation();

  const onSubmit = async (data: Account) => {
    try {
      const res = await CreateAccount(data).unwrap();

      if (res.status === "success") {
        SuccessToast({
          title: "Account created Successfully ✅",
        });
        reset();
        setOpen(false);
      }
    } catch (error) {
      ErrorToast({
        title: "Something went wrong ❌",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="bg-white dark:bg-gray-800 group flex h-44 w-80 cursor-pointer flex-col items-center justify-center rounded-xl border-dashed transition-all hover:scale-105 hover:shadow-lg">
          <CardHeader className="flex flex-col items-center justify-center p-0">
            <div className="bg-primary/5 group-hover:bg-primary/10 rounded-full p-3 transition-colors">
              <Plus className="textDark h-8 w-8" />
            </div>
          </CardHeader>
          <CardContent className="textDark mt-4 p-0 text-center">
            <p className="text-base font-medium">Create New Account</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Add a new financial account
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-primary sm:max-w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="textDark">
            <DialogTitle className="font-lexend text-2xl font-normal">
              Create New Account
            </DialogTitle>
            <DialogDescription>
              Add a new account to manage your finances. Fill in the details
              below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-6">
            <FormField label="Account Name" error={errors.name?.message}>
              <Input
                {...register("name")}
                placeholder="e.g., Main Checking"
                className={cn(
                  "borderDark textDark w-full transition-colors",
                  errors.name &&
                    "border-destructive focus-visible:ring-destructive/30",
                )}
              />
            </FormField>

            <FormField label="Initial Balance" error={errors.balance?.message}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  {...register("balance")}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className={cn(
                    "borderDark textDark w-full pl-7 transition-colors",
                    errors.balance &&
                      "border-destructive focus-visible:ring-destructive/30",
                  )}
                />
              </div>
            </FormField>

            <FormField label="Account Type" error={errors.type?.message}>
              <Select
                onValueChange={(value) => setValue("type", value)}
                defaultValue={watch("type")}
              >
                <SelectTrigger
                  className={cn(
                    "textDark w-full transition-colors",
                    errors.type &&
                      "border-destructive focus-visible:ring-destructive/30",
                  )}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="textDark bg-white dark:bg-gray-800">
                  <SelectItem value="CURRENT">Current Account</SelectItem>
                  <SelectItem value="SAVINGS">Savings Account</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Default Account</Label>
              <div className="flex items-center space-x-3">
                <Switch
                  id="isDefault"
                  checked={watch("isDefault")}
                  onCheckedChange={(value) => setValue("isDefault", value)}
                />
                <Label htmlFor="isDefault" className="text-sm font-normal">
                  {watch("isDefault")
                    ? "This will be your primary account"
                    : "Set as primary account"}
                </Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="hover:bg-primary/90 bg-primary text-secondary dark:bg-secondary dark:text-primary"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccount;
