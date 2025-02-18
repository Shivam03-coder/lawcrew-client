"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Mon", tasks: 5 },
  { day: "Tue", tasks: 8 },
  { day: "Wed", tasks: 7 },
  { day: "Thu", tasks: 6 },
  { day: "Fri", tasks: 9 },
  { day: "Sat", tasks: 4 },
  { day: "Sun", tasks: 3 },
];

const chartConfig = {
  tasks: {
    label: "Tasks Completed",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const WeeklyTaskStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Task Completion</CardTitle>
        <CardDescription>Tasks completed each day of the week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis hide />
            <ChartTooltip
              content={<ChartTooltipContent className="bg-white" hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="tasks" fill="#0D92F4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyTaskStats;
