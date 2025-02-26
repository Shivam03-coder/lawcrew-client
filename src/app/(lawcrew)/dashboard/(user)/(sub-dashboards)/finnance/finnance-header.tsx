import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Banknote } from "lucide-react";

const FinanceHeader = () => {
  return (
    <div className="border-b card shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-3 gap-3 sm:gap-4">
        {/* Title */}
        <h1 className="flex items-center gap-2 sm:gap-3 font-lexend text-xl sm:text-2xl font-normal">
          Finance Management Dashboard
          <Banknote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-4">
          <Select>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Jan">January</SelectItem>
              <SelectItem value="Feb">February</SelectItem>
              <SelectItem value="Mar">March</SelectItem>
              <SelectItem value="Apr">April</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FinanceHeader;
