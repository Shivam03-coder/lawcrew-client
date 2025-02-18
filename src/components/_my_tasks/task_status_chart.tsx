"use client";

import { Bar, BarChart, XAxis } from "recharts";

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

const chartData = [
  {
    date: "2024-07-15",
    running: 450,
    pending: 200,
    completed: 300,
    ongoing: 150,
  },
  {
    date: "2024-07-16",
    running: 380,
    pending: 250,
    completed: 220,
    ongoing: 150,
  },
  {
    date: "2024-07-17",
    running: 520,
    pending: 300,
    completed: 180,
    ongoing: 200,
  },
  {
    date: "2024-07-18",
    running: 140,
    pending: 180,
    completed: 220,
    ongoing: 100,
  },
  {
    date: "2024-07-19",
    running: 600,
    pending: 350,
    completed: 400,
    ongoing: 200,
  },
  {
    date: "2024-07-20",
    running: 480,
    pending: 270,
    completed: 350,
    ongoing: 220,
  },
];

const chartConfig = {
    running: {
      label: "Running",
      color: "#4CAF50", // Green color
    },
    pending: {
      label: "Pending",
      color: "#FF9800", // Orange color
    },
    completed: {
      label: "Completed",
      color: "#2196F3", // Blue color
    },
    ongoing: {
      label: "Ongoing",
      color: "#FF5722", // Red-Orange color
    },
  } satisfies ChartConfig;
  

function TaskStatusChart() {
  return (
    <Card>
      <CardHeader className="bg-blue-100 rounded-t-lg">
        <CardTitle>Task Statuses</CardTitle>
        <CardDescription>
          A stacked bar chart showing task statuses: running, pending,
          completed, and ongoing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--color-running)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="pending"
              stackId="a"
              fill="var(--color-pending)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="completed"
              stackId="a"
              fill="var(--color-completed)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="ongoing"
              stackId="a"
              fill="var(--color-ongoing)"
              radius={[0, 0, 4, 4]}
            />
            <ChartTooltip
              content={<ChartTooltipContent className="bg-white" />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TaskStatusChart;
