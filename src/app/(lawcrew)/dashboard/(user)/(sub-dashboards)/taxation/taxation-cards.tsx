import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, DollarSign, PieChart, TrendingUp, Upload } from "lucide-react";

const TaxationCards = () => {
  const taxSummary = {
    totalDue: 39500,
    paidThisQuarter: 35200,
    nextDueDate: "Mar 31",
    complianceScore: 95,
    totalSaved: 15000,
    pendingReturns: 1,
    yearlyGrowth: 12.5,
    monthlyGrowth: 3.2,
  };
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-green-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tax Due</CardTitle>
          <DollarSign className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{taxSummary.totalDue.toLocaleString()}
          </div>
          <div className="mt-1 flex items-center">
            <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
            <p className="text-xs text-green-600">
              +{taxSummary.monthlyGrowth}% from last month
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-purple-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Paid This Quarter
          </CardTitle>
          <PieChart className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{taxSummary.paidThisQuarter.toLocaleString()}
          </div>
          <div className="mt-1 flex items-center">
            <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
            <p className="text-xs text-green-600">
              +{taxSummary.yearlyGrowth}% year over year
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-yellow-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Compliance Score
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {taxSummary.complianceScore}%
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${taxSummary.complianceScore}%` }}
            />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-sky-100 dark:bg-sky-900">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tax Savings</CardTitle>
          <Upload className="h-4 w-4 text-violet-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{taxSummary.totalSaved.toLocaleString()}
          </div>
          <p className="text-muted-foreground mt-1 text-xs">
            Through deductions & exemptions
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxationCards;
