"use client";
import DataTable from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ClientContactCategory,
  ClientContactDetails,
  PersonContactsDetails,
  PersonContactSubCategory,
} from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Badge } from "lucide-react";

const data: PersonContactsDetails[] = [
  {
    person: "John Doe",
    name: "John",
    jobTitle: "Software Engineer",
    companyReference: "Ref-001",
    subCategory: "IT",
    additionalIdType: "Employee ID",
    additionalIdValue: "E12345",
    category: "Full-Time",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    person: "Jane Smith",
    name: "Jane",
    jobTitle: "Project Manager",
    companyReference: "Ref-002",
    subCategory: "Management",
    additionalIdType: "Employee ID",
    additionalIdValue: "P67890",
    category: "Full-Time",
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901",
  },
  {
    person: "Alice Brown",
    name: "Alice",
    jobTitle: "Data Analyst",
    companyReference: "Ref-003",
    subCategory: "Analytics",
    additionalIdType: "Contractor ID",
    additionalIdValue: "C11223",
    category: "Contractor",
    email: "alice.brown@example.com",
    phoneNumber: "345-678-9012",
  },
  {
    person: "Bob White",
    name: "Bob",
    jobTitle: "UX Designer",
    companyReference: "Ref-004",
    subCategory: "Design",
    additionalIdType: "Employee ID",
    additionalIdValue: "U44556",
    category: "Full-Time",
    email: "bob.white@example.com",
    phoneNumber: "456-789-0123",
  },
  {
    person: "John Doe",
    name: "John",
    jobTitle: "DevOps Engineer",
    companyReference: "Ref-005",
    subCategory: "Operations",
    additionalIdType: "Employee ID",
    additionalIdValue: "D78901",
    category: "Full-Time",
    email: "john.doe@devops.com",
    phoneNumber: "567-890-1234",
  },
];

const categoryColors: Record<PersonContactSubCategory, string> = {
  [PersonContactSubCategory.Analytics]: "bg-green-500 text-white",
  [PersonContactSubCategory.Design]: "bg-yellow-500 text-black",
  [PersonContactSubCategory.IT]: "bg-purple-500 text-white",
  [PersonContactSubCategory.Management]: "bg-pink-500 text-white",
  [PersonContactSubCategory.Operations]: "bg-pink-500 text-white",
};

const columns: ColumnDef<PersonContactsDetails>[] = [
  {
    accessorKey: "person",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Person
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold text-primary">{row.original.person}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "jobTitle",
    header: "Job Title",
  },
  {
    accessorKey: "companyReference",
    header: "Company Ref",
  },
  {
    accessorKey: "subCategory",
    header: "Sub Category",
    cell: ({ row }) => (
      <div
        className={cn(
          "rounded-lg p-1 text-center",
          categoryColors[row.original.subCategory],
        )}
      >
        {row.original.subCategory}
      </div>
    ),
  },
  {
    accessorKey: "additionalIdType",
    header: "ID Type",
  },
  {
    accessorKey: "additionalIdValue",
    header: "ID Value",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a
        className="text-primary hover:text-blue-700 hover:underline"
        href={`mailto:${row.original.email}`}
      >
        {row.original.email}
      </a>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
  },
];

const PerosnContactTable = () => {
  return (
    <div className="p-8">
      <DataTable className="mt-4" columns={columns} data={data} />
    </div>
  );
};

export default PerosnContactTable;
