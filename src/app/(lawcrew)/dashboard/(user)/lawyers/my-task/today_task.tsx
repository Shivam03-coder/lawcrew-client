"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppDispatch } from "@/store";
import { useMediaQuery } from "usehooks-ts";

const TodayTasks = () => {
  const [taskType, setTaskType] = useState("Accounting");
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ taskType, title, assignee, dueDate, reminder });
  };
  const isMobile = useMediaQuery("(min-width: 868px)");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-4 w-auto bg-blue-300">
          <Plus size={20} />
          Create Today Tasks
        </Button>
      </SheetTrigger>

      <SheetContent
        side={`${isMobile ? "right" : "bottom"}`}
        className={`overflow-scroll bg-white ${isMobile ? "h-full rounded-l-2xl" : "h-[80%] rounded-t-xl"}`}
      >
        <SheetHeader>
          <SheetTitle>Create a New Task</SheetTitle>
          <SheetDescription>Enter task details and save it.</SheetDescription>
        </SheetHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          {/* Task Type */}
          <div>
            <Label>Task Type *</Label>
            <Select value={taskType} onValueChange={setTaskType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Accounting">Accounting</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Task Title */}
          <div>
            <Label>Task Title *</Label>
            <Textarea
              className="border-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title"
              rows={6}
              required
            />
          </div>

          {/* Assignee */}
          <div>
            <Label>Assignee *</Label>
            <Input
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Start typing"
              required
            />
            <Button
              variant="link"
              className="text-sm text-blue-500"
              type="button"
              onClick={() => setAssignee("Shivam Anand")}
            >
              Assign to me
            </Button>
          </div>

          {/* Due Date */}
          <div>
            <Label>Due Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex w-full justify-between"
                >
                  {dueDate ? format(dueDate, "PPP") : "Select a Date"}
                  <CalendarIcon className="ml-2 h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white">
                <Calendar
                  mode="single"
                  selected={dueDate}
                  onSelect={setDueDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Reminder Toggle */}
          <div className="flex items-center justify-between">
            <Label>Reminder</Label>
            <Switch checked={reminder} onCheckedChange={setReminder} />
          </div>

          {/* Requested By */}
          <div>
            <Label>Requested by *</Label>
            <Input value="Shivam Anand" disabled />
          </div>

          {/* Footer Buttons */}
          <SheetFooter className="flex flex-col justify-end gap-2 sm:flex-row sm:space-x-2">
            <SheetClose asChild>
              <Button
                type="button"
                className="w-full bg-red-200 text-primary sm:w-auto"
              >
                Cancel
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                type="submit"
                className="w-full bg-blue-200 text-primary sm:w-auto"
              >
                Save Task
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default TodayTasks;
