import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Timezoneform = () => {
  return (
    <form className="max-w-[30rem] space-y-7 pb-10">
      {/* Select Time Format */}
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <Label>Select Time Format</Label>
        <Select>
          <SelectTrigger className="w-full rounded border border-[#b0bac3] bg-white shadow">
            <SelectValue placeholder="Select Time Format" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="12-hour">12-Hour</SelectItem>
            <SelectItem value="24-hour">24-Hour</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Time Zone */}
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <Label>Time Zone</Label>
        <Select>
          <SelectTrigger className="w-full rounded border border-[#b0bac3] bg-white shadow">
            <SelectValue placeholder="Select Time Zone" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Select Date Format */}
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <Label>Select Date Format</Label>

        <Select>
          <SelectTrigger className="w-full rounded border border-[#b0bac3] bg-white shadow">
            <SelectValue placeholder="Select Date Format" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
            <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
            <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Switch*/}
      <div className="inline-flex h-[63px] flex-col items-start justify-start gap-1">
        <div className="inline-flex items-start justify-start gap-1">
          <div className="font-inter text-base font-normal text-primary">
            Enable Weekend
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-1 self-stretch">
          <div className="shrink grow basis-0 font-inter text-sm font-medium leading-tight text-primary">
            Select days when you consider as your weekend, Selected days will be
            considered as your weekend in every Week
          </div>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>
    </form>
  );
};

export default Timezoneform;
