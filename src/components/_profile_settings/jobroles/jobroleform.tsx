import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Jobroleform = () => {
  return (
    <form className="w-3/4 space-y-7 bg-white px-2 py-3">
      {/* Job Role */}
      <div className="space-y-1">
        <label className="text-base font-normal text-primary">Job Role</label>
        <Input
          className="rounded border border-black bg-white px-3 py-2.5"
          placeholder="Enter your job role"
        />
      </div>

      {/* Department */}
      <div className="space-y-1">
        <label className="text-base font-normal text-primary">Department</label>
        <Select>
          <SelectTrigger className="w-full rounded border border-black bg-white px-3 py-2.5 shadow">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hr">HR & Recruiting</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Industry */}
      <div className="space-y-1">
        <label className="text-base font-normal text-primary">Industry</label>
        <Select>
          <SelectTrigger className="w-full rounded border border-black bg-white px-3 py-2.5 shadow">
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consumer-services">Consumer Services</SelectItem>
            <SelectItem value="tech">Tech</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button size={"lg"} className="text-secondary w-full">SAVE</Button>
    </form>
  );
};

export default Jobroleform;
