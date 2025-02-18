"use client";
import { cn } from "@/lib/utils";
import { TaskStatus } from "@/types/global";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface EventcardProps {
  id: string;
  category: string;
  priority: string;
  status: TaskStatus;
  title: string;
  end: Date;
  start: Date;
}

const statusColor: Record<TaskStatus, string> = {
  [TaskStatus.ToDo]:
    "text-blue-700 bg-blue-100 border border-blue-500 px-2 py-1 rounded-md font-medium",
  [TaskStatus.OnGoing]:
    "text-yellow-700 bg-yellow-100 border border-yellow-500 px-2 py-1 rounded-md font-medium",
  [TaskStatus.Completed]:
    "text-green-700 bg-green-100 border border-green-500 px-2 py-1 rounded-md font-medium",
};

const CalandarEventCard: FC<EventcardProps> = ({ title, status }) => {
  const route = useRouter();
  const onclick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };
  return (
    <div className="px-2">
      <div
        className={cn(
          "text-pretty rounded-md bg-white p-1.5 text-xs text-primary",
          statusColor[status],
        )}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CalandarEventCard;
