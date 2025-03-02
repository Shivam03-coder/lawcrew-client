import React from "react";
import Editor from "@/lib/tip_tap/editor";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="bg-secondary dark:bg-primary">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
