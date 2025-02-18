import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
type PasswordtextProps = {
  setActiveComponent: (component: string) => void;
};

const Passwordtext = ({ setActiveComponent }: PasswordtextProps) => {
  return (
    <div className="space-y-7">
      
      <div className="font-inter text-lg font-normal text-primary">
        You can change or reset your password to make your account more secure
      </div>
      <Button
        type="button"
        className="w-full text-secondary"
        onClick={() => setActiveComponent("Passwordchange")}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="text-center font-inter text-[0.875rem] font-medium leading-tight">
            Next
          </div>
          <div className="relative h-[1.25rem] w-[1.25rem]">
            <ChevronRight className="size-5" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Passwordtext;
