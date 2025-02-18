import { FileUpload } from "@/components/file-upload";
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

const CorporateForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Name Section */}
      <div className="flex flex-col gap-2">
        {/* Label for Name */}
        <Label htmlFor="name">Name *</Label>
        {/* Input for Name */}
        <Input
          className="font-inter text-xl"
          type="text"
          id="name"
          placeholder="Enter Name"
          required
        />
      </div>

      {/* Practice Area Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="practice-area">Practice Area *</Label>
        <Input
          type="text"
          id="practice-area"
          placeholder="Enter Practice Area"
          required
        />
      </div>

      {/* Arrival Date Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="arrival-date">Arrival Date *</Label>
        <Input
          type="date"
          id="arrival-date"
          required
        />
      </div>

      {/* Client Name Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="client-name">Client Name *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--Choose--" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          placeholder="Enter Description"
          required
        />
      </div>

      {/* Internal Reference Number Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="ref-number">Internal Ref Number *</Label>
        <Input
          type="text"
          id="ref-number"
          placeholder="Enter Internal Ref Number"
          required
        />
      </div>

      {/* File Upload Section */}
      <div className="mx-auto my-3 w-full border-2 border-dashed border-black">
        <FileUpload />
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />
      <h4 className="text-center uppercase">Stage</h4>

      {/* Stage Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="filed-on">Filed On *</Label>
          <Input type="date" id="filed-on" required />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="due-date">Due Date *</Label>
          <Input type="date" id="due-date" required />
        </div>
      </div>

      {/* Stage Section Continued */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="closed-on">Closed On *</Label>
          <Input type="date" id="closed-on" required />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="estimated-efforts">Estimated Efforts *</Label>
          <Input type="number" id="estimated-efforts" required />
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />
      <h4 className="text-center uppercase">People</h4>

      {/* People Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="referred-by">Referred By *</Label>
          <Input
            type="text"
            id="referred-by"
            placeholder="Enter Referred By"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="requested-by">Requested By *</Label>
          <Input
            type="text"
            id="requested-by"
            placeholder="Enter Requested By"
          />
        </div>
      </div>

      {/* People Section Continued */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="assigned-team">Assigned Team *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--Choose--" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="team1">Team 1</SelectItem>
                <SelectItem value="team2">Team 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="assignee">Assignee *</Label>
          <Input type="text" id="assignee" placeholder="Enter Assignee" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />
      <h4 className="text-center uppercase">Matter Rate</h4>

      {/* Matter Rate Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="entity-name">Entity Name *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--Choose--" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="entity1">Entity 1</SelectItem>
                <SelectItem value="entity2">Entity 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="rate">Rate *</Label>
          <Input type="text" id="rate" placeholder="Enter Rate" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />
      <h4 className="text-center uppercase">Billing Preferences</h4>

      {/* Billing Preferences Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="hourly-rate">Hourly Rate *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--Choose--" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="rate1">Rate 1</SelectItem>
                <SelectItem value="rate2">Rate 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CorporateForm;
