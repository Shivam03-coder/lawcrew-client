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
  const initialBalance = parseFloat(balance);

  const totalAmountSpent = transactions.reduce((acc, cur) => {
    if (cur.type === "TRANSFER" || cur.type === "EXPENSE") {
      acc += Number(cur.amount);
    }
    return acc;
  }, 0);

  const remainingAmount = initialBalance - totalAmountSpent;

  return (
    <Card className="border-none bg-white dark:bg-gray-800">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="textDark font-lexend text-xl font-normal uppercase">
          Remaining Balance
        </CardTitle>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 transition hover:bg-green-600">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            ₹ {remainingAmount.toFixed(2)}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-yellow-300 p-3 dark:border-gray-700 dark:bg-yellow-600">
            <p className="textDark font-lexend text-sm dark:text-gray-300">
              Total spent amount
            </p>
            <p className="textDark text-lg font-bold dark:text-gray-100">
              ₹ {totalAmountSpent.toFixed(2)}
            </p>
          </div>
          <div
            className={`flex flex-col items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700 ${
              remainingAmount < 0
                ? "bg-red-300 dark:bg-red-500"
                : "bg-green-300 dark:bg-green-600"
            }`}
          >
            <p className="textDark font-lexend text-sm dark:text-gray-300">
              Total remaining amount
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              ₹ {remainingAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RemainingBalance;
