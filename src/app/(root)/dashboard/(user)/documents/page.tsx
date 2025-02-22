import TemplateGallery from "@/components/_documents/template_gallery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const DocPage = () => {
  return (
    <div className="page">
      {/* Sercahbar */}
      <Input
        className="max-w-[340px] rounded-2xl bg-secondary p-4"
        placeholder="Search Template"
      />
      <div className="mt-16">

      <TemplateGallery />
      </div>
    </div>
  );
};

export default DocPage;
