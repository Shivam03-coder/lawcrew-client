import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash } from "lucide-react";

const SocialLinkForm = () => {
  return (
    <div className="w-full space-y-7 bg-white">
      {/* Social Link Rows */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-center gap-7">
          {/* Link Name Input */}
          <div className="flex w-1/3 flex-col gap-1">
            <label className="text-base font-normal text-[#00172f]">
              Link Name
            </label>
            <Input
              className="rounded border border-[#00172f] bg-white px-3 py-2.5"
              placeholder="LinkedIn"
            />
          </div>

          {/* Link Input & Remove Button */}
          <div className="flex w-1/3 items-center gap-3">
            <div className="flex w-full flex-col gap-1">
              <label className="text-base font-normal text-[#00172f]">
                Link
              </label>
              <Input
                className="rounded border border-[#00172f] bg-white px-3 py-2.5"
                placeholder="Enter your link"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add Link Button */}
      <Button className="text-secondary">
        Add Link
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialLinkForm;
