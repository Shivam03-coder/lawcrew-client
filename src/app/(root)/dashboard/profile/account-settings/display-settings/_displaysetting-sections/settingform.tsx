import { InputLabel } from "@/components/shared/inputlabel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Colorpicker from "./colorpicker";

const Settingform = () => {
  return (
    <form className="flex flex-col space-y-7 p-4">
      {/* Display Theme */}
      <div className="flex flex-col gap-2">
        <InputLabel name="Select Display Theme" />
        <Select>
          <SelectTrigger className="h-12 w-full rounded border border-[#b0bac3] bg-white px-3 py-2">
            <SelectValue placeholder="Default (Manage IQ)" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            <SelectItem value="she-her">She/Her</SelectItem>
            <SelectItem value="he-him">He/Him</SelectItem>
            <SelectItem value="they-them">They/Them</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Advanced Customisations */}
      <div className="flex flex-col gap-2">
        <InputLabel name="Advanced Customisations" />
        <p className="font-inter text-xs font-medium text-primary">
          Customise your Fileds with your desired colors
        </p>
        <div className="flex space-x-6">
          <Select>
            <SelectTrigger className="h-12 w-full rounded border border-[#b0bac3] bg-white px-3 py-2">
              <SelectValue placeholder="Select Customisation Fields" />
            </SelectTrigger>
            <SelectContent className="bg-secondary">
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
              <SelectItem value="she-her">She/Her</SelectItem>
              <SelectItem value="he-him">He/Him</SelectItem>
              <SelectItem value="they-them">They/Them</SelectItem>
            </SelectContent>
          </Select>
          <Colorpicker />
        </div>
      </div>
      {/* Pop-up Notification Settings */}
      <section className="mt-[4.625rem] flex flex-col space-y-7">
        <div className="flex flex-col gap-2">
          <InputLabel name="Pop-up Notification Settings" />
          <p className="font-inter text-xs font-medium text-primary">
            all notifications will be shown at a time by this setting
          </p>
          <Select>
            <SelectTrigger className="h-12 w-full rounded border border-[#b0bac3] bg-white px-3 py-2">
              <SelectValue placeholder="Select Customisation Fields" />
            </SelectTrigger>
            <SelectContent className="bg-secondary">
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
              <SelectItem value="she-her">She/Her</SelectItem>
              <SelectItem value="he-him">He/Him</SelectItem>
              <SelectItem value="they-them">They/Them</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Checkbox */}
        <div className="flex flex-col gap-2">
          <InputLabel name="Advance Options" />
          {/* Enable compact mode */}
          <div className="flex items-center space-x-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-inter font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enable compact mode
            </label>
          </div>
          {/* color blind */}
          <div className="flex items-center space-x-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-inter font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enable color blind friendly mode (protanopia and deuteranopia)
            </label>
          </div>
          {/* Show occasional celebrations */}
          <div className="flex items-center space-x-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-inter font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show occasional celebrations
            </label>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Settingform;
