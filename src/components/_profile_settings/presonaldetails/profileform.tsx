import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Profileform = () => {
  return (
    <form className="flex max-w-sm flex-col gap-6 p-4">
      {/* Display Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="displayName"
          className="text-base font-medium text-primary"
        >
          Display Name
        </label>
        <Input
          id="displayName"
          className="rounded border border-[#b0bac3] bg-white px-3 py-2"
          placeholder="Julie Sand"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-primary">
          Email
        </label>
        <Input
          id="email"
          className="rounded border border-[#b0bac3] bg-white px-3 py-2"
          placeholder="JulieSand@workemail.com"
        />
      </div>

      {/* Pronouns */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="pronouns"
          className="text-base font-medium text-primary"
        >
          Pronouns
        </label>
        <Select>
          <SelectTrigger className="h-12 w-full rounded border border-[#b0bac3] bg-white px-3 py-2">
            <SelectValue placeholder="Select Pronouns" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            <SelectItem value="she-her">She/Her</SelectItem>
            <SelectItem value="he-him">He/Him</SelectItem>
            <SelectItem value="they-them">They/Them</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Country/Location */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="location"
          className="text-base font-medium text-primary"
        >
          Country/Location
        </label>
        <Select>
          <SelectTrigger className="h-12 w-full rounded border border-[#b0bac3] bg-white px-3 py-2">
            <SelectValue placeholder="Select Country/Location" />
          </SelectTrigger>
          <SelectContent className="bg-secondary">
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* About */}
      <div className="flex flex-col gap-2">
        <label htmlFor="about" className="text-base font-medium text-primary">
          About
        </label>
        <Textarea
          id="about"
          className="rounded border border-[#b0bac3] bg-white px-3 py-2"
          rows={5}
          placeholder="hi, I'm a product designer and manager..."
        />
      </div>

      <Button className="text-secondary">SAVE</Button>
    </form>
  );
};

export default Profileform;
