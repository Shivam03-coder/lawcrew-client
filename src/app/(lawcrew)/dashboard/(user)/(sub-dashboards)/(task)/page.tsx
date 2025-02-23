import { TaskManagementChart, WeeklyTaskStats } from "./task-graph-stats";
import { RemainingTask, TimerTracker } from "./task-tracker";
import TaskView from "./task-view";
import Taskheader from "./task-header";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Taskheader />
      <div className="flex flex-1 flex-col gap-4 p-4">
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
