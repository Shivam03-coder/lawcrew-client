"use client";

import StoreProvider from "@/store";
import { Toaster } from "@/components/ui/toaster";
import { useDarkMode } from "usehooks-ts";
import { useEffect } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-primary-600 flex min-h-screen w-full">
      <main className="dark:bg-dark-primary flex w-full flex-col">
        {children}
      </main>
    </div>
  );
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <StoreProvider>
      <Toaster />
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppProvider;
