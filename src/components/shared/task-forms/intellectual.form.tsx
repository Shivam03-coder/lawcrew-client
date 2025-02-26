import { FileUpload } from "@/components/file_upload";
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

const IntellectualForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* File Upload */}
      <div className="mx-auto my-3 w-full border-2 border-dashed border-black">
        <FileUpload title="Upload Logo" />
      </div>

      {/* Intellectual Property Rights */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="ip-rights">Intellectual Property Rights *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rights1">Right 1</SelectItem>
              <SelectItem value="rights2">Right 2</SelectItem>
              <SelectItem value="rights3">Right 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* IP Class */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="ip-class">IP Class *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="class1">Class 1</SelectItem>
              <SelectItem value="class2">Class 2</SelectItem>
              <SelectItem value="class3">Class 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* IP Subcategory */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="ip-subcategory">IP Subcategory</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="subcategory1">Subcategory 1</SelectItem>
              <SelectItem value="subcategory2">Subcategory 2</SelectItem>
              <SelectItem value="subcategory3">Subcategory 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* IP Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="ip-name">IP Name *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="name1">Name 1</SelectItem>
              <SelectItem value="name2">Name 2</SelectItem>
              <SelectItem value="name3">Name 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Subject Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" type="text" placeholder="Enter Name" required />
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">IP Description *</Label>
        <Textarea id="description" placeholder="Enter Description" required rows={5} />
      </div>

      {/* Client/Owner Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-[2] flex-col gap-2">
          <Label htmlFor="client-owner">Client/Owner *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--- Choose ---" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="client1">Client 1</SelectItem>
                <SelectItem value="client2">Client 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-[3] flex-col gap-2">
          <Label htmlFor="owner-name">Client/Owner Name *</Label>
          <Input id="owner-name" type="text" placeholder="Enter Name" />
        </div>
      </div>

      {/* Applicants Type */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-[2] flex-col gap-2">
          <Label htmlFor="applicant-type">Applicants Type *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--- Choose ---" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="type1">Type 1</SelectItem>
                <SelectItem value="type2">Type 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-[3] flex-col gap-2">
          <Label htmlFor="applicant-name">Applicant Name *</Label>
          <Input id="applicant-name" type="text" placeholder="Enter Name" />
        </div>
      </div>

      {/* Agent Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-[2] flex-col gap-2">
          <Label htmlFor="agent-type">Agent Type *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--- Choose ---" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="agent1">Agent 1</SelectItem>
                <SelectItem value="agent2">Agent 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-[3] flex-col gap-2">
          <Label htmlFor="agent-name">Agent Name *</Label>
          <Input id="agent-name" type="text" placeholder="Enter Name" />
        </div>
      </div>

      {/* Location Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="country">Country *</Label>
          <Input id="country" type="text" placeholder="Enter Country" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="city">City *</Label>
          <Input id="city" type="text" placeholder="Enter City" />
        </div>
      </div>

      {/* Assigned Team */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="assign-team">Assign Team *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="team1">Team 1</SelectItem>
              <SelectItem value="team2">Team 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Assignee Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="assignee">Assignee *</Label>
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

      {/* Filing Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="filed-on">Filed On *</Label>
          <Input type="date" id="filed-on" required />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="filing-number">Filing Number *</Label>
          <Input type="text" id="filing-number" required />
        </div>
      </div>

      {/* Registration Section */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="registration-filed-on">Filed On *</Label>
          <Input type="date" id="registration-filed-on" required />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="registration-ref">Registration Ref *</Label>
          <Input type="text" id="registration-ref" required />
        </div>
      </div>

      {/* Matter Container Section */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="matter-container">Matter Container *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--- Choose ---" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="container1">Matter Container 1</SelectItem>
              <SelectItem value="container2">Matter Container 2</SelectItem>
              <SelectItem value="container3">Matter Container 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default IntellectualForm;
