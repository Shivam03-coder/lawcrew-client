import { TaskStatus } from "@/types/global";
import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { ListChecks, Clock, CheckCircle, Plus } from "lucide-react"; // Import icons

interface KanbanColumnHeaderProps {
  board: TaskStatus;
  taskCount: number;
}

const statusStyles: Record<TaskStatus, string> = {
  [TaskStatus.ToDo]: "bg-blue-100 text-blue-700",
  [TaskStatus.OnGoing]: "bg-yellow-100 text-yellow-700",
  [TaskStatus.Completed]: "bg-green-100 text-green-700",
};

const statusIcons: Record<TaskStatus, JSX.Element> = {
  [TaskStatus.ToDo]: <ListChecks className="h-5 w-5 text-blue-600" />,
  [TaskStatus.OnGoing]: <Clock className="h-5 w-5 text-yellow-600" />,
  [TaskStatus.Completed]: <CheckCircle className="h-5 w-5 text-green-600" />,
};

const KanbanColumnHeader: FC<KanbanColumnHeaderProps> = ({
  board,
  taskCount,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg p-3 shadow-md",
        statusStyles[board],
      )}
    >
      <div className="flex items-center space-x-2">{statusIcons[board]}</div>
      <h3 className="text-lg font-medium capitalize">{board}</h3>
      <div className="flex items-center gap-2 lg:gap-4">
        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
          {taskCount} {taskCount === 1 ? "Task" : "Tasks"}
        </span>
        <Plus />
      </div>
    </div>
  );
};

export default KanbanColumnHeader;
