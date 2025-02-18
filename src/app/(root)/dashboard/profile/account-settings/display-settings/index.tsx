import { SubNavigationTitlebar } from "@/components/_user/useprofile";
import Settingform from "./_displaysetting-sections/settingform";

const Displaysettings = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Display Settings" />
      <div className="max-w-[32.75rem] pl-6">
        <Settingform />
      </div>
    </div>
  );
};

export default Displaysettings;
