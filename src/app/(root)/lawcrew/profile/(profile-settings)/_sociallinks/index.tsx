import { SubNavigationTitlebar } from "@/components/naviagtion_bar";
import Sociallinkform from "./sociallinkform";

const SocialLinks = () => {
  return (
    <div className="w-full space-y-10 pb-14">
      <SubNavigationTitlebar title="Social Links" />
      <div className=" pl-6">
        <Sociallinkform />
      </div>
    </div>
  );
};

export default SocialLinks;
