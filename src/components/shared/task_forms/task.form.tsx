import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/file-upload";

const TaskForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Task Title */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="task-title">Task Title *</Label>
        <Input
          id="task-title"
          type="text"
          placeholder="Enter the title of the task"
          required
        />
      </div>

      {/* Task Type */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="task-type">Task Type *</Label>
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

      {/* Assign To */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="assign-to">Assign To *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="person1">Person 1</SelectItem>
              <SelectItem value="person2">Person 2</SelectItem>
              <SelectItem value="person3">Person 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Due Date */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="due-date">Due Date *</Label>
        <Input id="due-date" type="date" required />
      </div>

      {/* Matter/Contract Relation */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="matter-contract">Matter/Contract Related With *</Label>
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
          placeholder="Write something about the task..."
          required
          rows={6}
        />
      </div>

      {/* File Upload Section */}
      <div className="mx-auto my-3 w-full border-2 border-dashed border-black">
        <FileUpload title="Upload Related Document" />
      </div>
    </div>
  );
};

export default TaskForm;
