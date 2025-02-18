"use client";
import { CalendarDays, ClipboardList, Bell, Briefcase } from "lucide-react";
import TaskCards from "@/components/_my_tasks/task_cards";
import TodayTasks from "@/components/_my_tasks/task-forms/today_task";
import TodayRemindersTasks from "@/components/_my_tasks/task-forms/today_reminders";
import TodayMeetingsTask from "@/components/_my_tasks/task-forms/today_meetings";

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

      {/* Litigation & Corporate Matters */}
      <div className="col-span-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Litigation Cases */}
        <TaskCards
          title="My Litigation Cases per Workflow Status"
          count={0}
          icon={<ClipboardList size={60} className="text-gray-400" />}
          message="Let’s fill this list with Litigation Cases!"
          onButtonClick={() => console.log("Create Litigation Case Clicked")}
        />

        {/* Corporate Matters */}
        <TaskCards
          title="My Corporate Matters per Workflow Status"
          count={0}
          icon={<Briefcase size={60} className="text-gray-400" />}
          message="Let’s fill this list with Corporate Matters!"
          onButtonClick={() => console.log("Create Corporate Matter Clicked")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
