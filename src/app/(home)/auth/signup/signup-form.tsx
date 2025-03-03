import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, KeyRound, Mail, User } from "lucide-react";
import Link from "next/link";
import Oauth from "../oauth";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={cn(
        "flex h-full flex-col justify-center gap-6 rounded-br-xl rounded-tl-xl bg-white p-10 font-lexend dark:bg-gray-800 max-md:rounded-xl md:rounded-bl-[20%] md:rounded-tr-[20%]",
        className,
      )}
      {...props}
    >
      <div className="textDark flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold drop-shadow-lg">Create an Account</h1>
        <p className="text-sm opacity-90">Sign up to get started</p>
      </div>

      <div className="grid gap-6">
        {/* Name Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="name"
            className="textDark flex items-center gap-x-2 text-base"
          >
            <User /> Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="textDark rounded border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base dark:bg-gray-700"
          />
        </div>

        {/* Email Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="email"
            className="textDark flex items-center gap-x-2 text-base"
          >
            <Mail /> Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="textDark rounded border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base dark:bg-gray-700"
          />
        </div>

        {/* Password Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="password"
            className="textDark flex items-center gap-x-2 text-base"
          >
            <KeyRound /> Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="***********"
            className="textDark rounded border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base dark:bg-gray-700"
          />
        </div>

        {/* Signup Button */}
        <Button
          type="submit"
          className="w-full bg-gray-900 text-lg font-normal capitalize text-white"
        >
          Sign Up
        </Button>

        <Oauth />
      </div>

      {/* Already have an account */}
      <div className="textDark text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
