import React from "react";

const PageHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between rounded-lg bg-secondary px-6 py-4 md:px-12">
      {/* Date & Greeting */}
      <div className="space-y-1">
        <h4 className="text-sm text-gray-600">{currentDate}</h4>
        <h2 className="bg-clip-text text-lg font-semibold text-primary md:text-2xl">
          Hello, Shivam Anand
        </h2>
      </div>

      {/* User Profile Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-medium text-white shadow-lg md:h-16 md:w-16">
        SA
      </div>
    </header>
  );
};

export default PageHeader;
