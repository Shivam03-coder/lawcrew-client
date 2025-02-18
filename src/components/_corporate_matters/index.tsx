"use client";
import { CorporateMatterTypes } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { practiceAreaColors } from "../_cases/hearing_cases";
import DataTable from "../shared/table";
import { statusColors } from "../_cases/litigation_cases";
import { Checkbox } from "../ui/checkbox";

const data: CorporateMatterTypes[] = [
  {
    id: "1",
    assignee: "Alice Brown",
    clientName: "Company A",
    name: "John Doe",
    practiceArea: "Civil",
    workflowStatus: "Pending",
    importantDevelopment: "Filed petition for review",
    requestedBy: "Charlie Green",
    value: "$100,000",
    assignedTeam: "Team 1",
    arrivalDate: "2025-01-01",
    dueDate: "2025-02-01",
    effectiveEffort: "5 hours",
    filedOn: "2025-01-01",
  },
  {
    id: "2",
    assignee: "Bob White",
    clientName: "Company B",
    name: "Jane Smith",
    practiceArea: "Criminal",
    workflowStatus: "Ongoing",
    importantDevelopment: "Witness testimony recorded",
    requestedBy: "Emily Taylor",
    value: "$50,000",
    assignedTeam: "Team 2",
    arrivalDate: "2025-01-02",
    dueDate: "2025-02-05",
    effectiveEffort: "10 hours",
    filedOn: "2025-01-02",
  },
  {
    id: "3",
    assignee: "Charlie Green",
    clientName: "Company C",
    name: "Alice Brown",
    practiceArea: "Family",
    workflowStatus: "Resolved",
    importantDevelopment: "Hearing adjourned",
    requestedBy: "George Black",
    value: "$25,000",
    assignedTeam: "Team 3",
    arrivalDate: "2025-01-03",
    dueDate: "2025-01-15",
    effectiveEffort: "8 hours",
    filedOn: "2025-01-03",
  },
  {
    id: "4",
    assignee: "Emily Taylor",
    clientName: "Company D",
    name: "Bob White",
    practiceArea: "Civil",
    workflowStatus: "Pending",
    importantDevelopment: "Evidence submitted",
    requestedBy: "Nancy Green",
    value: "$200,000",
    assignedTeam: "Team 4",
    arrivalDate: "2025-01-04",
    dueDate: "2025-02-10",
    effectiveEffort: "6 hours",
    filedOn: "2025-01-04",
  },
  {
    id: "5",
    assignee: "George Black",
    clientName: "Company E",
    name: "Charlie Green",
    practiceArea: "Criminal",
    workflowStatus: "Ongoing",
    importantDevelopment: "Final arguments heard",
    requestedBy: "Oscar Miller",
    value: "$75,000",
    assignedTeam: "Team 5",
    arrivalDate: "2025-01-05",
    dueDate: "2025-01-20",
    effectiveEffort: "7 hours",
    filedOn: "2025-01-05",
  },
  {
    id: "6",
    assignee: "Hannah Lee",
    clientName: "Company F",
    name: "Emily Taylor",
    practiceArea: "Labour",
    workflowStatus: "Resolved",
    importantDevelopment: "Case closed",
    requestedBy: "Mark White",
    value: "$30,000",
    assignedTeam: "Team 6",
    arrivalDate: "2025-01-06",
    dueDate: "2025-01-25",
    effectiveEffort: "4 hours",
    filedOn: "2025-01-06",
  },
  {
    id: "7",
    assignee: "Ivan Gray",
    clientName: "Company G",
    name: "George Black",
    practiceArea: "Tax",
    workflowStatus: "Pending",
    importantDevelopment: "Tax audit scheduled",
    requestedBy: "Julia Wilson",
    value: "$150,000",
    assignedTeam: "Team 7",
    arrivalDate: "2025-01-07",
    dueDate: "2025-02-15",
    effectiveEffort: "9 hours",
    filedOn: "2025-01-07",
  },
  {
    id: "8",
    assignee: "Julia Wilson",
    clientName: "Company H",
    name: "Hannah Lee",
    practiceArea: "Civil",
    workflowStatus: "Ongoing",
    importantDevelopment: "Filed additional documents",
    requestedBy: "Oscar Miller",
    value: "$80,000",
    assignedTeam: "Team 8",
    arrivalDate: "2025-01-08",
    dueDate: "2025-02-01",
    effectiveEffort: "6 hours",
    filedOn: "2025-01-08",
  },
  {
    id: "9",
    assignee: "Kevin Brown",
    clientName: "Company I",
    name: "Ivan Gray",
    practiceArea: "Family",
    workflowStatus: "Resolved",
    importantDevelopment: "Settlement reached",
    requestedBy: "Paul Brown",
    value: "$40,000",
    assignedTeam: "Team 9",
    arrivalDate: "2025-01-09",
    dueDate: "2025-01-20",
    effectiveEffort: "5 hours",
    filedOn: "2025-01-09",
  },
  {
    id: "10",
    assignee: "Laura King",
    clientName: "Company J",
    name: "Julia Wilson",
    practiceArea: "Criminal",
    workflowStatus: "Pending",
    importantDevelopment: "Final hearing scheduled",
    requestedBy: "Kevin Brown",
    value: "$60,000",
    assignedTeam: "Team 10",
    arrivalDate: "2025-01-10",
    dueDate: "2025-01-30",
    effectiveEffort: "7 hours",
    filedOn: "2025-01-10",
  },
  {
    id: "11",
    assignee: "Mark White",
    clientName: "Company K",
    name: "Kevin Brown",
    practiceArea: "Property",
    workflowStatus: "Ongoing",
    importantDevelopment: "Mediation scheduled",
    requestedBy: "Hannah Lee",
    value: "$120,000",
    assignedTeam: "Team 11",
    arrivalDate: "2025-01-11",
    dueDate: "2025-02-10",
    effectiveEffort: "8 hours",
    filedOn: "2025-01-11",
  },
  {
    id: "12",
    assignee: "Nancy Green",
    clientName: "Company L",
    name: "Laura King",
    practiceArea: "Labour",
    workflowStatus: "Resolved",
    importantDevelopment: "Document collection completed",
    requestedBy: "George Black",
    value: "$50,000",
    assignedTeam: "Team 12",
    arrivalDate: "2025-01-12",
    dueDate: "2025-01-20",
    effectiveEffort: "6 hours",
    filedOn: "2025-01-12",
  },
  {
    id: "13",
    assignee: "Oscar Miller",
    clientName: "Company M",
    name: "Mark White",
    practiceArea: "Criminal",
    workflowStatus: "Pending",
    importantDevelopment: "Accused submitted plea",
    requestedBy: "Julia Wilson",
    value: "$200,000",
    assignedTeam: "Team 13",
    arrivalDate: "2025-01-13",
    dueDate: "2025-02-05",
    effectiveEffort: "8 hours",
    filedOn: "2025-01-13",
  },
  {
    id: "14",
    assignee: "Paul Brown",
    clientName: "Company N",
    name: "Nancy Green",
    practiceArea: "Tax",
    workflowStatus: "Ongoing",
    importantDevelopment: "Tax expert testimony recorded",
    requestedBy: "Kevin Brown",
    value: "$90,000",
    assignedTeam: "Team 14",
    arrivalDate: "2025-01-14",
    dueDate: "2025-02-20",
    effectiveEffort: "9 hours",
    filedOn: "2025-01-14",
  },
  {
    id: "15",
    assignee: "Quincy Adams",
    clientName: "Company O",
    name: "Oscar Miller",
    practiceArea: "Civil",
    workflowStatus: "Resolved",
    importantDevelopment: "Final judgment delivered",
    requestedBy: "Julia Wilson",
    value: "$500,000",
    assignedTeam: "Team 15",
    arrivalDate: "2025-01-15",
    dueDate: "2025-01-25",
    effectiveEffort: "10 hours",
    filedOn: "2025-01-15",
  },
];

export const columns: ColumnDef<CorporateMatterTypes>[] = [
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
    accessorKey: "name",
    header: () => <div className="whitespace-nowrap">Matter Name</div>,
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "clientName",
    header: () => <div className="whitespace-nowrap">Client Name</div>,
  },
  {
    accessorKey: "practiceArea",
    header: () => <div className="whitespace-nowrap">Practice Area</div>,
    cell: ({ row }) => (
      <div
        className={`rounded-md p-1 text-center ${
          practiceAreaColors[row.original.practiceArea]
        }`}
      >
        {row.original.practiceArea}
      </div>
    ),
  },
  {
    accessorKey: "workflowStatus",
    header: () => <div className="whitespace-nowrap">Workflow Status</div>,
    cell: ({ row }) => (
      <div
        className={`rounded-md p-1 text-center ${
          statusColors[row.original.workflowStatus]
        }`}
      >
        {row.original.workflowStatus}
      </div>
    ),
  },
  {
    accessorKey: "assignee",
    header: () => <div className="whitespace-nowrap">Assignee</div>,
  },
  {
    accessorKey: "requestedBy",
    header: () => <div className="whitespace-nowrap">Requested By</div>,
  },
  {
    accessorKey: "assignedTeam",
    header: () => <div className="whitespace-nowrap">Assigned Team</div>,
  },
  {
    accessorKey: "value",
    header: () => <div className="whitespace-nowrap">Value</div>,
  },
  {
    accessorKey: "arrivalDate",
    header: () => <div className="whitespace-nowrap">Arrival Date</div>,
  },
  {
    accessorKey: "dueDate",
    header: () => <div className="whitespace-nowrap">Due Date</div>,
  },
  {
    accessorKey: "effectiveEffort",
    header: () => <div className="whitespace-nowrap">Effective Effort</div>,
  },
  {
    accessorKey: "filedOn",
    header: () => <div className="whitespace-nowrap">Filed On</div>,
  },
  {
    accessorKey: "importantDevelopment",
    header: () => (
      <div className="whitespace-nowrap">Important Development</div>
    ),
  },
];

const CorporateMatterTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default CorporateMatterTable;
