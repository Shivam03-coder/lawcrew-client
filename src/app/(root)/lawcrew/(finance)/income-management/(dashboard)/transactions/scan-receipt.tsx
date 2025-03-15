import { Upload, ScanLine, FileText, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppToasts } from "@/hooks/use-app-toast";
import { useScanReceiptMutation } from "@/store/api-endpoints/income-api";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { TransactionForm } from "@/types/finance.types";
interface ScanReceiptProps {
  setValue: UseFormSetValue<TransactionForm>;
}

function ScanReceipt({ setValue }: ScanReceiptProps) {
  const [file, setFile] = useState<File | null>(null);
  const { ErrorToast, SuccessToast } = useAppToasts();

  const [UploadReceipt, { isLoading }] = useScanReceiptMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (
      selectedFile &&
      (selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/png" ||
        selectedFile.type === "application/pdf")
    ) {
      setFile(selectedFile);
    } else {
      ErrorToast({
        title: "Invalid file type",
      });
    }
  };

  const handleScan = async () => {
    if (!file) {
      ErrorToast({
        title: "No file selected",
      });
      return;
    }

    const formData = new FormData();
    formData.append("receipt", file);
    try {
      const response = await UploadReceipt(formData).unwrap();
      if (response.status === "success" && response.result) {
        SuccessToast({
          title: "Receipt successfully Scaned",
        });
        setValue("amount", response.result.amount.toString());
        setValue("date", new Date(response.result.date));
        if (response.result.description) {
          setValue("description", response.result.description.toString());
        }
        if (response.result.category) {
          setValue("category", response.result.category.toString());
        }
        setFile(null);
      }
    } catch (error) {
      ErrorToast({
        title: "Failed to scan receipt",
      });
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="w-full bg-white border-none dark:bg-gray-700 space-y-3">
      <div className="relative flex items-center justify-center">
        <div
          className={`relative z-10 w-full space-y-3 rounded-md p-4 text-center transition-colors ${
            file ? "bg-muted/50" : "hover:bg-muted/50"
          }`}
        >
          {!file ? (
            <>
              <div className="space-y-1 text-center">
                <p className="text-sm font-medium textDark">AI Receipt Scanner</p>
                <p className="textDark text-xs">
                  Upload your receipt and let our AI extract all the important
                  details for you.
                </p>
              </div>

              <Input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden textDark"
                id="file-upload"
              />
              <Button
                asChild
                className="rounded-xl bg-blue-400"
                variant="secondary"
                size="sm"
              >
                <label htmlFor="file-upload" className="cursor-pointer text-xs">
                  <Upload /> Upload receipt
                </label>
              </Button>
            </>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="max-w-[150px] truncate text-sm font-medium">
                  {file.name}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  className="ml-1 h-6 w-6"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>

              <Button
                onClick={handleScan}
                className="h-8 gap-1 bg-blue-400 px-3 text-xs text-white"
                size="sm"
                disabled={isLoading}
              >
                <ScanLine className="h-3 w-3" />
                Scan
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ScanReceipt;
