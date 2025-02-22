import React from "react";

const TaskdashboardHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-8">
        <h1 className="text-xl font-bold">Task Management Dashboard</h1>

        <h4 className="text-lg text-gray-600">{currentDate}</h4>
      </div>
    </div>
  );
};

export default TaskdashboardHeader;
