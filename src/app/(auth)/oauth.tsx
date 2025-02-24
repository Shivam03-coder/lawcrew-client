import Image from "next/image";
import React from "react";

const Oauth = () => {
  return (
    <button className="center w-full space-x-2 rounded-xl border-white bg-blue-100 p-2 text-gray-900">
      <Image src="/google.png" alt="GitHub Logo" width={24} height={24} />
      <h5>LOG IN WITH GOOGLE</h5>
    </button>
  );
};

export default Oauth;
