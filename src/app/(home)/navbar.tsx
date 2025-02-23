"use client";

import * as React from "react";
import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppHeaderNavMenu from "@/components/nav_menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto mt-5 w-[90%] rounded-full bg-blue-100 p-3 font-lexend backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-8">
        <div className="flex-2 hidden md:flex">
          <Link
            href="/"
            className="mr-6 flex w-auto items-center space-x-2 bg-primary rounded-md p-2 text-secondary"
          >
            <Bot className="h-6 w-6" />
            <span className="hidden text-xl font-bold sm:inline-block">
              LAW-CREW
            </span>
          </Link>
          <AppHeaderNavMenu />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
          aria-label="Main menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Logo */}
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="font-bold">LAW-WISE</span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/login"
              className="text-sm text-primary hover:text-primary"
            >
              <Button
                className="border-2 border-primary bg-primary px-6 text-sm text-secondary"
                size="lg"
              >
                LOGIN
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
