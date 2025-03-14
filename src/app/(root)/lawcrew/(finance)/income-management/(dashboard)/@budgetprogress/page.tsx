"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  useGetAccountBudgetQuery,
  useGetAllAccountsQuery,
  useUpdateAccountBudgetMutation,
} from "@/store/api-endpoints/income-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X, Pencil } from "lucide-react";
import { useAppToasts } from "@/hooks/use-app-toast";

const BudgetProgressCard = () => {
  const { data: budgetData, isLoading: isBudgetLoading } = useGetAccountBudgetQuery();
  console.log("🚀 ~ BudgetProgressCard ~ budgetData:", budgetData)
  const { data: accountsData, isLoading: isAccountsLoading } = useGetAllAccountsQuery();

  const defaultAccount = useMemo(
    () => accountsData?.result.find((account) => account.isDefault),
    [accountsData]
  );
  console.log("🚀 ~ BudgetProgressCard ~ defaultAccount:", defaultAccount)

  const [isEditing, setIsEditing] = useState(false);
  const [localBudget, setLocalBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState(0);

  const { ErrorToast, SuccessToast } = useAppToasts();
  const [updateBudget] = useUpdateAccountBudgetMutation();

  useEffect(() => {
    const amount = Number(budgetData?.result?.budget?.amount ?? 0);
    setLocalBudget(amount);
    setInputBudget(amount);
  }, [budgetData]);
  

  const handleSave = async () => {
    try {
      setLocalBudget(inputBudget);
      setIsEditing(false);
      const resp = await updateBudget({ amount: inputBudget }).unwrap();
      if (resp.status === "success") {
        SuccessToast({ title: resp.message });
      }
    } catch {
      ErrorToast({ title: "Failed to update budget" });
    }
  };

  const handleCancel = () => {
    setInputBudget(localBudget);
    setIsEditing(false);
  };

  const expenses = defaultAccount?.balance ?? 0;
  const percentageUsed = useMemo(() => {
    const budgetAmount = localBudget || 1000;
    return Math.min((Number(expenses) / budgetAmount) * 100, 100);
  }, [expenses, localBudget]);

  return (
    <div className="p-7">
      <Card className="mx-auto w-full rounded-2xl border-none bg-white shadow-md dark:bg-gray-800">
        <CardHeader className="flex w-full">
          <CardTitle className="textDark font-lexend font-normal uppercase">
            Monthly Budget (Default Account)
          </CardTitle>
        </CardHeader>

        <CardContent>
          {isBudgetLoading || isAccountsLoading ? (
            <p className="textDark text-center text-sm">Loading...</p>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-between">
                <span className="textDark text-sm font-medium">
                  {percentageUsed.toFixed(0)}% Used
                </span>
              </div>

              <Progress value={percentageUsed} className="h-3 rounded-full" />

              <div className="textDark mt-2 flex justify-between text-sm">
                <span>₹{expenses} spent</span>
                <span>₹{localBudget || 1000} budget</span>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <Input
                  type="number"
                  value={inputBudget}
                  disabled={!isEditing}
                  onChange={(e) => setInputBudget(Number(e.target.value))}
                  className="textDark borderDark placeholder:textDark w-32"
                />

                {!isEditing ? (
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                    <Pencil className="textDark h-4 w-4" />
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" size="icon" onClick={handleSave}>
                      <Check className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleCancel}>
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetProgressCard;
