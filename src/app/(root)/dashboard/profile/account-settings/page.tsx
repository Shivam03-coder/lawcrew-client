"use client";

import { useState } from "react";
import Displaysettings from "./display-settings";
import Paymentandsubscription from "./payments&subscription";
import Managenotification from "./manage-notification";
import Accountmanagement from "./account-management";
import { Subnavigations, Titlebar } from "@/components/_user/useprofile";

const Userprofilepage = () => {
  const [isActiveSegment, setisActiveSegment] = useState<string>(
    "Manage Notifications",
  );
  return (
    <div className="page">
      <Titlebar title="Account Settings" />
      <div className="grid gap-2 pl-2 lg:w-10/12 xl:grid-cols-3 xl:gap-0 xl:pl-[4.0625rem]">
        <Subnavigations
          isActiveSegment={isActiveSegment}
          setisActiveSegment={setisActiveSegment}
          Subnavs={profileSettingsubnavs}
        />
        <div className="min-h-max min-w-[18.5625rem] max-w-max flex-1 overflow-y-auto xl:col-span-2 xl:min-w-[36.5625rem] xl:pl-20">
          {isActiveSegment === "Display Settings" && <Displaysettings />}
          {isActiveSegment === "Payments & Subscriptions" && (
            <Paymentandsubscription />
          )}
          {isActiveSegment === "Manage Notifications" && <Managenotification />}
          {isActiveSegment === "Account Management" && <Accountmanagement />}
        </div>
      </div>
    </div>
  );
};

export default Userprofilepage;

const profileSettingsubnavs: string[] = [
  "Display Settings",
  "Payments & Subscriptions",
  "Manage Notifications",
  "Account Management",
];
