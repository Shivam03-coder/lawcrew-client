import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FC } from "react";
import { Transaction } from "@/store/types/api";

interface RemainingBalanceProps {
  balance: string;
  transactions: Transaction[];
}

const RemainingBalance: FC<RemainingBalanceProps> = ({
  balance,
  transactions,
}) => {
  const totalAmountSpent = transactions.reduce((acc, cur) => {
    if (cur.type === "EXPENSE") {
      acc += Number(cur.amount);
    }
    return acc;
  }, 0);

  const remainingAmount = (parseFloat(balance) - totalAmountSpent).toFixed(2);

  return (
    <Card className="bg-white dark:bg-gray-800 border-none">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="textDark uppercase font-lexend text-xl font-normal">Remaining Balance</CardTitle>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 transition hover:bg-green-600">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            ₹ {balance}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg border bg-yellow-300 dark:bg-yellow-600 border-gray-200 p-3 dark:border-gray-700">
          <p className="textDark font-lexend text-sm dark:text-gray-300">
              Total spent amount
            </p>
            <p className="text-lg font-bold textDark dark:text-gray-100">
              ₹{totalAmountSpent}
            </p>
          </div>
          <div
            className={`flex flex-col ${Number(remainingAmount) < 0 ? "bg-red-300 dark:bg-red-500" : "bg-white"} items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700`}
          >
            <p className="textDark font-lexend text-sm dark:text-gray-300">
              Total remaining amount
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              ₹{(parseFloat(balance) - totalAmountSpent).toFixed(2)}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RemainingBalance;
