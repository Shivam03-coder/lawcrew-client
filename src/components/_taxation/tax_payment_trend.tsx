import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TaxPaymnetTrend = () => {
  const monthlyTaxData = [
    { month: "Jan", gst: 12500, incomeTax: 25000, professionalTax: 2000 },
    { month: "Feb", gst: 13200, incomeTax: 26000, professionalTax: 2000 },
    { month: "Mar", gst: 14800, incomeTax: 27500, professionalTax: 2000 },
    { month: "Apr", gst: 11900, incomeTax: 24000, professionalTax: 2000 },
    { month: "May", gst: 15300, incomeTax: 28000, professionalTax: 2000 },
    { month: "Jun", gst: 16700, incomeTax: 29500, professionalTax: 2000 },
  ];

  const taxDistributionData = [
    { name: "GST", value: 84400, color: "#0ea5e9" },
    { name: "Income Tax", value: 160000, color: "#8b5cf6" },
    { name: "Professional Tax", value: 12000, color: "#f43f5e" },
  ];
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Tax Payment Trends</CardTitle>
          <CardDescription>
            Monthly breakdown of different tax payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTaxData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    borderRadius: 5,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="gst"
                  stackId="1"
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="incomeTax"
                  stackId="1"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="professionalTax"
                  stackId="1"
                  stroke="#f43f5e"
                  fill="#f43f5e"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tax Distribution</CardTitle>
          <CardDescription>Breakdown by tax type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={taxDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taxDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 5,
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            {taxDistributionData.map((entry, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="mr-1 h-3 w-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxPaymnetTrend;
