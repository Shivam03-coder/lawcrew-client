"use client";
import React from "react";
import { LoaderPinwheel, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const Router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-pink-100 opacity-20 blur-2xl" />
        <div className="absolute left-0 top-2/3 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-2xl" />
      </div>

      <section className="max-w-4xl">
        {/* Welcome Button */}
        <Button
          className="border border-white bg-blue-200 font-lexend text-sm shadow-none sm:text-base"
          aria-label="Welcome to Law-Wise"
        >
          Welcome Law-Crew
        </Button>

        {/* Heading */}
        <h1 className="relative mx-auto mt-6 font-lexend text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          A Satisfied Customer is
          <span className="mt-2 block bg-gradient-to-r from-blue-600 via-black to-blue-600 bg-clip-text pb-5 text-transparent">
            The Best Business Strategy.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl font-lexend text-lg text-gray-600">
          LAW-WISE empowers legal professionals with cutting-edge tools for
          efficient case management, secure document handling, and streamlined
          client communication. Simplify legal workflows, stay organized, and
          focus on what matters most—delivering justice with confidence.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/dashboard">
            <Button
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-black to-purple-300 px-8 py-4 font-semibold text-white transition-all hover:scale-105 sm:w-auto"
              size="lg"
              aria-label="Try for Free"
            >
              Try Free <LoaderPinwheel className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            onClick={() => Router.push("/user-dashboard")}
            variant="outline"
            size="lg"
            className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            aria-label="View Demo"
          >
            <PlayCircle className="mr-2 h-5 w-5" /> View Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
