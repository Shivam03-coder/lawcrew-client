import Appheader from "@/components/shared/app-header";
import React from "react";

const FinanceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-secondary dark:bg-primary">
      <Appheader />
      {children}
    </main>
  );
};

export default FinanceLayout;
