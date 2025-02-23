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

const PersonForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          className="font-inter text-xl"
          type="text"
          id="title"
          placeholder="Enter Title"
          required
        />
      </div>

      {/* First Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="firstName">First Name *</Label>
        <Input type="text" id="firstName" placeholder="Enter First Name" required />
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="lastName">Last Name *</Label>
        <Input type="text" id="lastName" placeholder="Enter Last Name" required />
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="category">Category *</Label>
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

      {/* Sub Category */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="subCategory">Sub Category *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--Choose--" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Job Title */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="jobTitle">Job Title *</Label>
        <Input type="text" id="jobTitle" placeholder="Enter Job Title" required />
      </div>

      {/* Website */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="website">Website</Label>
        <Input type="url" id="website" placeholder="Enter Website URL" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input type="email" id="email" placeholder="Enter Email Address" required />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input type="tel" id="phone" placeholder="Enter Phone Number" required />
      </div>

      {/* Address */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" placeholder="Enter Address" />
      </div>

      {/* City and State */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" placeholder="Enter City" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="state">State</Label>
          <Input type="text" id="state" placeholder="Enter State" />
        </div>
      </div>

      {/* Zip Code and Country */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input type="text" id="zipCode" placeholder="Enter Zip Code" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <Input type="text" id="country" placeholder="Enter Country" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />

      <h4 className="text-center uppercase">Personal Details</h4>

      {/* Middle Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="middleName">Middle Name *</Label>
        <Input type="text" id="middleName" placeholder="Enter Middle Name" required />
      </div>

      {/* Mother's Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="motherName">Mother's Name *</Label>
        <Input type="text" id="motherName" placeholder="Enter Mother's Name" required />
      </div>

      {/* Date of Birth and Additional ID */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="dob">Date of Birth *</Label>
          <Input type="date" id="dob" required />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="additionalId">Additional ID *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--Choose--" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="aadhaar">Aadhaar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ID Reference Number */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="idReference">ID Reference Number *</Label>
        <Input
          type="text"
          id="idReference"
          placeholder="Enter ID Reference Number"
          required
        />
      </div>

      {/* File Upload */}
      <div className="mx-auto my-3 w-full border-2 border-dashed border-black">
        <FileUpload />
      </div>
    </div>
  );
};

export default PersonForm;
