import { SubNavigationTitlebar } from "@/components/naviagtion_bar";
import Timezoneform from "./timezoneform";

const Timezones = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Time Zones & Other Formats" />
      <div className="max-w-[32.75rem] pl-6">
        <Timezoneform />
      </div>
    </div>
  );
};

export default Timezones;
