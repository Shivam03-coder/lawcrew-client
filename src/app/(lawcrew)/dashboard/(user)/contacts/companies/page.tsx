"use client";
import DataTable from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CompanyContactDetails,
  CompanyLegalType,
  CompanySubCategory,
} from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

const data: CompanyContactDetails[] = [
  {
    id: "1",
    companyName: "TechCorp",
    nickname: "Techy",
    category: "Technology",
    subCategory: "Software",
    legalType: "LLC",
    nationality: "USA",
    lawyer: "John Doe",
    capital: 500000,
    capitalCurrency: "USD",
    registrationNumber: "123456",
    registrationTaxNumber: "78910",
  },
  {
    id: "2",
    companyName: "Green Energy",
    nickname: "GreenGen",
    category: "Energy",
    subCategory: "Renewable",
    legalType: "Corp",
    nationality: "Canada",
    lawyer: "Jane Smith",
    capital: 750000,
    capitalCurrency: "CAD",
    registrationNumber: "654321",
    registrationTaxNumber: "09876",
  },
  {
    id: "3",
    companyName: "FinServe",
    nickname: "FS",
    category: "Finance",
    subCategory: "Banking",
    legalType: "Inc",
    nationality: "UK",
    lawyer: "Alice Brown",
    capital: 1000000,
    capitalCurrency: "GBP",
    registrationNumber: "112233",
    registrationTaxNumber: "445566",
  },
  {
    id: "4",
    companyName: "AutoTech",
    nickname: "ATech",
    category: "Automobile",
    subCategory: "Manufacturing",
    legalType: "PLC",
    nationality: "Germany",
    lawyer: "Hans Müller",
    capital: 3000000,
    capitalCurrency: "EUR",
    registrationNumber: "778899",
    registrationTaxNumber: "223344",
  },
  {
    id: "5",
    companyName: "MediCare",
    nickname: "MediC",
    category: "Healthcare",
    subCategory: "Pharma",
    legalType: "PLC",
    nationality: "India",
    lawyer: "Anil Mehta",
    capital: 1500000,
    capitalCurrency: "INR",
    registrationNumber: "998877",
    registrationTaxNumber: "556677",
  },
  {
    id: "6",
    companyName: "EduVision",
    nickname: "EduV",
    category: "Education",
    subCategory: "E-Learning",
    legalType: "Sole Proprietorship",
    nationality: "Australia",
    lawyer: "Emily Davis",
    capital: 600000,
    capitalCurrency: "AUD",
    registrationNumber: "334455",
    registrationTaxNumber: "889900",
  },
  {
    id: "7",
    companyName: "AgroWorld",
    nickname: "AgroW",
    category: "Agriculture",
    subCategory: "Farming",
    legalType: "Partnership",
    nationality: "Brazil",
    lawyer: "Carlos Silva",
    capital: 800000,
    capitalCurrency: "BRL",
    registrationNumber: "556644",
    registrationTaxNumber: "778899",
  },
  {
    id: "8",
    companyName: "RetailHub",
    nickname: "RHub",
    category: "Retail",
    subCategory: "E-Commerce",
    legalType: "Corp",
    nationality: "Japan",
    lawyer: "Taro Tanaka",
    capital: 2000000,
    capitalCurrency: "JPY",
    registrationNumber: "112244",
    registrationTaxNumber: "667788",
  },
  {
    id: "9",
    companyName: "TravelEase",
    nickname: "TEase",
    category: "Travel",
    subCategory: "Tourism",
    legalType: "LLC",
    nationality: "France",
    lawyer: "Sophie Dubois",
    capital: 1200000,
    capitalCurrency: "EUR",
    registrationNumber: "223355",
    registrationTaxNumber: "889900",
  },
  {
    id: "10",
    companyName: "BuildSmart",
    nickname: "BSmart",
    category: "Construction",
    subCategory: "Infrastructure",
    legalType: "LLC",
    nationality: "South Africa",
    lawyer: "Nkosi Zulu",
    capital: 5000000,
    capitalCurrency: "ZAR",
    registrationNumber: "667788",
    registrationTaxNumber: "112233",
  },
];
const LegalTypeColor: Record<CompanyLegalType, string> = {
  [CompanyLegalType.Corp]: "bg-indigo-500 text-white",
  [CompanyLegalType.Inc]: "bg-rose-500 text-white",
  [CompanyLegalType.LLC]: "bg-emerald-500 text-white",
  [CompanyLegalType.LLP]: "bg-amber-500 text-white",
  [CompanyLegalType.PLC]: "bg-cyan-500 text-white",
  [CompanyLegalType.Partnership]: "bg-teal-500 text-white",
  [CompanyLegalType.SoleProprietorship]: "bg-red-500 text-white",
};
const SubCategoryColor: Record<CompanySubCategory, string> = {
  [CompanySubCategory.Banking]: "bg-green-500 text-white",
  [CompanySubCategory.ECommerce]: "bg-orange-500 text-white",
  [CompanySubCategory.ELearning]: "bg-pink-500 text-white",
  [CompanySubCategory.Farming]: "bg-lime-500 text-black",
  [CompanySubCategory.Infrastructure]: "bg-gray-600 text-white",
  [CompanySubCategory.Manufacturing]: "bg-blue-700 text-white",
  [CompanySubCategory.Pharma]: "bg-purple-500 text-white",
  [CompanySubCategory.Renewable]: "bg-emerald-600 text-white",
  [CompanySubCategory.Software]: "bg-blue-500 text-white",
  [CompanySubCategory.Tourism]: "bg-teal-500 text-white",
  [CompanySubCategory.Electronics]: "bg-pink-500 text-white",
};
export const columns: ColumnDef<CompanyContactDetails>[] = [
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Company Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-semibold text-blue-600">
        {row.original.companyName}
      </div>
    ),
  },
  {
    accessorKey: "nickname",
    header: "Nickname",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "subCategory",
    header: "Sub Category",
    cell: ({ row }) => {
      const subCategory = row.original.subCategory;
      return (
        <div
          className={cn(
            "rounded-md p-1 text-center",
            SubCategoryColor[subCategory] || "bg-gray-200",
          )}
        >
          {subCategory}
        </div>
      );
    },
  },
  {
    accessorKey: "legalType",
    header: "Legal Type",
    cell: ({ row }) => {
      const legaltype = row.original.legalType;
      return (
        <div
          className={cn(
            "rounded-md p-1 text-center",
            LegalTypeColor[legaltype] || "bg-gray-200",
          )}
        >
          {legaltype}
        </div>
      );
    },
  },
  {
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "lawyer",
    header: "Lawyer",
  },
  {
    accessorKey: "capital",
    header: "Capital",
    cell: ({ row }) => (
      <div>
        {row.original.capital.toLocaleString()} {row.original.capitalCurrency}
      </div>
    ),
  },
  {
    accessorKey: "registrationNumber",
    header: "Reg. Number",
  },
  {
    accessorKey: "registrationTaxNumber",
    header: "Tax Number",
  },
];

const CompanyContactsTable = () => {
  return (
    <div className="p-8">
      <DataTable className="mt-4" columns={columns} data={data} />
    </div>
  );
};

export default CompanyContactsTable;
