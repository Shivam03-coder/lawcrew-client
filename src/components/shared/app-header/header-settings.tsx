"use client";
import ThemeToggle from "@/components/dark-mode.toogle";
import { useClerk, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, Settings } from "lucide-react";
import { useDarkMode } from "usehooks-ts";

const HeaderSettings = () => {
  const clerk = useClerk();
  const { isDarkMode } = useDarkMode();
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
            <UserButton
              appearance={{
                baseTheme: isDarkMode ? dark : undefined,
                elements: {
                  avatarBox: "w-9 h-9 border", // This controls the avatar size
                  card: "bg-white dark:bg-gray-800 font-lexend w-full",
                  scrollBox: "bg-black",
                  navbar: {
                    "& > div:nth-child(1)": {
                      background: "black",
                    },
                  },
                },
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default HeaderSettings;
