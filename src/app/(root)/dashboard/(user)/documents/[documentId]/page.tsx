import Editor from "@/lib/tip_tap/editor";
import ToolBar from "@/lib/tip_tap/toolbar";
import React from "react";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="bg-secondary">
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
