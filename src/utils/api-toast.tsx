"use client";

import { useToast } from "@/hooks/use-toast";

interface ToastProps {
  title: string;
  description?: string;
}

export const useAppToasts = () => {
  const { toast } = useToast();

  const SuccessToast = ({ title, description }: ToastProps) => {
    toast({
      title: title || "",
      description: description || "",
      className: "bg-green-300 text-black",
    });
  };

  const ErrorToast = ({ title, description }: ToastProps) => {
    toast({
      title: title || "",
      description: description || "",
      className: "bg-red-300 text-black",
    });
  };

  return { SuccessToast, ErrorToast };
};
