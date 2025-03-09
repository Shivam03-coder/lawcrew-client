import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TaxCompilanceChart = () => {
  const complianceHistory = [
    { month: "Jan", score: 92 },
    { month: "Feb", score: 95 },
    { month: "Mar", score: 98 },
    { month: "Apr", score: 96 },
    { month: "May", score: 97 },
    { month: "Jun", score: 95 },
  ];
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Compliance History</CardTitle>
        <CardDescription>Monthly compliance score tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={complianceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip
                contentStyle={{
                  borderRadius: 5,
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCompilanceChart;
