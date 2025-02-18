"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

// Dummy data for tasks assigned and tasks completed each month
const chartData = [
  { month: "January", tasksAssigned: 150, tasksCompleted: 120 },
  { month: "February", tasksAssigned: 180, tasksCompleted: 150 },
  { month: "March", tasksAssigned: 200, tasksCompleted: 180 },
  { month: "April", tasksAssigned: 220, tasksCompleted: 200 },
  { month: "May", tasksAssigned: 170, tasksCompleted: 160 },
  { month: "June", tasksAssigned: 250, tasksCompleted: 230 },
  { month: "July", tasksAssigned: 230, tasksCompleted: 220 },
  { month: "August", tasksAssigned: 240, tasksCompleted: 230 },
  { month: "September", tasksAssigned: 210, tasksCompleted: 200 },
  { month: "October", tasksAssigned: 260, tasksCompleted: 240 },
  { month: "November", tasksAssigned: 280, tasksCompleted: 270 },
  { month: "December", tasksAssigned: 300, tasksCompleted: 290 },
];

const chartConfig = {
  tasksAssigned: {
    label: "Tasks Assigned",
    color: "hsl(var(--chart-1))", // You can customize this color
  },
  tasksCompleted: {
    label: "Tasks Completed",
    color: "hsl(var(--chart-2))", // You can customize this color
  },
} satisfies ChartConfig;

const TaskManagementChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Management Overview</CardTitle>
        <CardDescription>
          Tasks Assigned vs Tasks Completed (2024)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-white" />}
            />
            <Line
              dataKey="tasksAssigned"
              type="monotone"
              stroke="#F95454"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="tasksCompleted"
              type="monotone"
              stroke="#0D92F4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TaskManagementChart;
