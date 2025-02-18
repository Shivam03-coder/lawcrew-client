import { Bird } from "lucide-react";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center gap-2 p-2 text-primary">
              <Bird className="h-8 w-8 text-primary" />
              BLUE BIRD
            </div>
          </a>
        </div>
        <div className="rou flex flex-1 items-center justify-center">
          <div className="w-full max-w-[95%] md:max-w-[75%]">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/blue-bird.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
