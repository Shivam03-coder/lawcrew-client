import { Link } from "lucide-react";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col bg-white gap-4 p-6 md:p-10">
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-blue-300 text-primary font-bold gap-x-1 flex p-4 rounded-xl border-white"
          >
            <Link className="size-6 text-primary" />
            1ST MEDIA LINK
          </a>
        </div>
        <div className="rou flex flex-1 items-center justify-center">
          <div className="w-full max-w-[95%] md:max-w-[90%]">{children}</div>
        </div>
      </div>
      <div className="relative hidden bg-blue-100 lg:block">
        <img
          src="/medialinklogo.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
