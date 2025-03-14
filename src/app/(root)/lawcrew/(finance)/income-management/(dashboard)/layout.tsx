import React, { ReactElement } from "react";

const DashboardLayout = ({
  children,
  budgetprogress,
}: {
  children: React.ReactNode;
  budgetprogress: ReactElement;
}) => {
  return (
    <main>
      {budgetprogress}
      {children}
    </main>
  );
};

export default DashboardLayout;
