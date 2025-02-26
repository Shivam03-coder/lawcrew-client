"use client";

import { usePathname } from "next/navigation";
import {
  IconGraph,
  IconCoins,
  IconScale,
  IconDashboard,
} from "@tabler/icons-react";
import React from "react";

const TaskHeader = () => {
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

  // Format Current Date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-wrap items-center justify-between py-3 ">
      {/* Dynamic Title & Icon */}
      <h1 className="flex items-center gap-2 font-lexend text-lg font-normal sm:text-xl md:text-2xl">
        {title} {icon}
      </h1>
    </div>
  );
};

export default TaskHeader;
