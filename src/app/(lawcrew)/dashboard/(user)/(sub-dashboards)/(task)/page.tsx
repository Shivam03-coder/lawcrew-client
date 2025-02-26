import { TaskManagementChart, WeeklyTaskStats } from "./task-graph-stats";
import { RemainingTask, TimerTracker } from "./task-tracker";
import TaskView from "./task-view";

const DashboardPage = () => {
  return (
    <div className="min-h-screen py-6 bg-gray-50">
     <div className="mx-auto p-3 w-[98%]">
        <div className="m-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <WeeklyTaskStats />
          <TaskManagementChart />
          <RemainingTask />
          <TimerTracker />
          <TaskView />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
