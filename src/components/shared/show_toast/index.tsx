import { toast } from "@/hooks/use-toast";

type ToastType = "success" | "error" | "warning" | "info";

const toastStyles: Record<ToastType, string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

interface ToastProps {
  title: string;
  description?: string;
  type?: ToastType;
}

export const showToast = ({
  title,
  description,
  type = "info",
}: ToastProps) => {
  toast({
    title,
    description,
    className: `shadow-lg rounded-md border-none px-4 py-2 ${toastStyles[type]}`,
  });
};
