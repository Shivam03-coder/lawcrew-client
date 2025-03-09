"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  IconCoins,
  IconDashboard,
  IconGraph,
  IconScale,
} from "@tabler/icons-react";
import { Bell, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/theme-toogle";
import SheetSidebar from "@/components/shared/app-sidebar/sheet-sidebar";
import HeaderSettings from "./header-settings";
import Link from "next/link";
import Image from "next/image";

const Appheader = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();

  const getHeaderDetails = () => {
    switch (pathname) {
      case "/dashboard":
        return {
          title: "Task Management Dashboard",
          icon: <IconGraph className="h-5 w-5 sm:h-6 sm:w-6" />,
        };
      case "/dashboard/finance":
        return {
          title: "Finance Management Dashboard",
          icon: <IconCoins className="h-5 w-5 sm:h-6 sm:w-6" />,
        };
      case "/dashboard/taxation":
        return {
          title: "Taxation Management Dashboard",
          icon: <IconScale className="h-5 w-5 sm:h-6 sm:w-6" />,
        };
      default:
        return {
          title: "Law Crew > By 1st Media Link",
          icon: <IconDashboard className="h-5 w-5 sm:h-6 sm:w-6" />,
        };
    }
  };

  const { title, icon } = getHeaderDetails();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-transparent px-4 py-2.5 backdrop-blur lg:px-6">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Section: Sidebar Toggle & Title */}
        <div className="flex items-center gap-3">
          <SheetSidebar />
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                src="/logo.png"
                alt="LawCrew Logo"
                width={40}
                height={40}
              />
              <h1 className="inline-flex items-center gap-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                LAWCREW
              </h1>
            </div>
          </Link>
        </div>

        {/* Search Bar (Hidden on Mobile) */}

        {/* Right Section: Notifications, Settings, Profile */}
        <div className="flex items-center">
          <div className="mx-4 hidden max-w-lg flex-1 md:block">
            <div className={`relative`}>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <Input
                type="search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm outline-none dark:bg-gray-800 dark:text-secondary"
                placeholder="Search..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>
          <HeaderSettings />
        </div>
      </div>
      {/* Mobile Search - Visible on small screens */}
      <div className="mt-2 md:hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};

export default Appheader;
