import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartNoAxesCombined } from "lucide-react";

const TaxationHeader = () => {
  return (
    <div className="border-b">
      <div className="flex flex-col sm:flex-row h-auto sm:h-16 items-center px-4 sm:px-8 py-4 sm:py-0 gap-3 sm:gap-0">
        {/* Title */}
        <h1 className="flex items-center gap-3 font-lexend text-xl sm:text-2xl font-normal">
          Tax Management Dashboard <ChartNoAxesCombined className="h-5 w-5 sm:h-6 sm:w-6" />
        </h1>

        {/* Dropdowns */}
        <div className="ml-auto flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Select>
            <SelectTrigger className="w-[120px] sm:w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[120px] sm:w-[100px]">
              <SelectValue placeholder="Quarter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Q1">Q1</SelectItem>
              <SelectItem value="Q2">Q2</SelectItem>
              <SelectItem value="Q3">Q3</SelectItem>
              <SelectItem value="Q4">Q4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TaxationHeader;
