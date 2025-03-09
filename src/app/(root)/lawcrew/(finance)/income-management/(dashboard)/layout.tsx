import React, { Suspense } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Suspense>{children}</Suspense>
    </main>
  );
};

export default DashboardLayout;
