import { IconGraph } from "@tabler/icons-react";
import React from "react";

const Taskheader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-b card shadow-sm">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <h1 className="flex items-center gap-2 text-lg font-normal sm:text-xl md:text-2xl font-lexend">
          Task Management Dashboard <IconGraph className="h-5 w-5 sm:h-6 sm:w-6" />
        </h1>
        <h4 className="text-sm text-gray-600 sm:text-base md:text-lg">{currentDate}</h4>
      </div>
    </div>
  );
};

export default Taskheader;
