"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowDown, ArrowUp } from "lucide-react";
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
    <Card className="relative bg-secondary dark:bg-gray-800 w-80 rounded-xl shadow-md transition hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base textDark capitalize font-lexend font-medium">{name}</CardTitle>
          <Switch
            checked={isActive}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-primary"
          />
        </div>
        <p className="text-2xl textDark font-bold">${balance.toFixed(2)}</p>
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
    </Card>
  );
};

export default AccountCard;
