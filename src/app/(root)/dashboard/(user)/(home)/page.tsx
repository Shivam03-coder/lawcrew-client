import PageHaeder from "@/components/dashboard_home/page_header";
import RemainingTask from "@/components/dashboard_home/reamaining_task";
import TabList from "@/components/dashboard_home/tab_list";
import TaskManagementChart from "@/components/dashboard_home/task_management_chart";
import TimerTracker from "@/components/dashboard_home/time_tracker";
import WeeklyTaskStats from "@/components/dashboard_home/weekly_task_stats";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="page min-h-screen bg-white">
      <div className="flex flex-1 flex-col gap-4 p-4">
        <PageHaeder />
        <div className="m-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <WeeklyTaskStats />
          <TaskManagementChart />
          <RemainingTask />
          <TimerTracker />
          <TabList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
