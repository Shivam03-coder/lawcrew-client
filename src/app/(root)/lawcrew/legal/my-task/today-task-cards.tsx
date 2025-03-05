import { Card, CardContent } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  message: string;
  taskSheet?: React.ReactNode;
  onButtonClick: () => void;
}

const TaskCards: React.FC<DashboardCardProps> = ({
  title,
  count,
  icon,
  message,
  taskSheet,
  onButtonClick,
}) => {
  return (
    <Card className="col-span-1 card">
      <div className="flex justify-between p-3">
        <h6 className="rounded-md bg-secondary p-1">{title}</h6>
        <span className="rounded-3xl bg-primary px-2 py-1 text-sm text-white">
          {count}
        </span>
      </div>
      <CardContent className="flex flex-col items-center text-center">
        {icon}
        <p className="text-gray-500">{message}</p>
        {taskSheet}
      </CardContent>
    </Card>
  );
};

export default TaskCards;
