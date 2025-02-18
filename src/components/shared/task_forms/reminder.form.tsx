import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ReminderForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Reminder Title */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="reminder-title">Reminder Title *</Label>
        <Input
          id="reminder-title"
          type="text"
          placeholder="Enter the Title of the Meeting"
          required
        />
      </div>

      {/* Reminder Date and Time */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="reminder-date">Reminder On *</Label>
          <Input
            id="reminder-date"
            type="date"
            required
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="reminder-time">Time *</Label>
          <Input
            id="reminder-time"
            type="time"
            required
          />
        </div>
      </div>

      {/* Repeat Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="repeat">Repeat *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Recipients Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="recipients">Recipients *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="recipient1">Recipient 1</SelectItem>
              <SelectItem value="recipient2">Recipient 2</SelectItem>
              <SelectItem value="recipient3">Recipient 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="summary">Summary *</Label>
        <Textarea
          id="summary"
          placeholder="Write something about the reminder..."
          required
        />
      </div>
    </div>
  );
};

export default ReminderForm;
