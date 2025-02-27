"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "usehooks-ts";
import useMount from "@/hooks/use-mount";

const ThemeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const Mounted = useMount();
  if (!Mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="rounded-full p-2 transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
