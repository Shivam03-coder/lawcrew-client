"use client";
import { TaxPayment, TaxPaymentStatusTypes } from "@/types/global";

export const data: TaxPayment[] = [
  {
    id: 1,
    payer: "John Doe",
    reference: "TAX202401",
    taxType: "Income Tax",
    amount: "$1,200",
    dueDate: "2025-03-10",
    status: "Pending",
  },
  {
    id: 2,
    payer: "Alice Smith",
    reference: "TAX202402",
    taxType: "Corporate Tax",
    amount: "$5,400",
    dueDate: "2025-02-28",
    status: "Completed",
  },
  {
    id: 3,
    payer: "Michael Brown",
    reference: "TAX202403",
    taxType: "Property Tax",
    amount: "$800",
    dueDate: "2025-04-05",
    status: "Overdue",
  },
  {
    id: 4,
    payer: "Emma Johnson",
    reference: "TAX202404",
    taxType: "Sales Tax",
    amount: "$2,300",
    dueDate: "2025-03-15",
    status: "Pending",
  },
  {
    id: 5,
    payer: "David Wilson",
    reference: "TAX202405",
    taxType: "Service Tax",
    amount: "$1,750",
    dueDate: "2025-02-22",
    status: "Completed",
  },
  {
    id: 6,
    payer: "Sophia Martinez",
    reference: "TAX202406",
    taxType: "VAT",
    amount: "$900",
    dueDate: "2025-03-20",
    status: "Pending",
  },
  {
    id: 7,
    payer: "James Taylor",
    reference: "TAX202407",
    taxType: "Luxury Tax",
    amount: "$3,600",
    dueDate: "2025-04-01",
    status: "Overdue",
  },
  {
    id: 8,
    payer: "Isabella Anderson",
    reference: "TAX202408",
    taxType: "Excise Tax",
    amount: "$1,100",
    dueDate: "2025-03-25",
    status: "Pending",
  },
  {
    id: 9,
    payer: "William Lee",
    reference: "TAX202409",
    taxType: "Income Tax",
    amount: "$4,200",
    dueDate: "2025-03-12",
    status: "Completed",
  },
  {
    id: 10,
    payer: "Mia Gonzalez",
    reference: "TAX202410",
    taxType: "Corporate Tax",
    amount: "$2,800",
    dueDate: "2025-04-07",
    status: "Pending",
  },
  {
    id: 11,
    payer: "Ethan Perez",
    reference: "TAX202411",
    taxType: "Property Tax",
    amount: "$1,000",
    dueDate: "2025-03-05",
    status: "Completed",
  },
  {
    id: 12,
    payer: "Charlotte Adams",
    reference: "TAX202412",
    taxType: "Sales Tax",
    amount: "$2,500",
    dueDate: "2025-02-27",
    status: "Pending",
  },
  {
    id: 13,
    payer: "Benjamin Nelson",
    reference: "TAX202413",
    taxType: "Service Tax",
    amount: "$1,300",
    dueDate: "2025-03-18",
    status: "Overdue",
  },
  {
    id: 14,
    payer: "Harper Carter",
    reference: "TAX202414",
    taxType: "VAT",
    amount: "$950",
    dueDate: "2025-04-15",
    status: "Pending",
  },
  {
    id: 15,
    payer: "Alexander Scott",
    reference: "TAX202415",
    taxType: "Luxury Tax",
    amount: "$3,200",
    dueDate: "2025-02-20",
    status: "Completed",
  },
  {
    id: 16,
    payer: "Amelia Turner",
    reference: "TAX202416",
    taxType: "Excise Tax",
    amount: "$1,400",
    dueDate: "2025-03-22",
    status: "Pending",
  },
  {
    id: 17,
    payer: "Daniel Hall",
    reference: "TAX202417",
    taxType: "Income Tax",
    amount: "$4,500",
    dueDate: "2025-03-28",
    status: "Completed",
  },
  {
    id: 18,
    payer: "Olivia Baker",
    reference: "TAX202418",
    taxType: "Corporate Tax",
    amount: "$2,600",
    dueDate: "2025-04-10",
    status: "Overdue",
  },
  {
    id: 19,
    payer: "Matthew Young",
    reference: "TAX202419",
    taxType: "Property Tax",
    amount: "$1,200",
    dueDate: "2025-03-14",
    status: "Pending",
  },
  {
    id: 20,
    payer: "Ava Hernandez",
    reference: "TAX202420",
    taxType: "Sales Tax",
    amount: "$2,900",
    dueDate: "2025-03-30",
    status: "Completed",
  },
];

import DataTable from "@/components/shared/table";
import { ColumnDef } from "@tanstack/react-table";

const statusColors: Record<TaxPaymentStatusTypes, string> = {
  [TaxPaymentStatusTypes.Completed]: "bg-green-600 text-white",
  [TaxPaymentStatusTypes.Overdue]: "bg-yellow-500 text-black",
  [TaxPaymentStatusTypes.Pending]: "bg-red-600 text-white",
};

const columns: ColumnDef<TaxPayment>[] = [
  {
    accessorKey: "payer",
    header: "Payer Name",
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">{row.original.payer}</div>
    ),
  },
  {
    accessorKey: "reference",
    header: "Reference",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.reference}</div>
    ),
  },
  {
    accessorKey: "taxType",
    header: "Tax Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="font-semibold">{row.original.amount}</div>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <div className="text-gray-600">{row.original.dueDate}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Payment Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className={`rounded-md p-1 w-[120px] text-center ${statusColors[status]}`}>
          {status}
        </div>
      );
    },
  },
];


const TaxPaymentTable = () => {
  return (
      <DataTable className="mt-4" columns={columns} data={data} />
  );
};

export default TaxPaymentTable;
