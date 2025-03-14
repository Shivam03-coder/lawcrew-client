"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Cell,
} from "recharts";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
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
import { useMemo } from "react";
import { cn } from "@/lib/utils"; // assuming you have a utility for conditional class names
import { useTheme } from "next-themes"; // for dark mode detection
import { useAppSelector } from "@/store";

interface AccountChartProps {
  transactions: Transaction[];
}

const chartConfig = {
  amount: {
    label: "Amount",
  },
  expense: {
    label: "Expense",
    color: "hsl(0, 100%, 50%)",
  },
  income: {
    label: "Income",
    color: "#4CC9FE",
  },
} satisfies ChartConfig;

const AccountChart: React.FC<AccountChartProps> = ({ transactions }) => {
  const { theme } = useTheme();

  const isDarkMode = useAppSelector((state) => state.global).isDarkMode;

  const chartData = useMemo(() => {
    return transactions
      .map((transaction) => ({
        id: transaction.id,
        date: format(new Date(transaction.date), "yyyy-MM-dd"),
        amount: Number(transaction.amount),
        type: transaction.type,
        description: transaction.description || "No description",
        formattedDate: format(new Date(transaction.date), "MMM dd, yyyy"),
        fill:
          transaction.type === "EXPENSE"
            ? "rgba(239, 68, 68, 0.8)" // red
            : "rgba(59, 130, 246, 0.8)", // blue
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [transactions]);

  const totals = useMemo(() => {
    return transactions.reduce(
      (acc, curr) => {
        const amount = Number(curr.amount);
        if (curr.type === "EXPENSE") {
          acc.expense += amount;
        } else {
          acc.income += amount;
        }
        return acc;
      },
      { expense: 0, income: 0 },
    );
  }, [transactions]);

  const dateRange = useMemo(() => {
    if (transactions.length === 0) return "No data available";
    const dates = transactions.map((t) => new Date(t.date));
    const firstDate = format(
      new Date(Math.min(...dates.map((d) => d.getTime()))),
      "MMM dd",
    );
    const lastDate = format(
      new Date(Math.max(...dates.map((d) => d.getTime()))),
      "MMM dd, yyyy",
    );
    return `${firstDate} - ${lastDate}`;
  }, [transactions]);

  return (
    <Card className="bg-white dark:bg-gray-800 mt-5 border-none">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="textDark flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>DETAILED TRANSACTIONS</CardTitle>
          <CardDescription>{dateRange}</CardDescription>
        </div>
        <div className="flex">
          <div className="textDark relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
          <span className="font-lexend">Total Expense</span>
            <div className="flex items-center space-x-1 text-lg font-bold leading-none text-red-500 sm:text-3xl">
              <span>₹</span>
              <span>{totals.expense.toLocaleString()}</span>
            </div>
          </div>
          <div className="textDark relative z-30 flex max-w-max flex-1 flex-col justify-center gap-1 border-l border-t px-8 py-4 text-left sm:border-l sm:border-t-0 sm:px-12 sm:py-6">
            <span className="font-lexend">Total Income</span>
            <div className="flex items-center space-x-1 text-lg font-bold leading-none text-blue-500 sm:text-3xl">
              <span>₹</span>
              <span>{totals.income.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[400px] w-full p-4"
        >
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => format(new Date(value), "MMM dd")}
              tick={{ fill: isDarkMode ? "#ffffff" : "#333333" }} // axis text color
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `₹ ${Math.abs(value)}`}
              tick={{ fill: isDarkMode ? "#ffffff" : "#333333" }} // axis text color
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[200px] bg-white"
                  labelFormatter={(value) => {
                    return format(new Date(value), "MMM dd, yyyy");
                  }}
                />
              }
            />
            <Legend />
            <Bar dataKey="amount" name="Transaction" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* Indicator (Legend) for Expense & Income */}
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span
              className={cn(
                "text-sm",
                isDarkMode ? "text-white" : "text-black",
              )}
            >
              Expense
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span
              className={cn(
                "text-sm",
                isDarkMode ? "text-white" : "text-black",
              )}
            >
              Income
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountChart;
