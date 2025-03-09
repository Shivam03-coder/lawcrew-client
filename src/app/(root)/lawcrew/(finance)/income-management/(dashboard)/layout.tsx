import React from "react";
import BudgetProgerss from "./budget-progress";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <BudgetProgerss />
      {children}
    </main>
  );
};

export default DashboardLayout;
