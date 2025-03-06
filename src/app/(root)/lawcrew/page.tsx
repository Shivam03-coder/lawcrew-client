import React from "react";
import LawCrewHeader from "./lawcrew-header";
import Main from "./main";

function LawcrewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-primary">
      <LawCrewHeader />
      <Main />
    </div>
  );
}

export default LawcrewPage;
