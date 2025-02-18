"use client";
import { FileItem, FileStatus, fileType } from "@/types/global";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../shared/table";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

const data: FileItem[] = [
  {
    id: "1",
    name: "Contract Templates",
    type: "folder",
    status: "Pending",
    keywords: "-",
    fileSize: "-",
    addedOn: "2025-02-18 04:10",
    addedBy: "Shivam Anand",
    modifiedBy: "Shivam Anand",
    modifiedOn: "2025-02-18 04:10",
  },
  {
    id: "2",
    name: "Templates",
    type: "folder",
    status: "Pending",
    keywords: "-",
    fileSize: "-",
    addedOn: "2025-02-18 04:12",
    addedBy: "Shivam Anand",
    modifiedBy: "Shivam Anand",
    modifiedOn: "2025-02-18 04:12",
  },
  {
    id: "3",
    name: "Invoice 2025.pdf",
    type: "file",
    status: "Approved",
    keywords: "invoice, billing",
    fileSize: "1.2 MB",
    addedOn: "2025-02-17 10:05",
    addedBy: "John Doe",
    modifiedBy: "John Doe",
    modifiedOn: "2025-02-17 10:05",
  },
  {
    id: "4",
    name: "Client List.xlsx",
    type: "file",
    status: "Pending",
    keywords: "clients, contacts",
    fileSize: "850 KB",
    addedOn: "2025-02-16 15:30",
    addedBy: "Alice Smith",
    modifiedBy: "Alice Smith",
    modifiedOn: "2025-02-16 15:30",
  },
  {
    id: "5",
    name: "Project Plan.docx",
    type: "file",
    status: "Reviewed",
    keywords: "project, plan",
    fileSize: "500 KB",
    addedOn: "2025-02-15 09:45",
    addedBy: "Robert Brown",
    modifiedBy: "Robert Brown",
    modifiedOn: "2025-02-15 09:45",
  },
  {
    id: "6",
    name: "Financial Report Q1.pdf",
    type: "file",
    status: "Approved",
    keywords: "finance, report",
    fileSize: "2.5 MB",
    addedOn: "2025-02-14 13:20",
    addedBy: "Emily Davis",
    modifiedBy: "Emily Davis",
    modifiedOn: "2025-02-14 13:20",
  },
  {
    id: "7",
    name: "HR Policies.pdf",
    type: "file",
    status: "Finalized",
    keywords: "HR, policies",
    fileSize: "1 MB",
    addedOn: "2025-02-13 16:55",
    addedBy: "Michael Johnson",
    modifiedBy: "Michael Johnson",
    modifiedOn: "2025-02-13 16:55",
  },
  {
    id: "8",
    name: "Annual Report.pdf",
    type: "file",
    status: "Draft",
    keywords: "annual, report",
    fileSize: "3 MB",
    addedOn: "2025-02-12 11:10",
    addedBy: "Sophia Wilson",
    modifiedBy: "Sophia Wilson",
    modifiedOn: "2025-02-12 11:10",
  },
  {
    id: "9",
    name: "Marketing Strategy.docx",
    type: "file",
    status: "Under Review",
    keywords: "marketing, strategy",
    fileSize: "1.8 MB",
    addedOn: "2025-02-11 14:35",
    addedBy: "David Martinez",
    modifiedBy: "David Martinez",
    modifiedOn: "2025-02-11 14:35",
  },
  {
    id: "10",
    name: "Employee Handbook.pdf",
    type: "file",
    status: "Finalized",
    keywords: "HR, employee",
    fileSize: "2.3 MB",
    addedOn: "2025-02-10 08:50",
    addedBy: "Olivia Taylor",
    modifiedBy: "Olivia Taylor",
    modifiedOn: "2025-02-10 08:50",
  },
  {
    id: "11",
    name: "Company Logo.png",
    type: "file",
    status: "Approved",
    keywords: "branding, logo",
    fileSize: "500 KB",
    addedOn: "2025-02-09 12:40",
    addedBy: "Ethan Thomas",
    modifiedBy: "Ethan Thomas",
    modifiedOn: "2025-02-09 12:40",
  },
  {
    id: "12",
    name: "Sales Report.xlsx",
    type: "file",
    status: "Pending",
    keywords: "sales, report",
    fileSize: "750 KB",
    addedOn: "2025-02-08 17:25",
    addedBy: "Isabella Garcia",
    modifiedBy: "Isabella Garcia",
    modifiedOn: "2025-02-08 17:25",
  },
  {
    id: "13",
    name: "Tech Roadmap.docx",
    type: "file",
    status: "Under Review",
    keywords: "technology, roadmap",
    fileSize: "1.1 MB",
    addedOn: "2025-02-07 09:30",
    addedBy: "Mason Hernandez",
    modifiedBy: "Mason Hernandez",
    modifiedOn: "2025-02-07 09:30",
  },
  {
    id: "14",
    name: "Onboarding Guide.pdf",
    type: "file",
    status: "Finalized",
    keywords: "HR, onboarding",
    fileSize: "2 MB",
    addedOn: "2025-02-06 15:15",
    addedBy: "Liam King",
    modifiedBy: "Liam King",
    modifiedOn: "2025-02-06 15:15",
  },
  {
    id: "15",
    name: "UI Design Mockups.zip",
    type: "file",
    status: "Draft",
    keywords: "design, UI",
    fileSize: "4.5 MB",
    addedOn: "2025-02-05 18:00",
    addedBy: "Charlotte Lee",
    modifiedBy: "Charlotte Lee",
    modifiedOn: "2025-02-05 18:00",
  },
  {
    id: "16",
    name: "SEO Checklist.xlsx",
    type: "file",
    status: "Reviewed",
    keywords: "SEO, marketing",
    fileSize: "620 KB",
    addedOn: "2025-02-04 13:55",
    addedBy: "Harper Walker",
    modifiedBy: "Harper Walker",
    modifiedOn: "2025-02-04 13:55",
  },
  {
    id: "17",
    name: "Security Guidelines.pdf",
    type: "file",
    status: "Approved",
    keywords: "security, guidelines",
    fileSize: "1.7 MB",
    addedOn: "2025-02-03 10:20",
    addedBy: "Aiden Hall",
    modifiedBy: "Aiden Hall",
    modifiedOn: "2025-02-03 10:20",
  },
  {
    id: "18",
    name: "Budget Forecast.xlsx",
    type: "file",
    status: "Pending",
    keywords: "finance, budget",
    fileSize: "900 KB",
    addedOn: "2025-02-02 14:05",
    addedBy: "Ella Adams",
    modifiedBy: "Ella Adams",
    modifiedOn: "2025-02-02 14:05",
  },
  {
    id: "19",
    name: "Product Requirements.docx",
    type: "file",
    status: "Under Review",
    keywords: "product, requirements",
    fileSize: "2.2 MB",
    addedOn: "2025-02-01 08:45",
    addedBy: "James Scott",
    modifiedBy: "James Scott",
    modifiedOn: "2025-02-01 08:45",
  },
  {
    id: "20",
    name: "API Documentation.pdf",
    type: "file",
    status: "Finalized",
    keywords: "API, documentation",
    fileSize: "3 MB",
    addedOn: "2025-01-31 11:30",
    addedBy: "Grace Harris",
    modifiedBy: "Grace Harris",
    modifiedOn: "2025-01-31 11:30",
  },
];

export const FileTypesColor: Record<fileType, string> = {
  [fileType.file]: "bg-blue-500 text-white",
  [fileType.folder]: "bg-yellow-500 text-black",
};

export const StatusColor: Record<FileStatus, string> = {
  [FileStatus.Approved]: "bg-green-600 text-white",
  [FileStatus.Draft]: "bg-orange-500 text-white",
  [FileStatus.Finalized]: "bg-purple-600 text-white",
  [FileStatus.UnderReview]: "bg-red-600 text-white",
  [FileStatus.Reviewed]: "bg-pink-600 text-white",
  [FileStatus.Pending]: "bg-blue-600 text-white",
};

export const columns: ColumnDef<FileItem>[] = [
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
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        File Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div
        className={cn(
          "rounded-md p-1 text-center capitalize",
          FileTypesColor[row.original.type!],
        )}
      >
        {row.original.type}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "rounded-md p-1 text-center",
          StatusColor[row.original.status!],
        )}
      >
        {row.original.status || "N/A"}
      </div>
    ),
  },
  {
    accessorKey: "keywords",
    header: "Keywords",
    cell: ({ row }) => <div>{row.original.keywords || "N/A"}</div>,
  },
  {
    accessorKey: "fileSize",
    header: "File Size",
    cell: ({ row }) => (
      <div className="rounded-md bg-secondary p-1 pl-3">
        {row.original.fileSize || "N/A"}
      </div>
    ),
  },
  {
    accessorKey: "addedOn",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Added On
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="rounded-md bg-gray-200 p-1 pl-3">
        {new Date(row.original.addedOn).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "addedBy",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Added By
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "modifiedBy",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Modified By
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "modifiedOn",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Modified On
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="rounded-md bg-green-200 p-1 pl-3">
        {new Date(row.original.modifiedOn).toLocaleDateString()}
      </div>
    ),
  },
];


const IdocsTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default IdocsTable;
