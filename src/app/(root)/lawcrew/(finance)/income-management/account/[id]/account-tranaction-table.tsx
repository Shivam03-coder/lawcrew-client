import DataTable from "@/components/shared/table";
import { Transaction } from "@/store/types/api";
import React, { FC } from "react";
import { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI
import { Checkbox } from "@/components/ui/checkbox";
import { useDeleteAccountTransactionsMutation } from "@/store/api-endpoints/finance-api";
import { useAppToasts } from "@/hooks/use-app-toast";

interface AccountTranactionTableProps {
  transactions: Transaction[];
  accountId: string;
}
export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 40,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Description
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const desc = row.getValue("description") as string;
      const words = desc.split(" ").slice(0, 4).join(" ");
      const formatted = desc.split(" ").length > 4 ? `${words}...` : words;
      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return <div className="text-left font-medium">${amount.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const type = row.getValue("type") as "INCOME" | "EXPENSE";
      return (
        <span
          className={`rounded-full px-2 py-1 font-semibold capitalize text-white ${
            type === "INCOME" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {type}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as
        | "PENDING"
        | "APPROVED"
        | "REJECTED";
      const statusColor =
        status === "APPROVED"
          ? "bg-green-500"
          : status === "REJECTED"
            ? "bg-red-500"
            : "bg-yellow-500";

      return (
        <span
          className={`rounded-full px-2 py-1 font-medium capitalize text-white ${statusColor}`}
        >
          {status}
        </span>
      );
    },
  },
];
const AccountTranactionTable: FC<AccountTranactionTableProps> = ({
  transactions,
  accountId,
}) => {
  const [deleteTransactions, { isLoading: isDeleteing }] =
    useDeleteAccountTransactionsMutation();
  const { ErrorToast, SuccessToast } = useAppToasts();
  const handleDelete = async (selectedRows: Row<Transaction>[]) => {
    const selectedIds = selectedRows.map((row) => row.original.id);
    console.log("🚀 ~ handleDelete ~ selectedIds:", selectedIds)
    try {
      if (Array.isArray(selectedIds)) {
        const resp = await deleteTransactions({
          accountId,
          transactionIds: selectedIds,
        }).unwrap();
        console.log(resp);
        if (resp.status === "success") {
          SuccessToast({
            title: resp.message,
          });
        }
      }
    } catch (error) {
      ErrorToast({
        title: "Failed to delete transactions",
      });
    }
  };
  return (
    <div className="my-5">
      <DataTable
        onDelete={handleDelete}
        columns={columns}
        data={transactions}
      />
    </div>
  );
};

export default AccountTranactionTable;
