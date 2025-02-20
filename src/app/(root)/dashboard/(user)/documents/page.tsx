import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DocPage = () => {
  return (
    <div>
      <Link href={"/dashboard/documents/1234567"}>
        <Button>GO</Button>
      </Link>
    </div>
  );
};

export default DocPage;
