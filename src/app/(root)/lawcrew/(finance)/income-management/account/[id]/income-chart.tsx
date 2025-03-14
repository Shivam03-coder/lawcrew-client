"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
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
import { monthsOrder, RandomColor } from "@/constants";

const chartConfig = {
  desktop: {
    label: "Total Income",
    color: RandomColor(),
  },
} satisfies ChartConfig;

interface IncomeChartProps {
  transactions: Transaction[];
}

const IncomeChart: FC<IncomeChartProps> = ({ transactions }) => {
  const TotalIncomeData = useMemo(() => {
    const incomeByMonth = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "INCOME") {
          const monthName = dayjs(transaction.date).format("MMMM").slice(0, 3);
          acc[monthName] = (acc[monthName] || 0) + Number(transaction.amount);
        }
        return acc;
      },
      {} as Record<string, number>,
    );

    const sortedData = monthsOrder
      .map((month) => ({
        month,
        total: incomeByMonth[month] || 0,
      }))
      .filter((data) => data.total > 0);
    return sortedData;
  }, [transactions]);

  const firstMonth = TotalIncomeData[0]?.month;
  const lastMonth = TotalIncomeData[TotalIncomeData.length - 1]?.month;

  return (
    <Card className="flex flex-col border-none bg-white dark:bg-gray-800">
      <CardHeader className="items-center pb-4">
        <CardDescription className="textDark font-lexend text-xl uppercase">
          Income from{" "}
          {firstMonth && lastMonth
            ? `${firstMonth} - ${lastMonth} 2024`
            : "No data available"}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={TotalIncomeData}>
              <PolarGrid gridType="circle" />
              <PolarAngleAxis dataKey="month" />

              <Radar
                name={chartConfig.desktop.label}
                dataKey="total"
                fill={chartConfig.desktop.color}
                fillOpacity={0.6}
                stroke={chartConfig.desktop.color}
                dot={{
                  r: 4,
                  fillOpacity: 1,
                }}
              />

              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    className="gap-x-3 bg-white font-lexend"
                    hideLabel
                  />
                }
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground textDark font-lexend leading-none">
          Total Income from {TotalIncomeData[0]?.month} -{" "}
          {TotalIncomeData[TotalIncomeData.length - 1]?.month}
        </div>
      </CardFooter>
    </Card>
  );
};

export default IncomeChart;
