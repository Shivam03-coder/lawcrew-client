"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AccountCardProps {
  id: string;
  name: string;
  balance: number;
  type: string;
  isActive?: boolean;
  onToggle?: (id: string, value: boolean) => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
  id,
  name,
  balance,
  type,
  isActive = false,
  onToggle,
}) => {
  const handleToggle = (checked: boolean) => {
    if (onToggle) {
      onToggle(id, checked);
    }
  };

  return (
    <Card className="relative w-80 rounded-xl bg-secondary shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
      <Link href={`/lawcrew/income-management/account/${id}`}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="textDark font-lexend text-base font-medium capitalize">
              {name}
            </CardTitle>
            <Switch
              checked={isActive}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-primary"
            />
          </div>
          <p className="textDark text-2xl font-bold">${balance.toFixed(2)}</p>
          <p className="textDark text-sm">{type}</p>
        </CardHeader>

        <CardContent className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1 text-green-600">
            <ArrowUp className="h-4 w-4" />
            <span className="text-sm">Income</span>
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <ArrowDown className="h-4 w-4" />
            <span className="text-sm">Expense</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default AccountCard;

export const AccountCardSkeleton = () => {
  return (
    <div className="relative h-44 w-80 overflow-hidden rounded-xl">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600">
        <div className="shimmer absolute inset-0" />
      </div>

      <Card className="relative z-10 h-full w-full rounded-xl bg-[#f0f0f0] shadow-sm dark:bg-gray-700">
        <CardHeader className="flex items-start justify-between pb-2">
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-6 w-12 rounded bg-gray-200 dark:bg-gray-600" />
        </CardHeader>
        <CardContent className="flex h-full flex-col justify-between">
          <div className="mb-2 h-8 w-32 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="mb-4 h-4 w-24 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="flex justify-between">
            <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-600" />
            <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
