import { SubNavigationTitlebar } from "@/components/_user/useprofile";
import Managenotificationfrom from "./_managenotification-sections/managenotificationfrom";

const Managenotification = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Manage Notifications" />
      <div className="max-w-[32.75rem] pl-6">
        <Managenotificationfrom />
      </div>
    </div>
  );
};

export default Managenotification;
