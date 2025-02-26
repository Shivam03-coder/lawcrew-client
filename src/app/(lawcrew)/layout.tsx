import DashboardHeader from "@/components/shared/app-sidebar/sheet-sidebar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}

export default RootLayout;
