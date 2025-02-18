"use client";

import { useState } from "react";
import Passwordtext from "./passwordtext";
import Passwordchange from "./passwordchangesection";
import Forgotpassword from "./forgotpassword";
import { SubNavigationTitlebar } from "@/components/naviagtion_bar";

const COMPONENTS_MAP: Record<string, React.ElementType> = {
  Passwordtext,
  Passwordchange,
  Forgotpassword,
};

const Password = () => {
  const [activeComponent, setActiveComponent] = useState("Passwordtext");

  const ActiveComponent = COMPONENTS_MAP[activeComponent] || Passwordtext;

  return (
    <div className="max-w-[30.5625rem] space-y-10 pb-14">
      <SubNavigationTitlebar
        title={
          activeComponent === "Forgotpassword" ? "Forgot Password" : "Password"
        }
      />
      {/* PASSWORD CHANGE TAB */}
      <section className="space-y-7 pl-8">
        <ActiveComponent setActiveComponent={setActiveComponent} />

        <div className="w-full font-inter text-sm font-normal text-[#d04545]">
          ***Note: In case of Google/Microsoft Authentication, you may or may
          not have the option of changing your password. You can’t show the
          current password.***
        </div>
      </section>
    </div>
  );
};

export default Password;
