import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, KeyRound, Mail, User } from "lucide-react";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
    className={cn(
      "flex h-full flex-col justify-center  font-lexend gap-6 rounded-bl-[20%] rounded-br-xl rounded-tl-xl rounded-tr-[20%] bg-white p-10",
      className,
    )}
    {...props}
  >
      <div className="flex flex-col items-center gap-2 text-center text-gray-900">
        <h1 className="text-3xl font-bold drop-shadow-lg">Create an Account</h1>
        <p className="text-sm opacity-90">Sign up to get started</p>
      </div>

      <div className="grid gap-6">
        {/* Name Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="name"
            className="flex items-center gap-x-2 text-base text-gray-900"
          >
            <User /> Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="rounded-2xl border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base"
          />
        </div>

        {/* Email Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="email"
            className="flex items-center gap-x-2 text-base text-gray-900"
          >
            <Mail /> Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="rounded-2xl border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base"
          />
        </div>

        {/* Password Field */}
        <div className="grid gap-2">
          <Label
            htmlFor="password"
            className="flex items-center gap-x-2 text-base text-gray-900"
          >
            <KeyRound /> Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="***********"
            className="rounded-2xl border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base"
          />
        </div>

        {/* Signup Button */}
        <Button
          type="submit"
          className="w-full bg-gray-900 text-lg font-bold capitalize text-white"
        >
          Sign Up
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm text-gray-900 after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-white/50">
          <span className="relative z-10 px-2 font-semibold">
            Or sign up with
          </span>
        </div>

        {/* GitHub Signup */}
        <button className="w-full center rounded-xl border-white bg-blue-100 p-2 text-gray-900">
          <Github className="mr-2 h-5 w-5" /> Sign up with GitHub
        </button>
      </div>

      {/* Already have an account */}
      <div className="text-center text-sm text-gray-900">
        Already have an account?{" "}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Login
        </Link>
      </div>
    </form>
  );
}