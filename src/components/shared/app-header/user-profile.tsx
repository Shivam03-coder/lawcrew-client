"use client";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";
import { useDarkMode } from "usehooks-ts";

const UserProfile = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <UserButton
      appearance={{
        baseTheme: isDarkMode ? dark : undefined,
        elements: {
          avatarBox: "w-9 h-9 border",
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
  );
};

export default UserProfile;
