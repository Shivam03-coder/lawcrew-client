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

const CompanyForm = () => {
  return (
    <div className="flex flex-col gap-7 p-7">
      {/* Company Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          className="font-inter text-xl"
          type="text"
          id="name"
          placeholder="Company Name"
          required
        />
      </div>

      {/* Nick Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="nickName">Nick Name *</Label>
        <Input type="text" id="nickName" placeholder="Nick Name" required />
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="category">Category</Label>
        <Input type="text" id="category" placeholder="Category" />
      </div>

      {/* Website */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="website">Website</Label>
        <Input type="url" id="website" placeholder="Website URL" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input type="email" id="email" placeholder="Email" required />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input type="tel" id="phone" placeholder="Phone Number" required />
      </div>

      {/* Address */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" placeholder="Address" />
      </div>

      {/* City and State */}

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" placeholder="City" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="state">State</Label>
          <Input type="text" id="state" placeholder="State" />
        </div>
      </div>

      {/* Zip Code and Country */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input type="text" id="zipCode" placeholder="Zip Code" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <Input type="text" id="country" placeholder="Country" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 w-full border-t-2 border-dotted border-black opacity-75" />

      <h4 className="text-center uppercase">Company Details</h4>

      {/* Sub Category */}
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="subCategory">Sub Category *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--Choose--" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectGroup>
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Company Legal Type */}
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="companyLegalType">Company Legal Type *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--Choose--" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectGroup>
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Company Group */}
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="companyGroup">Company Group *</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="--Choose--" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectGroup>
              <SelectItem value="person">Person</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Nationality and Reference */}
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="nationality">Nationality *</Label>
          <Input
            type="text"
            id="nationality"
            placeholder="Nationality"
            required
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="reference">Reference *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="--Choose--" />
            </SelectTrigger>
            <SelectContent className="bg-secondary">
              <SelectGroup>
                <SelectItem value="person">Person</SelectItem>
                <SelectItem value="employee">Employee</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* File Upload */}
      <div className="mx-auto my-3 w-full border-2 border-dashed border-black">
        <FileUpload />
      </div>
    </div>
  );
};

export default CompanyForm;
