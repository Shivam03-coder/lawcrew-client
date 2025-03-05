import { SubNavigationTitlebar } from "@/components/naviagtion_bar";
import Profile from "./profile";
import Profileform from "./profileform";

const PersonalDetails = () => {
  return (
    <div className="w-full space-y-10 rounded-xl">
      <SubNavigationTitlebar title="Personal Information" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="col-span-1 justify-self-center md:col-span-2">
          <Profile />
        </div>
        <div className="col-span-1 md:col-span-3">
          <Profileform />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
