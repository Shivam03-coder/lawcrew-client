import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Eye, KeyRound } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface PasswordchangeProps {
  setActiveComponent: (component: string) => void;
}

const Passwordchange: FC<PasswordchangeProps> = ({ setActiveComponent }) => {
  return (
    <form className="space-y-8">
      {/* Current Password */}
      <div className="space-y-2">
        <Label htmlFor="current-password">Current Password</Label>
        <div className="relative flex items-center">
          <KeyRound className="absolute left-3 h-6 w-6 text-primary" />
          <Input
            id="current-password"
            type="password"
            placeholder="************"
            className="pl-12 pr-10"
          />
          <Eye className="absolute right-3 h-6 w-6 cursor-pointer text-primary" />
        </div>
        <button
          type="button"
          className="w-full text-right text-primary underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* New Password */}
      <div className="space-y-2">
        <Label htmlFor="new-password">New Password</Label>
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
      </div>

      {/* Re-enter New Password */}
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Re-enter New Password</Label>
        <div className="relative flex items-center">
          <KeyRound className="absolute left-3 h-6 w-6 text-primary" />
          <Input
            id="confirm-password"
            type="password"
            placeholder="************"
            className="pl-12 pr-10"
          />
          <Eye className="absolute right-3 h-6 w-6 cursor-pointer text-primary" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full gap-2">
        <Button
          type="button"
          className="flex-1 border-black"
          variant={"outline"}
          onClick={() => setActiveComponent("Passwordtext")}
        >
          <ChevronLeft className="size-5" />
          <span>Back</span>
        </Button>

        <Button
          type="button"
          className="flex-1 text-secondary"
          onClick={() => setActiveComponent("Forgotpassword")}
          >
          <span>Next</span>
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </form>
  );
};

export default Passwordchange;
