"use client";

import { Button } from "@/components/ui/button";
import { LoaderPinwheel, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const Router = useRouter();
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-9.5rem)] flex-col gap-8 px-4 lg:flex-row lg:items-center">
      {/* Welcome Section */}
      <section className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-8">
        {/* Welcome Button */}
        <Button
          className="max-w-max border border-white bg-blue-200 font-lexend text-sm shadow-none sm:text-base"
          aria-label="Welcome to Law-Wise"
        >
          Welcome Law-Wise
        </Button>

        {/* Heading */}
        <h1 className="font-inter text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-4xl">
          A Satisfied Customer is
          <br className="hidden sm:block" />
          The Best Business
          <br className="hidden sm:block" />
          Strategy.
        </h1>

        {/* Description */}
        <p className="max-w-prose text-base opacity-60 sm:text-lg">
          LAW-WISE empowers legal professionals with cutting-edge tools for
          efficient case management, secure document handling, and streamlined
          client communication. Simplify legal workflows, stay organized, and
          focus on what matters most—delivering justice with confidence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Button
            className="w-full bg-primary text-secondary sm:w-auto"
            size="lg"
            aria-label="Try for Free"
          >
            Try Free <LoaderPinwheel className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={() => Router.push("/user-dashboard")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            aria-label="View Demo"
          >
            <PlayCircle className="mr-2 h-5 w-5" /> View Demo
          </Button>
        </div>
      </section>

      {/* Graph Section */}
      <section className="relative w-full lg:w-[50%]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={"/medialinklogo.png"}
            alt="Graph showcasing customer satisfaction"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
