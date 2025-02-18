import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HearingForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter Name"
          required
          className="font-inter text-lg"
        />
      </div>

      {/* Hearing Type Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="hearing-type">Hearing Type *</Label>
        <Input
          id="hearing-type"
          type="text"
          placeholder="Enter Hearing Type"
          required
        />
      </div>

      {/* Hearing Date and Time Fields */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="hearing-date">Hearing Date *</Label>
          <Input
            id="hearing-date"
            type="date"
            required
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="hearing-time">Time *</Label>
          <Input
            id="hearing-time"
            type="time"
            required
          />
        </div>
      </div>

      {/* Assignee(s) Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="assignees">Assignee(s) *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="assignee1">Assignee 1</SelectItem>
              <SelectItem value="assignee2">Assignee 2</SelectItem>
              <SelectItem value="assignee3">Assignee 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Time Spent Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="time-spent">Time Spent *</Label>
        <Input
          id="time-spent"
          type="text"
          placeholder="Enter Time Spent"
          required
        />
      </div>
    </div>
  );
};

export default HearingForm;
