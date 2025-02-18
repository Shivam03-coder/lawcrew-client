import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RemainingTask = () => (
  <Card>
    <CardHeader className="flex items-center justify-between">
      <CardTitle>Remaining To Do</CardTitle>
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 transition hover:bg-amber-600">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </button>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center py-6">
        <p className="text-4xl font-bold text-gray-800">34</p>
      </div>
    </CardContent>
    <CardFooter>
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="flex flex-col items-center rounded-lg border border-gray-200 p-3">
          <p className="text-sm text-gray-600">Due Today</p>
          <p className="text-lg font-bold text-gray-800">7</p>
        </div>
        <div className="flex flex-col items-center rounded-lg border border-gray-200 p-3">
          <p className="text-sm text-gray-600">This Week</p>
          <p className="text-lg font-bold text-gray-800">18</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default RemainingTask;
