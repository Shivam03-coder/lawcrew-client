"use client";
import { LucideIcon, Undo2 } from "lucide-react";
import { cn } from "../utils";

interface ToolBarButtonProps {
  onClick?: () => void;
  Icon: LucideIcon;
  isActive?: boolean;
}

const ToolBarButton = ({ Icon, isActive, onClick }: ToolBarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-7 rounded px-2 text-sm hover:bg-neutral-100",
        isActive && "bg-blue-300",
      )}
    >
      <Icon />
    </button>
  );
};

const ToolBar = () => {
  const sections: {
    label: string;
    Icon: LucideIcon;
    isActive?: boolean;
    onClick?: () => void;
  }[][] = [
    [
      {
        label: "File",
        Icon: Undo2, // Fixed import issue
        isActive: true,
        onClick: () => console.log("Shiva Anand"),
      },
    ],
  ];

  return (
    <div className="flex min-h-[2.8rem] items-center bg-white px-3.5 py-0.5">
      {sections[0]?.map((item) => <ToolBarButton key={item.label} {...item} />)}
    </div>
  );
};

export default ToolBar;
