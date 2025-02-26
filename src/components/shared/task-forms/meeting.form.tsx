import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const MeetingForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="meeting-title">Title *</Label>
        <Input
          id="meeting-title"
          type="text"
          placeholder="Enter the Title of the Meeting"
          required
        />
      </div>

      {/* Date and Time Fields */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="from-date">From *</Label>
          <Input
            id="from-date"
            type="date"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="from-time">Time *</Label>
          <Input
            id="from-time"
            type="time"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="to-date">To *</Label>
          <Input
            id="to-date"
            type="date"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="to-time">Time *</Label>
          <Input
            id="to-time"
            type="time"
            required
          />
        </div>
      </div>

      {/* Related Matter */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="related-matter">Related Matter *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="matter1">Matter 1</SelectItem>
              <SelectItem value="matter2">Matter 2</SelectItem>
              <SelectItem value="matter3">Matter 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          placeholder="Write something about the meeting..."
          required
        />
      </div>

      {/* Meeting Type */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="meeting-type">Meeting Type *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="type1">Type 1</SelectItem>
              <SelectItem value="type2">Type 2</SelectItem>
              <SelectItem value="type3">Type 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MeetingForm