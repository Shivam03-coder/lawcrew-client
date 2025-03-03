"use client";
import DataTable from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClientContactCategory, ClientContactDetails } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Badge } from "lucide-react";

const data: ClientContactDetails[] = [
  {
    id: "1",
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
    city: "New York",
    mobile: "987-654-3210",
    country: "USA",
    relatedTo: "TechCorp",
  },
  {
    id: "2",
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
    city: "Toronto",
    mobile: "876-543-2109",
    country: "Canada",
    relatedTo: "Green Energy",
  },
  {
    id: "3",
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
    city: "London",
    mobile: "765-432-1987",
    country: "UK",
    relatedTo: "DataCorp",
  },
  {
    id: "4",
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
    city: "San Francisco",
    mobile: "654-321-9870",
    country: "USA",
    relatedTo: "DesignStudio",
  },
  {
    id: "5",
    person: "Charlie Green",
    name: "Charlie",
    jobTitle: "HR Manager",
    companyReference: "Ref-005",
    subCategory: "HR",
    additionalIdType: "Employee ID",
    additionalIdValue: "H55678",
    category: "Full-Time",
    email: "charlie.green@example.com",
    phoneNumber: "567-890-1234",
    city: "Berlin",
    mobile: "543-210-8765",
    country: "Germany",
    relatedTo: "PeopleOps",
  },
  {
    id: "6",
    person: "Emily Taylor",
    name: "Emily",
    jobTitle: "Marketing Specialist",
    companyReference: "Ref-006",
    subCategory: "Marketing",
    additionalIdType: "Employee ID",
    additionalIdValue: "M66789",
    category: "Part-Time",
    email: "emily.taylor@example.com",
    phoneNumber: "678-901-2345",
    city: "Sydney",
    mobile: "432-109-7654",
    country: "Australia",
    relatedTo: "AdWorks",
  },
  {
    id: "7",
    person: "George Black",
    name: "George",
    jobTitle: "DevOps Engineer",
    companyReference: "Ref-007",
    subCategory: "Operations",
    additionalIdType: "Employee ID",
    additionalIdValue: "D77890",
    category: "Full-Time",
    email: "george.black@example.com",
    phoneNumber: "789-012-3456",
    city: "Mumbai",
    mobile: "321-098-6543",
    country: "India",
    relatedTo: "InfraTech",
  },
  {
    id: "8",
    person: "Hannah Lee",
    name: "Hannah",
    jobTitle: "Content Writer",
    companyReference: "Ref-008",
    subCategory: "Content",
    additionalIdType: "Freelancer ID",
    additionalIdValue: "F88901",
    category: "Freelancer",
    email: "hannah.lee@example.com",
    phoneNumber: "890-123-4567",
    city: "Singapore",
    mobile: "210-987-5432",
    country: "Singapore",
    relatedTo: "ContentWorks",
  },
  {
    id: "9",
    person: "Ivan Gray",
    name: "Ivan",
    jobTitle: "Sales Manager",
    companyReference: "Ref-009",
    subCategory: "Sales",
    additionalIdType: "Employee ID",
    additionalIdValue: "S99012",
    category: "Full-Time",
    email: "ivan.gray@example.com",
    phoneNumber: "901-234-5678",
    city: "Paris",
    mobile: "109-876-4321",
    country: "France",
    relatedTo: "SalesForce",
  },
  {
    id: "10",
    person: "Julia Wilson",
    name: "Julia",
    jobTitle: "Finance Analyst",
    companyReference: "Ref-010",
    subCategory: "Finance",
    additionalIdType: "Contractor ID",
    additionalIdValue: "C00123",
    category: "Contractor",
    email: "julia.wilson@example.com",
    phoneNumber: "012-345-6789",
    city: "Dubai",
    mobile: "098-765-4321",
    country: "UAE",
    relatedTo: "FinanceHub",
  },
  {
    id: "11",
    person: "Kevin Brown",
    name: "Kevin",
    jobTitle: "Network Engineer",
    companyReference: "Ref-011",
    subCategory: "IT",
    additionalIdType: "Employee ID",
    additionalIdValue: "N11234",
    category: "Full-Time",
    email: "kevin.brown@example.com",
    phoneNumber: "123-456-7891",
    city: "Tokyo",
    mobile: "987-654-3211",
    country: "Japan",
    relatedTo: "NetWorks",
  },
  {
    id: "12",
    person: "Laura King",
    name: "Laura",
    jobTitle: "Graphic Designer",
    companyReference: "Ref-012",
    subCategory: "Design",
    additionalIdType: "Freelancer ID",
    additionalIdValue: "F22345",
    category: "Freelancer",
    email: "laura.king@example.com",
    phoneNumber: "234-567-8902",
    city: "Rome",
    mobile: "876-543-2110",
    country: "Italy",
    relatedTo: "CreativeStudio",
  },
  {
    id: "13",
    person: "Mark White",
    name: "Mark",
    jobTitle: "Business Analyst",
    companyReference: "Ref-013",
    subCategory: "Analysis",
    additionalIdType: "Employee ID",
    additionalIdValue: "B33456",
    category: "Full-Time",
    email: "mark.white@example.com",
    phoneNumber: "345-678-9013",
    city: "Madrid",
    mobile: "765-432-1098",
    country: "Spain",
    relatedTo: "BizWorks",
  },
  {
    id: "14",
    person: "Nancy Green",
    name: "Nancy",
    jobTitle: "Legal Advisor",
    companyReference: "Ref-014",
    subCategory: "Legal",
    additionalIdType: "Contractor ID",
    additionalIdValue: "L44567",
    category: "Contractor",
    email: "nancy.green@example.com",
    phoneNumber: "456-789-0124",
    city: "Vienna",
    mobile: "654-321-0987",
    country: "Austria",
    relatedTo: "LegalHub",
  },
  {
    id: "15",
    person: "Oscar Miller",
    name: "Oscar",
    jobTitle: "Product Manager",
    companyReference: "Ref-015",
    subCategory: "Management",
    additionalIdType: "Employee ID",
    additionalIdValue: "P55678",
    category: "Full-Time",
    email: "oscar.miller@example.com",
    phoneNumber: "567-890-1235",
    city: "Hong Kong",
    mobile: "543-210-9876",
    country: "China",
    relatedTo: "ProductWorks",
  },
];

const categoryColors: Record<ClientContactCategory, string> = {
  [ClientContactCategory["Full-Time"]]: "bg-green-500 text-white",
  [ClientContactCategory["Part-Time"]]: "bg-yellow-500 text-black",
  [ClientContactCategory.Contractor]: "bg-purple-500 text-white",
  [ClientContactCategory.Freelancer]: "bg-pink-500 text-white",
};

const columns: ColumnDef<ClientContactDetails>[] = [
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
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-blue-600">
          {" "}
          {row.original.person}
        </div>
      );
    },
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
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.original.category;
      return (
        <div
          className={cn("rounded-md p-1 text-center", categoryColors[category])}
        >
          {category}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return (
        <a
          className="text-primary hover:underline"
          href={`mailto:${row.original.email}`}
        >
          {row.original.email}
        </a>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "relatedTo",
    header: "Related To",
  },
];

const ClientContcatTable = () => {
  return (
    <div className="p-8">
      <DataTable className="mt-4" columns={columns} data={data} />
    </div>
  );
};

export default ClientContcatTable;
