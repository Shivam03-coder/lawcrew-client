import { Upload, ScanLine, FileText, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { useAppToasts } from "@/hooks/use-app-toast";
import { useScanReceiptMutation } from "@/store/api-endpoints/income-api";

function ScanReceipt() {
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
      const response = await UploadReceipt(formData);
      console.log("🚀 ~ handleScan ~ response:", response);
    } catch (error) {}
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <Card className="w-full max-w-2xl space-y-6 p-8">
      <div className="relative flex items-center justify-center">
        {/* Inner content box */}
        <div
          className={`relative z-10 w-full space-y-4 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
            file ? "bg-muted/50" : "hover:bg-muted/50"
          }`}
        >
          {!file ? (
            <>
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-medium">Upload your receipt</p>
                <p className="text-muted-foreground text-sm">
                  Click the button below to browse files
                </p>
              </div>
              <Input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                id="file-upload"
              />
              <Button asChild variant="secondary">
                <label htmlFor="file-upload" className="cursor-pointer">
                  Browse Files
                </label>
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <span className="font-medium">{file.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  className="ml-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <Button onClick={handleScan} className="gap-2 bg-blue-400 text-white">
                <ScanLine className="h-4 w-4" />
                Scan Receipt
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="text-muted-foreground text-center text-sm">
        Supported formats: JPG, PNG, PDF
      </div>
    </Card>
  );
}

export default ScanReceipt;
