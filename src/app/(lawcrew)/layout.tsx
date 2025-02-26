import DashboardHeader from "./header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}

export default RootLayout;
