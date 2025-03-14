"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Sector, Cell } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Transaction } from "@/store/types/api";
import { FC, useMemo } from "react";
import dayjs from "dayjs";
import { monthsOrder, RandomColor } from "@/constants";

const colorPalette = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#C9CBCF",
  "#8E44AD",
  "#2ECC71",
  "#E74C3C",
  "#3498DB",
  "#F1C40F",
];

interface ExpenseChartProps {
  transactions: Transaction[];
}

const ExpenseChart: FC<ExpenseChartProps> = ({ transactions }) => {
  const TotalExpenseData = useMemo(() => {
    const expenseByMonth = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "EXPENSE") {
          const monthName = dayjs(transaction.date).format("MMMM").slice(0, 3);
          acc[monthName] = (acc[monthName] || 0) + Number(transaction.amount);
        }
        return acc;
      },
      {} as Record<string, number>,
    );

    const sortedData = monthsOrder
      .map((month, i) => ({
        month,
        total: expenseByMonth[month] || 0,
        color: RandomColor(),
      }))
      .filter((data) => data.total > 0);

    return sortedData;
  }, [transactions]);

  const dynamicChartConfig: ChartConfig = useMemo(() => {
    const config: ChartConfig = {};
    TotalExpenseData.forEach((data) => {
      config[data.month] = {
        label: data.month,
        color: data.color,
      };
    });
    return config;
  }, [TotalExpenseData]);

  const firstMonth = TotalExpenseData[0]?.month;
  const lastMonth = TotalExpenseData[TotalExpenseData.length - 1]?.month;

  return (
    <Card className="flex flex-col border-none bg-white dark:bg-gray-800">
      <CardHeader className="items-center pb-0">
        <CardDescription className="uppercase textDark font-lexend text-xl">
         Expense from {firstMonth && lastMonth
            ? `${firstMonth} - ${lastMonth} 2024`
            : "No data available"}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={dynamicChartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-white" hideLabel />}
            />
            <Pie
              data={TotalExpenseData}
              dataKey="total"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              {TotalExpenseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground textDark font-lexend leading-none">
          {firstMonth && lastMonth
            ? `Showing expenses from ${firstMonth} to ${lastMonth} 2024`
            : "No expense data"}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExpenseChart;
