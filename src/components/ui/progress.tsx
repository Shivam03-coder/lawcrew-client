"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, ...props }, ref) => {
  
  // Determine color based on value
  let indicatorColor = "bg-blue-600"; // default
  
  if (Number(value) > 80) {
    indicatorColor = "bg-red-600";
  } else if (Number(value) > 60) {
    indicatorColor = "bg-yellow-400";
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-slate-300",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full transition-all duration-300", // common styles
          indicatorColor // dynamic color
        )}
        style={{ width: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
