"use client";
import DataTable from "@/components/shared/table";
import { CaseStatus, LitigationCaseTypes, PracticeArea } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { practiceAreaColors } from "../hearing_cases";

const data: LitigationCaseTypes[] = [
  {
    id: "1",
    name: "John Doe",
    practiceArea: "Civil",
    status: "Pending",
    clientName: "Company A",
    clientPosition: "CEO",
    requestedBy: "Alice Brown",
    assignedTeam: "Team 1",
    assignee: "Bob White",
    arrivalDate: "2025-01-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    practiceArea: "Criminal",
    status: "Ongoing",
    clientName: "Company B",
    clientPosition: "Manager",
    requestedBy: "Charlie Green",
    assignedTeam: "Team 2",
    assignee: "Emily Taylor",
    arrivalDate: "2025-01-02",
  },
  {
    id: "3",
    name: "Alice Brown",
    practiceArea: "Family",
    status: "Resolved",
    clientName: "Company C",
    clientPosition: "Director",
    requestedBy: "George Black",
    assignedTeam: "Team 3",
    assignee: "Julia Wilson",
    arrivalDate: "2025-01-03",
  },
  {
    id: "4",
    name: "Bob White",
    practiceArea: "Civil",
    status: "Pending",
    clientName: "Company D",
    clientPosition: "Lead Engineer",
    requestedBy: "Nancy Green",
    assignedTeam: "Team 4",
    assignee: "Oscar Miller",
    arrivalDate: "2025-01-04",
  },
  {
    id: "5",
    name: "Charlie Green",
    practiceArea: "Criminal",
    status: "Ongoing",
    clientName: "Company E",
    clientPosition: "HR Manager",
    requestedBy: "Laura King",
    assignedTeam: "Team 5",
    assignee: "Kevin Brown",
    arrivalDate: "2025-01-05",
  },
  {
    id: "6",
    name: "Emily Taylor",
    practiceArea: "Labour",
    status: "Resolved",
    clientName: "Company F",
    clientPosition: "COO",
    requestedBy: "Mark White",
    assignedTeam: "Team 6",
    assignee: "Hannah Lee",
    arrivalDate: "2025-01-06",
  },
  {
    id: "7",
    name: "George Black",
    practiceArea: "Tax",
    status: "Pending",
    clientName: "Company G",
    clientPosition: "CFO",
    requestedBy: "Julia Wilson",
    assignedTeam: "Team 7",
    assignee: "Ivan Gray",
    arrivalDate: "2025-01-07",
  },
  {
    id: "8",
    name: "Hannah Lee",
    practiceArea: "Civil",
    status: "Ongoing",
    clientName: "Company H",
    clientPosition: "Founder",
    requestedBy: "Oscar Miller",
    assignedTeam: "Team 8",
    assignee: "Quincy Adams",
    arrivalDate: "2025-01-08",
  },
  {
    id: "9",
    name: "Ivan Gray",
    practiceArea: "Family",
    status: "Resolved",
    clientName: "Company I",
    clientPosition: "CEO",
    requestedBy: "Paul Brown",
    assignedTeam: "Team 9",
    assignee: "Nancy Green",
    arrivalDate: "2025-01-09",
  },
  {
    id: "10",
    name: "Julia Wilson",
    practiceArea: "Criminal",
    status: "Pending",
    clientName: "Company J",
    clientPosition: "VP Marketing",
    requestedBy: "Kevin Brown",
    assignedTeam: "Team 10",
    assignee: "Mark White",
    arrivalDate: "2025-01-10",
  },
  {
    id: "11",
    name: "Kevin Brown",
    practiceArea: "Property",
    status: "Ongoing",
    clientName: "Company K",
    clientPosition: "CTO",
    requestedBy: "Hannah Lee",
    assignedTeam: "Team 11",
    assignee: "Laura King",
    arrivalDate: "2025-01-11",
  },
  {
    id: "12",
    name: "Laura King",
    practiceArea: "Labour",
    status: "Resolved",
    clientName: "Company L",
    clientPosition: "CFO",
    requestedBy: "George Black",
    assignedTeam: "Team 12",
    assignee: "Nancy Green",
    arrivalDate: "2025-01-12",
  },
  {
    id: "13",
    name: "Mark White",
    practiceArea: "Criminal",
    status: "Pending",
    clientName: "Company M",
    clientPosition: "Lead Developer",
    requestedBy: "Oscar Miller",
    assignedTeam: "Team 13",
    assignee: "Julia Wilson",
    arrivalDate: "2025-01-13",
  },
  {
    id: "14",
    name: "Nancy Green",
    practiceArea: "Tax",
    status: "Ongoing",
    clientName: "Company N",
    clientPosition: "Project Manager",
    requestedBy: "Kevin Brown",
    assignedTeam: "Team 14",
    assignee: "Paul Brown",
    arrivalDate: "2025-01-14",
  },
  {
    id: "15",
    name: "Oscar Miller",
    practiceArea: "Civil",
    status: "Resolved",
    clientName: "Company O",
    clientPosition: "Sales Director",
    requestedBy: "Julia Wilson",
    assignedTeam: "Team 15",
    assignee: "Mark White",
    arrivalDate: "2025-01-15",
  },
];

export const statusColors: Record<CaseStatus, string> = {
  [CaseStatus.Ongoing]: "bg-orange-500 text-white",
  [CaseStatus.Resolved]: "bg-green-600 text-white",
  [CaseStatus.Pending]: "bg-gray-500 text-white",
};

const columns: ColumnDef<LitigationCaseTypes>[] = [
  {
    accessorKey: "name",
    header: "Case Name",
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "practiceArea",
    header: "Practice Area",
    cell: ({ row }) => {
      const practiceArea = row.original.practiceArea;
      return (
        <div
          className={`rounded-md p-1 text-center ${practiceAreaColors[practiceArea]}`}
        >
          {practiceArea}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className={`rounded-md p-1 text-center ${statusColors[status]}`}>
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "clientPosition",
    header: "Client Position",
  },
  {
    accessorKey: "requestedBy",
    header: "Requested By",
  },
  {
    accessorKey: "assignedTeam",
    header: "Assigned Team",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
  {
    accessorKey: "arrivalDate",
    header: "Arrival Date",
  },
];

const LitigationCaseTable = () => {
  return (
    <div className="p-8">
      <DataTable className="mt-4" columns={columns} data={data} />
    </div>
  );
};

export default LitigationCaseTable;
