"use client";

import React from "react";
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
import { CalendarIcon, Plus } from "lucide-react";
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

const TodayMeetingsTask = () => {
  return (
    <Sheet >
      {/* Button to trigger modal */}
      <SheetTrigger asChild>
        <Button className="mt-4 w-auto bg-blue-300">
          <Plus size={20} />
          Create Meetings for Today
        </Button>
      </SheetTrigger>

      {/* Modal Content */}
      <SheetContent className="h-screen overflow-y-scroll rounded-l-2xl bg-white">
        <SheetHeader>
          <SheetTitle>Create a Reminder Task</SheetTitle>
          <SheetDescription>Enter task details and save it.</SheetDescription>
        </SheetHeader>

        {/* FORM UI */}
        <form className="space-y-4 p-4">
          {/* Title */}
          <div>
            <Label>Title *</Label>
            <Input placeholder="Title" />
          </div>

          {/* Start Date */}
          <div>
            <Label>Start Date :</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex w-full justify-between">
                  Select a Date
                  <CalendarIcon className="ml-2 h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date */}
          <div>
            <Label>End Date :</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex w-full justify-between">
                  Select a Date
                  <CalendarIcon className="ml-2 h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>

          {/* Related Matter */}
          <div>
            <Label>Related Matter *</Label>
            <Input placeholder="Related Matter" />
          </div>

          {/* Priority Selection */}
          <div>
            <Label>Priority *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div>
            <Label>Location *</Label>
            <Input placeholder="Location" />
          </div>

          {/* Description */}
          <div>
            <Label>Description *</Label>
            <Textarea className="border-black" placeholder="Enter Description" rows={5} />
          </div>

          {/* Footer Buttons */}
          <SheetFooter className="flex justify-end space-x-2">
            <SheetClose asChild>
              <Button className="text-pretty bg-red-200 text-primary">Cancel</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="text-pretty bg-blue-200 text-primary" type="button">
                Save Task
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default TodayMeetingsTask;
