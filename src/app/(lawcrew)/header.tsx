"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconCoins, IconDashboard, IconGraph, IconScale } from "@tabler/icons-react";
import { Bell, Search, Settings } from "lucide-react";
import SheetSidebar from "../../components/shared/app-sidebar/sheet-sidebar";

const DashboardHeader = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();

  const getHeaderDetails = () => {
    switch (pathname) {
      case "/dashboard":
        return {
          title: "Task Management Dashboard",
          icon: <IconGraph className="h-5 w-5 sm:h-6 sm:w-6" />,
        };
      case "/dashboard/finnance":
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
    <header className="border-b border-gray-200 bg-white px-4 py-2.5 lg:px-6">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Section: Sidebar Toggle & Title */}
        <div className="flex items-center gap-3">
          <SheetSidebar />
          <h1 className="flex items-center gap-2 font-lexend text-lg font-normal sm:text-xl md:text-2xl">
            {title} {icon}
          </h1>
        </div>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="mx-4 hidden max-w-lg flex-1 md:block">
          <div
            className={`relative ${isSearchFocused ? "ring-2 ring-blue-500" : ""}`}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:outline-none"
              placeholder="Search..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Section: Notifications, Settings, Profile */}
        <div className="flex items-center">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <Settings size={20} />
          </button>

          {/* User Profile */}
          <div className="ml-2 flex items-center">
            <button className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </button>
          </div>
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

export default DashboardHeader;
