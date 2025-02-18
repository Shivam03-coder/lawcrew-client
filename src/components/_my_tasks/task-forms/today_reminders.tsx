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

const TodayRemindersTasks = () => {
  const [taskType, setTaskType] = useState("Accounting");
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ taskType, title, assignee, dueDate, reminder });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-4 w-auto bg-blue-300">
          <Plus size={20} />
          Create Reminders for Today
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-l-2xl overflow-y-scroll min-h-screen bg-white">
        <SheetHeader>
          <SheetTitle>Create a Reminder Task</SheetTitle>
          <SheetDescription>Enter task details and save it.</SheetDescription>
        </SheetHeader>
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          {/* Reminder Type */}
          <div>
            <Label>Reminder Type *</Label>
            <Input
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              placeholder="Start typing"
            />
          </div>

          {/* Reminder Date */}
          <div>
            <Label>Reminder on :</Label>
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

          <div>
            <Label>Repeat *</Label>
            <Select>
              <SelectTrigger defaultValue={"Daily"}>
                <SelectValue placeholder="Select Frequency" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Daily">Daily</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="2Months">2 Months</SelectItem>
                <SelectItem value="6Months">6 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Time *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="08:00">08:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="16:00">04:00 PM</SelectItem>
                <SelectItem value="20:00">08:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Requested By */}
          <div>
            <Label>Mail on *</Label>
            <Input className="border-black" placeholder="Start typing" />
          </div>

          <div>
            <Label>Summary *</Label>
            <Textarea
              className="border-black"
              placeholder="Enter  Summary"
              rows={5}
              required
            />
          </div>

          {/* Footer Buttons */}
          <SheetFooter className="flex justify-end space-x-2">
            <SheetClose asChild>
              <Button className="text-pretty bg-red-200 text-primary">
                Cancel
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                className="text-pretty bg-blue-200 text-primary"
                type="submit"
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

export default TodayRemindersTasks;
