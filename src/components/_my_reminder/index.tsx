"use client";
import { Reminder, ReminderStatus } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "../shared/table";
import { cn } from "@/lib/utils";

export const data: Reminder[] = [
  {
    id: "1",
    remindOn: "2025-02-20",
    time: "10:00 AM",
    summary: "Client meeting follow-up",
    type: "Meeting",
    status: "Pending",
    remindUser: "John Doe",
    relatedMatter: "Case #1234",
    relatedContract: "Contract A",
    relatedCompany: "ABC Corp",
    relatedPerson: "Jane Smith",
    relatedTask: "Task #5678",
  },
  {
    id: "2",
    remindOn: "2025-02-21",
    time: "02:00 PM",
    summary: "Send contract for signing",
    type: "Task",
    status: "Completed",
    remindUser: "Alice Johnson",
    relatedMatter: "Agreement Review",
    relatedContract: "Contract B",
    relatedCompany: "XYZ Ltd",
    relatedPerson: "Michael Brown",
    relatedTask: "Task #9012",
  },
  {
    id: "3",
    remindOn: "2025-02-22",
    time: "09:30 AM",
    summary: "Team stand-up meeting",
    type: "Meeting",
    status: "Scheduled",
    remindUser: "David Miller",
    relatedMatter: "Project X Update",
    relatedContract: "N/A",
    relatedCompany: "Tech Innovations",
    relatedPerson: "Sarah Lee",
    relatedTask: "Task #3456",
  },
  {
    id: "4",
    remindOn: "2025-02-23",
    time: "04:00 PM",
    summary: "Follow up with supplier",
    type: "Call",
    status: "Pending",
    remindUser: "Robert King",
    relatedMatter: "Supply Chain Issue",
    relatedContract: "Contract C",
    relatedCompany: "SupplyCo",
    relatedPerson: "Emily Davis",
    relatedTask: "Task #7890",
  },
  {
    id: "5",
    remindOn: "2025-02-24",
    time: "11:45 AM",
    summary: "Legal document submission",
    type: "Task",
    status: "Overdue",
    remindUser: "Laura Smith",
    relatedMatter: "Patent Filing",
    relatedContract: "Legal Agreement X",
    relatedCompany: "Law & Co",
    relatedPerson: "Thomas White",
    relatedTask: "Task #1234",
  },
  {
    id: "6",
    remindOn: "2025-02-25",
    time: "01:15 PM",
    summary: "Annual budget review",
    type: "Meeting",
    status: "Scheduled",
    remindUser: "Brian Adams",
    relatedMatter: "Financial Planning",
    relatedContract: "Budget Report 2025",
    relatedCompany: "FinanceCorp",
    relatedPerson: "Olivia Green",
    relatedTask: "Task #6789",
  },
  {
    id: "7",
    remindOn: "2025-02-26",
    time: "03:00 PM",
    summary: "Employee performance evaluation",
    type: "Review",
    status: "Pending",
    remindUser: "Samantha Wilson",
    relatedMatter: "HR Matters",
    relatedContract: "Employee Records",
    relatedCompany: "HR Solutions",
    relatedPerson: "Jacob Martin",
    relatedTask: "Task #4321",
  },
  {
    id: "8",
    remindOn: "2025-02-27",
    time: "09:00 AM",
    summary: "Board of directors meeting",
    type: "Meeting",
    status: "Scheduled",
    remindUser: "Ethan Scott",
    relatedMatter: "Corporate Strategy",
    relatedContract: "Board Reports",
    relatedCompany: "Enterprise Ltd",
    relatedPerson: "Sophia Turner",
    relatedTask: "Task #7654",
  },
  {
    id: "9",
    remindOn: "2025-02-28",
    time: "10:30 AM",
    summary: "Marketing campaign launch",
    type: "Event",
    status: "In Progress",
    remindUser: "Victoria Collins",
    relatedMatter: "New Product Promotion",
    relatedContract: "Marketing Plan",
    relatedCompany: "AdAgency",
    relatedPerson: "Liam Harris",
    relatedTask: "Task #8765",
  },
  {
    id: "10",
    remindOn: "2025-03-01",
    time: "02:45 PM",
    summary: "Sales strategy meeting",
    type: "Meeting",
    status: "Scheduled",
    remindUser: "Daniel Reed",
    relatedMatter: "Revenue Growth",
    relatedContract: "Sales Plan",
    relatedCompany: "SalesForce Ltd",
    relatedPerson: "Emma Roberts",
    relatedTask: "Task #2134",
  },
  {
    id: "11",
    remindOn: "2025-03-02",
    time: "11:00 AM",
    summary: "Vendor contract renewal",
    type: "Task",
    status: "Pending",
    remindUser: "Nathan Parker",
    relatedMatter: "Contract Extension",
    relatedContract: "Vendor Agreement",
    relatedCompany: "TechSupply",
    relatedPerson: "Sophia Mitchell",
    relatedTask: "Task #9876",
  },
  {
    id: "12",
    remindOn: "2025-03-03",
    time: "08:00 AM",
    summary: "Quarterly financial report",
    type: "Report",
    status: "Completed",
    remindUser: "Olivia Carter",
    relatedMatter: "Company Financials",
    relatedContract: "Finance Report",
    relatedCompany: "Accounting Pros",
    relatedPerson: "Benjamin Walker",
    relatedTask: "Task #5432",
  },
  {
    id: "13",
    remindOn: "2025-03-04",
    time: "04:30 PM",
    summary: "Internal audit review",
    type: "Audit",
    status: "In Progress",
    remindUser: "Alexander Murphy",
    relatedMatter: "Compliance",
    relatedContract: "Audit Report",
    relatedCompany: "AuditFirm",
    relatedPerson: "Isabella Young",
    relatedTask: "Task #6543",
  },
  {
    id: "14",
    remindOn: "2025-03-05",
    time: "12:15 PM",
    summary: "Customer support analysis",
    type: "Review",
    status: "Pending",
    remindUser: "Madison Ross",
    relatedMatter: "Client Relations",
    relatedContract: "Support Data",
    relatedCompany: "SupportTech",
    relatedPerson: "James Anderson",
    relatedTask: "Task #7654",
  },
  {
    id: "15",
    remindOn: "2025-03-06",
    time: "03:45 PM",
    summary: "Legal case hearing",
    type: "Court",
    status: "Upcoming",
    remindUser: "Matthew Baker",
    relatedMatter: "Case #56789",
    relatedContract: "Legal Brief",
    relatedCompany: "Legal Firm",
    relatedPerson: "Harper Brooks",
    relatedTask: "Task #3210",
  },
  {
    id: "16",
    remindOn: "2025-03-07",
    time: "01:30 PM",
    summary: "Software deployment",
    type: "Deployment",
    status: "Completed",
    remindUser: "Lucas Scott",
    relatedMatter: "Product Launch",
    relatedContract: "Deployment Plan",
    relatedCompany: "Software Inc",
    relatedPerson: "Grace Adams",
    relatedTask: "Task #9871",
  },
  {
    id: "17",
    remindOn: "2025-03-08",
    time: "09:15 AM",
    summary: "Stock inventory check",
    type: "Task",
    status: "Pending",
    remindUser: "Mia Lewis",
    relatedMatter: "Warehouse Management",
    relatedContract: "Stock Report",
    relatedCompany: "Logistics Co",
    relatedPerson: "Jack Williams",
    relatedTask: "Task #7458",
  },
  {
    id: "18",
    remindOn: "2025-03-09",
    time: "07:45 AM",
    summary: "Payroll processing",
    type: "Finance",
    status: "Completed",
    remindUser: "Chloe Bennett",
    relatedMatter: "Employee Salaries",
    relatedContract: "Payroll Sheet",
    relatedCompany: "Payroll Services",
    relatedPerson: "Ethan Thompson",
    relatedTask: "Task #5190",
  },
];

export const StatusColor: Record<ReminderStatus, string> = {
  [ReminderStatus.Completed]: "bg-green-600 text-white",
  [ReminderStatus.Scheduled]: "bg-blue-500 text-white",
  [ReminderStatus.Overdue]: "bg-red-600 text-white",
  [ReminderStatus["In Progress"]]: "bg-yellow-500 text-white",
  [ReminderStatus.Upcoming]: "bg-purple-600 text-white",
  [ReminderStatus.Pending]: "bg-gray-500 text-white",
};

export const columns: ColumnDef<Reminder>[] = [
  {
    accessorKey: "remindOn",
    header: "Remind On",
    cell: ({ row }) => (
      <div className="rounded-md bg-blue-200 p-1 pl-3">
        {new Date(row.original.remindOn).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => (
      <div className="rounded-md bg-green-200 p-1">{row.original.time}</div>
    ),
  },
  {
    accessorKey: "summary",
    header: "Summary",
    cell: ({ row }) => (
      <div className="rounded-md p-1 text-blue-800">{row.original.summary}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="rounded-md bg-yellow-200 p-1 pl-2">
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
    accessorKey: "remindUser",
    header: "Remind User",
  },
  {
    accessorKey: "relatedMatter",
    header: "Related Matter",
  },
  {
    accessorKey: "relatedContract",
    header: "Related Contract/Document",
  },
  {
    accessorKey: "relatedCompany",
    header: "Related Company",
  },
  {
    accessorKey: "relatedPerson",
    header: "Related Person",
    cell: ({ row }) => (
      <div className="bg-cyan-100 rounded-lg p-1">{row.original.relatedPerson}</div>
    ),
  },
  {
    accessorKey: "relatedTask",
    header: "Related Task",
    cell: ({ row }) => (
      <div className="rounded-md bg-neutral-200 p-1">
        {row.original.relatedTask}
      </div>
    ),
  },
];

const MyReminderTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default MyReminderTable;
