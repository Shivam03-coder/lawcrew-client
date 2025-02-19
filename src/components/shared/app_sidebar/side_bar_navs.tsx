import * as React from "react";
import {
  Home,
  ListChecks,
  Settings,
  Users,
  Briefcase,
  FileText,
  Wallet,
  Calendar,
  Link as LinkIcon,
  ChevronDown,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { AppUser } from "./app_user";
import { Logo } from "./sidebar_logo";
import { IconTax } from "@tabler/icons-react";

const mainNavData = [
  {
    title: "Main Navigation",
    items: [
      { title: "Home", url: "/dashboard", icon: <Home size={18} /> },
      {
        title: "My Task",
        url: "/dashboard/my-task",
        icon: <ListChecks size={18} />,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Settings size={18} />,
      },
      {
        title: "Members",
        url: "/dashboard/members",
        icon: <Users size={18} />,
      },
      {
        title: "Profile",
        url: "/dashboard/profile",
        icon: <User size={18} />,
      },
      {
        title: "Taxation",
        url: "/dashboard/taxation",
        icon: <IconTax size={18} />,
      },
    ],
  },
];

const collapsibleNavData = [
  {
    title: "Contacts",
    icon: <Users size={18} />,
    items: [
      { title: "Persons", url: "/dashboard/contacts/persons" },
      { title: "Companies", url: "/dashboard/contacts/companies" },
      { title: "Clients", url: "/dashboard/contacts/clients" },
    ],
  },
  {
    title: "Litigation Cases",
    icon: <Briefcase size={18} />,
    items: [
      { title: "Litigation Cases", url: "/dashboard/cases/litigation-cases" },
      { title: "Hearings", url: "/dashboard/cases/hearings" },
    ],
  },
  {
    title: "Corporate Matters",
    icon: <FileText size={18} />,
    items: [{ title: "Corporate Matters", url: "/dashboard/corporate-matter" }],
  },
];

const moreLinks = {
  title: "More",
  items: [
    {
      title: "My Expenses",
      url: "/dashboard/my-expenses",
      icon: <Wallet size={18} />,
    },
    {
      title: "I-Docs",
      url: "/dashboard/i-docs",
      icon: <FileText size={18} />,
    },
    {
      title: "My Reminders",
      url: "/dashboard/my-reminders",
      icon: <Calendar size={18} />,
    },
    {
      title: "Useful Links",
      url: "/dashboard/useful-links",
      icon: <LinkIcon size={18} />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-primary text-white">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {mainNavData.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center gap-2">
                        {item.icon} {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <div className="block md:hidden">
          {collapsibleNavData.map((group) => (
            <SidebarGroup key={group.title}>
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg p-2">
                  <span className="flex items-center gap-2">
                    {group.icon} {group.title}
                  </span>
                  <ChevronDown size={16} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {group.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link
                            href={subItem.url}
                            className="block px-4 py-2 text-sm text-white"
                          >
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          ))}

          <SidebarGroup>
            <SidebarGroupLabel>{moreLinks.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {moreLinks.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center gap-2">
                        {item.icon} {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
      <SidebarRail />
      <AppUser />
    </Sidebar>
  );
}

export default AppSidebar;
