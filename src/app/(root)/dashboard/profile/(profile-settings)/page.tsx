"use client";
import { useState } from "react";

import { Subnavigations, Titlebar } from "@/components/naviagtion_bar";
import PersonalDetails from "@/components/_profile_settings/presonaldetails";
import Password from "@/components/_profile_settings/password";
import JobRoleSkills from "@/components/_profile_settings/jobroles";
import Timezones from "@/components/_profile_settings/timezones";
import SocialLinks from "@/components/_profile_settings/sociallinks";

const Userprofilepage = () => {
  const [isActiveSegment, setisActiveSegment] =
    useState<string>("Personal Details");
  return (
    <div className="page">
      <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Subnavigations
            isActiveSegment={isActiveSegment}
            setisActiveSegment={setisActiveSegment}
            Subnavs={profileSettingsubnavs}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="h-auto">
            {isActiveSegment === "Personal Details" && <PersonalDetails />}
            {isActiveSegment === "Password" && <Password />}
            {isActiveSegment === "Job Role & Skills" && <JobRoleSkills />}
            {isActiveSegment === "Social links" && <SocialLinks />}
            {isActiveSegment === "Time Zones & Other Form" && <Timezones />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofilepage;

const profileSettingsubnavs: string[] = [
  "Personal Details",
  "Password",
  "Job Role & Skills",
  "Social links",
  "Time Zones & Other Form",
];
