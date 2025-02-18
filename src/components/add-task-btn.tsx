"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toggleform } from "@/store/states/form";
import { useAppDispatch } from "@/store";
import {
  Briefcase,
  User,
  Building,
  FileText,
  Calendar,
  Lightbulb,
  List,
  Users,
  Bell,
} from "lucide-react";

function AddTaskBtn() {
  const dispatch = useAppDispatch();

  // Manage the selected value for the dropdown
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    dispatch(toggleform(`${value}form`));
    setSelectedValue("");
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="flex max-w-max items-center rounded-md border-none bg-primary px-2 py-1 text-secondary">
        <Plus />
      </SelectTrigger>
      <SelectContent className="border bg-secondary">
        <SelectGroup>
          <SelectLabel>Task Forms</SelectLabel>
          <SelectItem value="company">
            <Briefcase className="mr-2 inline-block" />
            Company
          </SelectItem>
          <SelectItem value="person">
            <User className="mr-2 inline-block" />
            Person
          </SelectItem>
          <SelectItem value="corporate">
            <Building className="mr-2 inline-block" />
            Corporate Matter
          </SelectItem>
          <SelectItem value="litigation">
            <FileText className="mr-2 inline-block" />
            Litigation Case
          </SelectItem>
          <SelectItem value="hearing">
            <Calendar className="mr-2 inline-block" />
            Hearing
          </SelectItem>
          <SelectItem value="intellectual">
            <Lightbulb className="mr-2 inline-block" />
            Intellectual Property
          </SelectItem>
          <SelectItem value="task">
            <List className="mr-2 inline-block" />
            Task
          </SelectItem>
          <SelectItem value="meeting">
            <Users className="mr-2 inline-block" />
            Meeting
          </SelectItem>
          <SelectItem value="reminder">
            <Bell className="mr-2 inline-block" />
            Reminder
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AddTaskBtn;
