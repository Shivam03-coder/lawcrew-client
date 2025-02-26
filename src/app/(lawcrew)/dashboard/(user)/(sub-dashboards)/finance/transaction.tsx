"use client";

import { useState } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DataTable from "@/components/shared/table";

// Define Transaction Interface
interface Transaction {
  id: number;
  amount: string;
  status: "Pending" | "Completed";
  bankName: string;
  accountNumber: string;
}

// Sample Data
const initialData: Transaction[] = [
  { id: 1, amount: "500", status: "Pending", bankName: "XYZ Bank", accountNumber: "1234567890" },
  { id: 2, amount: "800", status: "Completed", bankName: "ABC Bank", accountNumber: "9876543210" },
  { id: 3, amount: "300", status: "Pending", bankName: "PQR Bank", accountNumber: "5678901234" },
];

export default function TransactionTable() {
  const [data, setData] = useState<Transaction[]>(initialData);

  // Handle Update in State
  const handleUpdate = (id: number, key: keyof Transaction, value: string) => {
    setData((prevData) =>
      prevData.map((transaction) =>
        transaction.id === id ? { ...transaction, [key]: value } : transaction
      )
    );
  };

  // Define Table Columns
  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => (
        <Input
          type="number"
          value={row.original.amount}
          onChange={(e) => handleUpdate(row.original.id, "amount", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Select
          value={row.original.status}
          onValueChange={(value) => handleUpdate(row.original.id, "status", value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      accessorKey: "bankName",
      header: "Bank Name",
      cell: ({ row }) => (
        <Input
          type="text"
          value={row.original.bankName}
          onChange={(e) => handleUpdate(row.original.id, "bankName", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "accountNumber",
      header: "Account Number",
      cell: ({ row }) => (
        <Input
          type="text"
          value={row.original.accountNumber}
          onChange={(e) => handleUpdate(row.original.id, "accountNumber", e.target.value)}
        />
      ),
    },
  ];

  return (
        <DataTable columns={columns} data={data} />
  );
}
