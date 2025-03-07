import { UserButton } from "@clerk/nextjs";
import React from "react";

const Userprofile = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonBox: "w-12 h-12",
        },
      }}
    />
  );
};

export default Userprofile;
