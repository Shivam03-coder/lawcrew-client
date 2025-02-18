import { SubNavigationTitlebar } from "@/components/naviagtion_bar";
import Jobroleform from "./jobroleform";

const JobRoleSkills = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Job Role & Skills" />
      <div className="pl-6 max-w-[39.75rem]">
       <Jobroleform/>
      </div>
    </div>
  );
};

export default JobRoleSkills;
