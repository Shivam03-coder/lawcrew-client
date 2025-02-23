import { IconGraph } from "@tabler/icons-react";
import React from "react";

const DashboardHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-8">
        <h1 className="font-lexend text-2xl flex items-center gap-3  font-normal">
          Task Management Dashboard <IconGraph />
        </h1>
        <h4 className="text-lg text-gray-600">{currentDate}</h4>
      </div>
    </div>
  );
};

export default DashboardHeader;
