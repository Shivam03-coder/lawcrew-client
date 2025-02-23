import React from "react";
import {
  FileText,
  FileCheck,
  Receipt,
  Briefcase,
  Scale,
  Users,
  FileSignature,
  Building,
  FileSpreadsheet,
  FileSearch,
  Plus,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const templates = [
  {
    icon: <Plus className="h-6 w-6 text-green-600" />,
    title: "Start a New Document",
    description: "Create a new document from scratch.",
    action: "/dashboard/documents/new",
    lastUpdated: "Mar 2025",
    category: "General",
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    title: "Tax Return Form",
    description: "Comprehensive tax return template with automated calculations and latest tax regulations compliance.",
    action: "/dashboard/documents/tax-return",
    lastUpdated: "Mar 2025",
    category: "Tax Documents",
  },
  {
    icon: <FileCheck className="h-6 w-6 text-blue-600" />,
    title: "Employment Contract",
    description: "Standard employment agreement template with customizable terms and conditions.",
    action: "/dashboard/documents/employment-contract",
    lastUpdated: "Feb 2025",
    category: "Legal",
  },
  {
    icon: <Receipt className="h-6 w-6 text-blue-600" />,
    title: "Invoice Template",
    description: "Professional invoice template with automatic total calculation and tax breakdown.",
    action: "/dashboard/documents/invoice",
    lastUpdated: "Mar 2025",
    category: "Finance",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    title: "Business Plan",
    description: "Detailed business plan template with financial projections and market analysis sections.",
    action: "/dashboard/documents/business-plan",
    lastUpdated: "Jan 2025",
    category: "Business",
  },
  {
    icon: <Scale className="h-6 w-6 text-blue-600" />,
    title: "Legal Agreement",
    description: "General purpose legal agreement template with standard terms and conditions.",
    action: "/dashboard/documents/legal-agreement",
    lastUpdated: "Mar 2025",
    category: "Legal",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "HR Policy Manual",
    description: "Comprehensive HR policy manual template covering all essential workplace policies.",
    action: "/dashboard/documents/hr-policy-manual",
    lastUpdated: "Feb 2025",
    category: "HR",
  },
  {
    icon: <FileSignature className="h-6 w-6 text-blue-600" />,
    title: "NDA Template",
    description: "Non-disclosure agreement template with customizable confidentiality terms.",
    action: "/dashboard/documents/nda",
    lastUpdated: "Mar 2025",
    category: "Legal",
  },
  {
    icon: <Building className="h-6 w-6 text-blue-600" />,
    title: "Lease Agreement",
    description: "Commercial and residential lease agreement template with standard terms.",
    action: "/dashboard/documents/lease-agreement",
    lastUpdated: "Jan 2025",
    category: "Real Estate",
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
    title: "Financial Report",
    description: "Monthly financial report template with profit & loss and balance sheet.",
    action: "/dashboard/documents/financial-report",
    lastUpdated: "Mar 2025",
    category: "Finance",
  },
  {
    icon: <FileSearch className="h-6 w-6 text-blue-600" />,
    title: "Due Diligence",
    description: "Due diligence checklist and report template for business transactions.",
    action: "/dashboard/documents/due-diligence",
    lastUpdated: "Feb 2025",
    category: "Business",
  },
];

const TemplateGallery = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-lexend text-4xl font-normal text-gray-900">
            Document Templates
          </h1>
          <p className="text-lg text-gray-600">
            Choose from our professionally crafted templates for your business
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <Card
              key={index}
              className="shadow-md card transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  {template.icon}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {template.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{template.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {template.lastUpdated}
                </span>
                <Link href={template.action! as string}>
                  <Button className="bg-blue-400" variant="secondary">Use Template</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;
