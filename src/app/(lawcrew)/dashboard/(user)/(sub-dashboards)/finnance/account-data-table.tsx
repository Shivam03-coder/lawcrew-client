import DataTable from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { AccountData, TaxPaymentStatusTypes } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

const data: AccountData[] = [
  {
    id: 1,
    amount: "5000",
    status: "Pending",
    bankName: "HDFC Bank",
    accountNumber: "1234567890",
  },
  {
    id: 2,
    amount: "10000",
    status: "Completed",
    bankName: "ICICI Bank",
    accountNumber: "2345678901",
  },
  {
    id: 3,
    amount: "7500",
    status: "Overdue",
    bankName: "SBI",
    accountNumber: "3456789012",
  },
  {
    id: 4,
    amount: "20000",
    status: "Pending",
    bankName: "Axis Bank",
    accountNumber: "4567890123",
  },
  {
    id: 5,
    amount: "15000",
    status: "Completed",
    bankName: "Kotak Mahindra",
    accountNumber: "5678901234",
  },
  {
    id: 6,
    amount: "8000",
    status: "Overdue",
    bankName: "Yes Bank",
    accountNumber: "6789012345",
  },
  {
    id: 7,
    amount: "12000",
    status: "Pending",
    bankName: "Bank of Baroda",
    accountNumber: "7890123456",
  },
  {
    id: 8,
    amount: "9500",
    status: "Completed",
    bankName: "Punjab National Bank",
    accountNumber: "8901234567",
  },
  {
    id: 9,
    amount: "11000",
    status: "Overdue",
    bankName: "Union Bank",
    accountNumber: "9012345678",
  },
  {
    id: 10,
    amount: "17500",
    status: "Pending",
    bankName: "Canara Bank",
    accountNumber: "0123456789",
  },
  {
    id: 11,
    amount: "13000",
    status: "Completed",
    bankName: "HSBC",
    accountNumber: "1123456789",
  },
  {
    id: 12,
    amount: "6000",
    status: "Overdue",
    bankName: "DBS Bank",
    accountNumber: "2123456789",
  },
  {
    id: 13,
    amount: "9000",
    status: "Pending",
    bankName: "Citi Bank",
    accountNumber: "3123456789",
  },
  {
    id: 14,
    amount: "7000",
    status: "Completed",
    bankName: "Standard Chartered",
    accountNumber: "4123456789",
  },
  {
    id: 15,
    amount: "14000",
    status: "Overdue",
    bankName: "IndusInd Bank",
    accountNumber: "5123456789",
  },
  {
    id: 16,
    amount: "30000",
    status: "Pending",
    bankName: "Federal Bank",
    accountNumber: "6123456789",
  },
  {
    id: 17,
    amount: "12500",
    status: "Completed",
    bankName: "South Indian Bank",
    accountNumber: "7123456789",
  },
  {
    id: 18,
    amount: "15500",
    status: "Overdue",
    bankName: "RBL Bank",
    accountNumber: "8123456789",
  },
  {
    id: 19,
    amount: "50000",
    status: "Pending",
    bankName: "IDFC First Bank",
    accountNumber: "9123456789",
  },
  {
    id: 20,
    amount: "2000",
    status: "Completed",
    bankName: "UCO Bank",
    accountNumber: "1012345678",
  },
];

const statusColors: Record<TaxPaymentStatusTypes, string> = {
  [TaxPaymentStatusTypes.Completed]: "bg-green-600 text-white",
  [TaxPaymentStatusTypes.Overdue]: "bg-yellow-500 text-black",
  [TaxPaymentStatusTypes.Pending]: "bg-red-600 text-white",
};

const columns: ColumnDef<AccountData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "bankName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="rounded-md">{row.original.bankName}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">₹ {row.original.amount}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "max-w-max rounded-full px-2",
          statusColors[row.original.status],
        )}
      >
        {row.original.status}
      </div>
    ),
  },
  {
    accessorKey: "accountNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Account Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-mono px-5  text-gray-900">
        {row.original.accountNumber}
      </div>
    ),
  },
];

const AccountDataTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default AccountDataTable;
