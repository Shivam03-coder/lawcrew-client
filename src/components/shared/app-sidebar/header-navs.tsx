import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  Briefcase,
  FileText,
  Calendar,
  Link as LinkIcon,
  Wallet,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const appheaderlinks = [
  {
    title: "Contacts",
    icon: <Users className="h-5 w-5" />,
    items: [
      { optionTitle: "Persons", href: "/dashboard/contacts/persons" },
      { optionTitle: "Companies", href: "/dashboard/contacts/companies" },
      { optionTitle: "Clients", href: "/dashboard/contacts/clients" },
    ],
  },
  {
    title: "Litigation Cases",
    icon: <Briefcase className="h-5 w-5" />,
    items: [
      {
        optionTitle: "Litigation Cases",
        href: "/dashboard/cases/litigation-cases",
      },
      { optionTitle: "Hearings", href: "/dashboard/cases/hearings" },
    ],
  },
  {
    title: "Corporate Matters",
    icon: <FileText className="h-5 w-5" />,
    items: [
      {
        optionTitle: "Corporate Matters",
        href: "/dashboard/corporate-matter",
      },
    ],
  },
];

const HeaderNavs = () => {
  return (
    <header className="sticky left-0 top-0 z-40 w-full">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-4">
          <span className="rounded-lg bg-primary p-2 px-2 text-xl font-bold uppercase tracking-wide text-white">
            1st Media Link
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavs;
