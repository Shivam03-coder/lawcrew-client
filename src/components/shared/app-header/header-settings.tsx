"use client";
import ThemeToggle from "@/components/theme-toogle";
import { useClerk, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, Settings } from "lucide-react";
import { useDarkMode } from "usehooks-ts";
import UserProfile from "./user-profile";

const HeaderSettings = () => {
  const clerk = useClerk();
  return (
    <>
      {clerk.loaded && (
        <>
          <button className="rounded-lg p-2 text-gray-500 dark:text-secondary">
            <Bell size={20} />
          </button>
          <ThemeToggle />
          <button className="rounded-lg p-2 text-gray-500 dark:text-secondary">
            <Settings size={20} />
          </button>
          {/* User Profile */}
          <div className="ml-2 flex items-center">
            <UserProfile />
          </div>
        </>
      )}
    </>
  );
};

export default HeaderSettings;
