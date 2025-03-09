import Appheader from "@/components/shared/app-header";
import React from "react";

const FinanceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Appheader />
      {children}
    </main>
  );
};

export default FinanceLayout;
