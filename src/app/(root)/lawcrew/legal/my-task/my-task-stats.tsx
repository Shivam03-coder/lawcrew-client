"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useMount from "@/hooks/use-mount";

const data = [{ name: "Open", value: 1, color: "#60a5fa" }];

const MyTaskStats = ({ title }: { title: string }) => {
  const [taskType, setTaskType] = useState("All");
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("All");

  const ismount = useMount();
  if (!ismount) null;

  return (
    <Card className="w-full">
      <CardHeader className="rounded-t-lg bg-blue-100">
        <h2 className="text-center text-lg font-semibold">{title}</h2>
        <div className="mt-2 flex justify-between space-x-2">
          {/* Task Type Filter */}
          <Select value={taskType} onValueChange={setTaskType}>
            <SelectTrigger className="w-1/3 bg-white">
              <SelectValue placeholder="Task Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Accounting">Accounting</SelectItem>
              <SelectItem value="Development">Development</SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
            </SelectContent>
          </Select>

          {/* Year Filter */}
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-1/3 bg-white">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>

          {/* Month Filter */}
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-1/3 bg-white">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="January">January</SelectItem>
              <SelectItem value="February">February</SelectItem>
              <SelectItem value="March">March</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      {/* Pie Chart */}
      <CardContent className="mt-4 flex flex-col items-center border-none">
        {ismount && (
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: 12,
              }}
            />
          </PieChart>
        )}

        <p className="text-xl font-semibold">Total 1</p>
        <p className="text-sm text-gray-600">{data[0]?.name!}</p>
      </CardContent>
    </Card>
  );
};

export default MyTaskStats;
