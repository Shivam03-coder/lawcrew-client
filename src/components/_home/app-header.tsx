"use client";

import * as React from "react";
import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppHeaderNavMenu from "@/nav-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-8">
        <div className="hidden flex-1 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="hidden font-bold text-primary sm:inline-block">
              LAW-WISE
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
              href="/sign-in"
              className="text-sm text-primary hover:text-primary"
            >
              <Button
                variant="outline"
                className="border-2 border-primary px-6 text-sm text-primary"
                size="sm"
              >
                LOGIN
              </Button>
            </Link>
            <Link
              href="/sign-up"
              className="text-sm text-primary hover:text-primary"
            >
              <Button
                variant="default"
                className="bg-primary px-6 text-sm text-white"
                size="sm"
              >
                SIGN-UP
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
