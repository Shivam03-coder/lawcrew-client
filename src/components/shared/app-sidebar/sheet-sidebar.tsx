"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./sidebar-logo";
import React, { useState } from "react";
import {
  Menu,
  ChevronDown,
  Home,
  ListChecks,
  Users,
  Settings,
  Briefcase,
  FileText,
  Wallet,
  Calendar,
  User,
  SquareDashedKanban,
  Landmark,
  Search,
  Bell,
} from "lucide-react";
import { IconTax } from "@tabler/icons-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

const mainNavData = [
  {
    title: "Main Navigation",
    items: [
      { title: "Task-Management", url: "/dashboard", icon: <Home size={18} /> },
      {
        title: "Taxation-Management",
        url: "/dashboard/taxation",
        icon: <IconTax size={18} />,
      },
      {
        title: "Finance-Management",
        url: "/dashboard/finance",
        icon: <Landmark size={18} />,
      },
      {
        title: "My Task",
        url: "/dashboard/my-task",
        icon: <ListChecks size={18} />,
      },
      {
        title: "Documents",
        url: "/dashboard/documents",
        icon: <SquareDashedKanban size={18} />,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Settings size={18} />,
      },
      {
        title: "Members",
        url: "/dashboard/members",
        icon: <Users size={18} />,
      },
      { title: "Profile", url: "/dashboard/profile", icon: <User size={18} /> },
    ],
  },
];

const collapsibleNavData = [
  {
    title: "Contacts",
    icon: <Users size={18} />,
    items: [
      { title: "Persons", url: "/dashboard/contacts/persons" },
      { title: "Companies", url: "/dashboard/contacts/companies" },
      { title: "Clients", url: "/dashboard/contacts/clients" },
    ],
  },
  {
    title: "Litigation Cases",
    icon: <Briefcase size={18} />,
    items: [
      { title: "Litigation Cases", url: "/dashboard/cases/litigation-cases" },
      { title: "Hearings", url: "/dashboard/cases/hearings" },
    ],
  },
];

const moreLinks = {
  title: "More",
  items: [
    { title: "I-Docs", url: "/dashboard/i-docs", icon: <FileText size={18} /> },
    {
      title: "My Reminders",
      url: "/dashboard/my-reminders",
      icon: <Calendar size={18} />,
    },
  ],
};

const SheetSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <Menu className="dark:text-secondary" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="my-auto ml-5 flex h-[98%] w-[330px] flex-col justify-start overflow-y-scroll rounded-3xl border border-white/20 bg-white/10 font-lexend text-[14px] text-white shadow-xl backdrop-blur-md backdrop-saturate-150 transition-all duration-300 dark:border-white/10 dark:bg-white/5"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        {/* Main Navigation */}
        <>
          {mainNavData.map((group) => (
            <div key={group.title}>
              <ul>
                {group.items.map((item) => (
                  <li key={item.title} className="py-2">
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 hover:text-primary dark:hover:text-gray-100"
                    >
                      {item.icon} {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>

        {/* Collapsible Sections */}
        <>
          {collapsibleNavData.map((group) => (
            <Collapsible key={group.title}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg">
                <span className="flex items-center gap-2 text-sm">
                  {group.icon} {group.title}
                </span>
                <ChevronDown size={16} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="ml-4">
                  {group.items.map((subItem) => (
                    <li key={subItem.title} className="py-2">
                      <Link
                        href={subItem.url}
                        className="text-sm hover:text-primary dark:hover:text-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>

        {/* More Links */}
        <>
          <p className="font-medium text-gray-600">{moreLinks.title}</p>
          <ul>
            {moreLinks.items.map((item) => (
              <li key={item.title} className="py-2">
                <Link
                  href={item.url}
                  className="flex items-center gap-2 hover:text-primary dark:hover:text-gray-100"
                >
                  {item.icon} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSidebar;
