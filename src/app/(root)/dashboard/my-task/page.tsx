"use client";
import { CalendarDays, ClipboardList, Bell, Briefcase } from "lucide-react";
import TaskCards from "@/components/_my_tasks/task_cards";
import TodayTasks from "@/components/_my_tasks/task-forms/today_task";
import TodayRemindersTasks from "@/components/_my_tasks/task-forms/today_reminders";
import TodayMeetingsTask from "@/components/_my_tasks/task-forms/today_meetings";
import TaskPieChart from "@/components/_my_tasks/task_pie_chart";
import TotaltaskChart from "@/components/_my_tasks/total_task_chart";
import TaskStatusChart from "@/components/_my_tasks/task_status_chart";

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
        <TaskPieChart title="Tasks Assigned to Me by Status" />
        <TaskPieChart title="Tasks Requested by Me by Status" />
        <TotaltaskChart />
        <TaskStatusChart />
      </div>
    </div>
  );
};

export default Dashboard;
