"use client";
import DataTable from "@/components/shared/table";
import { cn } from "@/lib/utils";
import { HearingCaseTypes, PracticeArea } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";

export const practiceAreaColors: Record<PracticeArea, string> = {
  [PracticeArea.Criminal]: "bg-red-500 text-white",
  [PracticeArea.Civil]: "bg-blue-500 text-white",
  [PracticeArea.Tax]: "bg-yellow-500 text-black",
  [PracticeArea.Labour]: "bg-green-500 text-white",
  [PracticeArea.Property]: "bg-purple-500 text-white",
  [PracticeArea.Family]: "bg-pink-500 text-white",
};

const data: HearingCaseTypes[] = [
  {
    id: "1",
    day: "Monday",
    hearingDate: "2025-01-01",
    name: "John Doe",
    hearingType: "Civil",
    stage: "Initial Hearing",
    assignee: "Alice Brown",
    courtReferences: "Ref-001",
    importantDevelopment: "Filed petition for review",
    courtName: "Supreme Court",
  },
  {
    id: "2",
    day: "Tuesday",
    hearingDate: "2025-01-02",
    name: "Jane Smith",
    hearingType: "Criminal",
    stage: "Final Argument",
    assignee: "Bob White",
    courtReferences: "Ref-002",
    importantDevelopment: "Witness presented evidence",
    courtName: "District Court",
  },
  {
    id: "3",
    day: "Wednesday",
    hearingDate: "2025-01-03",
    name: "Alice Brown",
    hearingType: "Family",
    stage: "Hearing Adjourned",
    assignee: "Charlie Green",
    courtReferences: "Ref-003",
    importantDevelopment: "Hearing rescheduled",
    courtName: "Family Court",
  },
  {
    id: "4",
    day: "Thursday",
    hearingDate: "2025-01-04",
    name: "Bob White",
    hearingType: "Civil",
    stage: "Evidence Stage",
    assignee: "Emily Taylor",
    courtReferences: "Ref-004",
    importantDevelopment: "Evidence submitted",
    courtName: "High Court",
  },
  {
    id: "5",
    day: "Friday",
    hearingDate: "2025-01-05",
    name: "Charlie Green",
    hearingType: "Criminal",
    stage: "Judgment",
    assignee: "George Black",
    courtReferences: "Ref-005",
    importantDevelopment: "Judgment delivered",
    courtName: "Sessions Court",
  },
  {
    id: "6",
    day: "Monday",
    hearingDate: "2025-01-08",
    name: "Emily Taylor",
    hearingType: "Labour",
    stage: "Initial Hearing",
    assignee: "Hannah Lee",
    courtReferences: "Ref-006",
    importantDevelopment: "Case admitted",
    courtName: "Labour Court",
  },
  {
    id: "7",
    day: "Tuesday",
    hearingDate: "2025-01-09",
    name: "George Black",
    hearingType: "Tax",
    stage: "Cross Examination",
    assignee: "Ivan Gray",
    courtReferences: "Ref-007",
    importantDevelopment: "Tax expert testimony recorded",
    courtName: "Tribunal Court",
  },
  {
    id: "8",
    day: "Wednesday",
    hearingDate: "2025-01-10",
    name: "Hannah Lee",
    hearingType: "Civil",
    stage: "Evidence Stage",
    assignee: "Julia Wilson",
    courtReferences: "Ref-008",
    importantDevelopment: "Filed additional documents",
    courtName: "Supreme Court",
  },
  {
    id: "9",
    day: "Thursday",
    hearingDate: "2025-01-11",
    name: "Ivan Gray",
    hearingType: "Family",
    stage: "Settlement",
    assignee: "Kevin Brown",
    courtReferences: "Ref-009",
    importantDevelopment: "Settlement achieved",
    courtName: "Family Court",
  },
  {
    id: "10",
    day: "Friday",
    hearingDate: "2025-01-12",
    name: "Julia Wilson",
    hearingType: "Criminal",
    stage: "Final Judgment",
    assignee: "Laura King",
    courtReferences: "Ref-010",
    importantDevelopment: "Final arguments heard",
    courtName: "District Court",
  },
  {
    id: "11",
    day: "Monday",
    hearingDate: "2025-01-15",
    name: "Kevin Brown",
    hearingType: "Property",
    stage: "Mediation",
    assignee: "Mark White",
    courtReferences: "Ref-011",
    importantDevelopment: "Mediation session scheduled",
    courtName: "High Court",
  },
  {
    id: "12",
    day: "Tuesday",
    hearingDate: "2025-01-16",
    name: "Laura King",
    hearingType: "Labour",
    stage: "Evidence Collection",
    assignee: "Nancy Green",
    courtReferences: "Ref-012",
    importantDevelopment: "Document collection initiated",
    courtName: "Labour Court",
  },
  {
    id: "13",
    day: "Wednesday",
    hearingDate: "2025-01-17",
    name: "Mark White",
    hearingType: "Criminal",
    stage: "Initial Argument",
    assignee: "Oscar Miller",
    courtReferences: "Ref-013",
    importantDevelopment: "Accused submitted plea",
    courtName: "Sessions Court",
  },
  {
    id: "14",
    day: "Thursday",
    hearingDate: "2025-01-18",
    name: "Nancy Green",
    hearingType: "Tax",
    stage: "Appeal",
    assignee: "Paul Brown",
    courtReferences: "Ref-014",
    importantDevelopment: "Appeal granted",
    courtName: "Tribunal Court",
  },
  {
    id: "15",
    day: "Friday",
    hearingDate: "2025-01-19",
    name: "Oscar Miller",
    hearingType: "Civil",
    stage: "Final Hearing",
    assignee: "Quincy Adams",
    courtReferences: "Ref-015",
    importantDevelopment: "Judgment expected",
    courtName: "Supreme Court",
  },
];

export const columns: ColumnDef<HearingCaseTypes>[] = [
  {
    accessorKey: "name",
    header: "Case Name",
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "day",
    header: "Day",
    cell: ({ row }) => {
      return (
        <div className="rounded-md bg-blue-200 p-1 text-center">
          {row.original.day}
        </div>
      );
    },
  },
  {
    accessorKey: "hearingDate",
    header: "Hearing Date",
    cell: ({ row }) => {
      return (
        <div className="rounded-md bg-gray-300 p-1 text-center text-red-600">
          {row.original.hearingDate}
        </div>
      );
    },
  },
  {
    accessorKey: "hearingType",
    header: "Hearing Type",
    cell: ({ row }) => {
      return (
        <div
          className={cn(
            "rounded-md bg-gray-200 p-1 text-center",
            practiceAreaColors[row.original.hearingType],
          )}
        >
          {row.original.hearingType}
        </div>
      );
    },
  },
  {
    accessorKey: "stage",
    header: "Stage",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
  {
    accessorKey: "courtReferences",
    header: "Court References",
  },
  {
    accessorKey: "importantDevelopment",
    header: "Important Development",
  },
  {
    accessorKey: "courtName",
    header: "Court Name",
    cell: ({ row }) => {
      return (
        <div className="rounded-md bg-green-200 p-1 text-center">
          {row.original.courtName}
        </div>
      );
    },
  },
];

const HearingCaseTable = () => {
  return (
    <div className="p-8">
      <DataTable
        className="mt-4 overflow-x-scroll"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default HearingCaseTable;
