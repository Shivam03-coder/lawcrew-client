import AppSidebar from "@/components/shared/app-sidebar/side-bar-navs";
import AppSidebarHeader from "@/components/shared/app-sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-auto">
        <AppSidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default RootLayout;
