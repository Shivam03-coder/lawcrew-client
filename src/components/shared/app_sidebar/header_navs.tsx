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

          {/* Desktop Navigation */}
          {/* <nav className="hidden items-center gap-6 lg:flex">
            {appheaderlinks.map((link) => (
              <DropdownMenu key={link.title}>
                <DropdownMenuTrigger className="flex items-center gap-2 text-primary transition-all hover:scale-105 focus:outline-none">
                  {link.icon} {link.title}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary text-black shadow-md">
                  {link.items.map((item) => (
                    <DropdownMenuItem key={item.optionTitle} asChild>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm"
                      >
                        {item.optionTitle}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-primary/80 flex items-center gap-2 text-primary focus:outline-none">
                More <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-secondary text-black shadow-md">
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/i-docs"
                    className="block px-4 py-2 text-sm"
                  >
                    <FileText className="mr-2 inline-block h-5 w-5" /> I-Docs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/my-reminders"
                    className="block px-4 py-2 text-sm"
                  >
                    <Calendar className="mr-2 inline-block h-5 w-5" /> My
                    Reminders
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderNavs;
