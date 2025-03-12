import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
const FormField = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium">{label}</Label>
    <div className="relative">
      {children}
      {error && (
        <div className="absolute right-0 top-1/2 mr-3 -translate-y-1/2">
          <AlertCircle className="h-4 w-4 text-red-400" />
        </div>
      )}
    </div>
    {error && (
      <p className="flex items-center gap-1.5 text-[13px] text-red-400">
        {error}
      </p>
    )}
  </div>
);

export default FormField;
