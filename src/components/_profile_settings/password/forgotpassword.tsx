import { ChevronLeft, ChevronRight, Eye, KeyRound } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; // Importing ShadCN's Input
import { Button } from "@/components/ui/button";

type ForgotpasswordProps = {
  setActiveComponent: (component: string) => void;
};

const Forgotpassword = ({ setActiveComponent }: ForgotpasswordProps) => {
  return (
    <form className="space-y-6">
      {/* New Password Field */}
      <div className="space-y-2">
        <Label htmlFor="current-password">New Password</Label>
        <div className="relative flex items-center">
          <KeyRound className="absolute left-3 h-6 w-6 text-primary" />
          <Input
            id="new-password"
            type="password"
            placeholder="************"
            className="pl-12 pr-10"
          />
          <Eye className="absolute right-3 h-6 w-6 cursor-pointer text-primary" />
        </div>
        <span className="relative float-right text-right text-sm text-main underline">
          Forgot Password?
        </span>
      </div>

      {/* Re-enter Password Field */}
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Re-enter New Password</Label>
        <div className="relative flex items-center">
          <KeyRound className="absolute left-3 h-6 w-6 text-primary" />
          <Input
            id="confirm-new-password"
            type="password"
            placeholder="************"
            className="pl-12 pr-10"
          />
          <Eye className="absolute right-3 h-6 w-6 cursor-pointer text-primary" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full items-center gap-2">
        <Button
          type="button"
          className="flex-1 border-black"
          variant={"outline"}
          onClick={() => setActiveComponent("Passwordchange")}
        >
          <ChevronLeft className="size-5" />
          <span className="text-sm font-medium">Back</span>
        </Button>
        <Button
          type="button"
          className="flex-1 text-secondary"
          onClick={() => setActiveComponent("Passwordchange")}
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </form>
  );
};

export default Forgotpassword;
