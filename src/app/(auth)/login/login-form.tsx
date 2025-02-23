import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, GitMerge, KeyRound, Mail } from "lucide-react";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={cn(
        "flex h-full flex-col justify-center gap-6 rounded-bl-[20%] rounded-br-xl rounded-tl-xl rounded-tr-[20%] bg-white p-10 font-lexend",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center text-gray-900">
        <h1 className="text-3xl font-bold drop-shadow-lg">Welcome Back!</h1>
        <p className="text-sm opacity-90">
          Enter your credentials to access your account
        </p>
      </div>
      <div className="grid gap-6">
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
        <div className="mt-6 grid gap-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="flex items-center gap-x-2 text-base text-gray-900"
            >
              <KeyRound /> Password
            </Label>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="***********"
            className="rounded-2xl border-2 border-none bg-blue-100 p-5 text-lg shadow-none outline-none placeholder:text-base"
          />
          <a
            href="#"
            className="text-right text-sm text-gray-900 underline-offset-4 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <Button
          type="submit"
          className="w-full bg-gray-900 text-lg font-bold capitalize text-white"
        >
          Login
        </Button>
        <div className="relative text-center text-sm text-gray-900 after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-white/50">
          <span className="relative z-10 px-2 font-semibold">
            Or continue with
          </span>
        </div>
        <button className="center w-full rounded-xl border-white bg-blue-100 p-2 text-gray-900">
          <Github className="mr-2 h-5 w-5" /> Login with GitHub
        </button>
      </div>
      <div className="text-center text-sm text-gray-900">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="underline underline-offset-4 hover:text-gray-200"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
