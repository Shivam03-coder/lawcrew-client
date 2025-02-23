"use client";
import { CalendarDays, ClipboardList, Bell, Briefcase } from "lucide-react";
import TodayTasks from "@/app/(lawcrew)/dashboard/(user)/my-task/today_task";
import TodayRemindersTasks from "@/app/(lawcrew)/dashboard/(user)/my-task/today_reminders";
import TodayMeetingsTask from "@/app/(lawcrew)/dashboard/(user)/my-task/today_meetings";
import MyTaskStats from "./my-task-stats";
import { TaskStatusChart, TotaltaskChart } from "./task-completion-stats";
import TaskCards from "./today-task-cards";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {/* Tasks for Today */}
      <TaskCards
        title="My Tasks for Today"
        count={0}
        icon={<ClipboardList size={60} className="text-gray-400" />}
        message="No tasks assigned for today"
        taskSheet={<TodayTasks />}
        onButtonClick={() => console.log("Create Task Clicked")}
      />

      {/* Meetings for Today */}
      <TaskCards
        title="My Meetings for Today"
        count={0}
        icon={<CalendarDays size={60} className="text-gray-400" />}
        message="No meetings scheduled for today"
        onButtonClick={() => console.log("Schedule Meeting Clicked")}
        taskSheet={<TodayMeetingsTask />}
      />

      {/* Reminders for Today */}
      <TaskCards
        title="My Reminders for Today"
        count={0}
        icon={<Bell size={60} className="text-gray-400" />}
        message="No reminders set for today"
        taskSheet={<TodayRemindersTasks />}
        onButtonClick={() => console.log("Set Reminder Clicked")}
      />
      <div className="col-span-full grid grid-cols-2 gap-5">
        <MyTaskStats title="Tasks Assigned to Me by Status" />
        <MyTaskStats title="Tasks Requested by Me by Status" />
        <TotaltaskChart />
        <TaskStatusChart />
      </div>
    </div>
  );
};

export default Dashboard;
