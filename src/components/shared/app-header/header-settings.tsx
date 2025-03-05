import ThemeToggle from "@/components/dark-mode.toogle";
import { Bell, Settings } from "lucide-react";

const HeaderSettings = () => {
  return (
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
        <button className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
          />
        </button>
      </div>
    </>
  );
};

export default HeaderSettings;
