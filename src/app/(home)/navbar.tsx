"use client";

import Link from "next/link";
import {
  Bot,
  Home,
  Info,
  Briefcase,
  Newspaper,
  Mail,
  Scale,
  Grip,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AppHeaderNavMenu from "@/components/nav_menu";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useMount from "@/hooks/use-mount";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/dark-mode.toogle";

const Navbar = () => {
  const isMobile = useMediaQuery("(min-width: 968px)");
  const [open, setOpen] = useState<boolean>(false);
  const mount = useMount();
  if (!mount) return null;
  return (
    <header className="sticky top-0 z-50 mx-auto bg-blue-100 p-3 font-lexend backdrop-blur sm:mt-5 sm:w-[90%] sm:rounded-full">
      <div className="flex h-14 w-full items-center justify-between px-2 sm:px-8">
        <div className="flex-2 hidden md:flex">
          <Link
            href="/"
            className="mr-6 flex w-auto items-center space-x-2 rounded-full border border-black p-2 px-3 text-primary"
          >
            <Scale className="h-6 w-6" />
            <span className="hidden text-xl font-bold sm:inline-block">
              LAW-CREW
            </span>
          </Link>
          {isMobile && <AppHeaderNavMenu />}
        </div>

        {/* Mobile Menu Button */}
        <MobileNavigation open={open} setOpen={setOpen} />

        {/* Mobile Logo */}
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-6 w-6" />
            <span className="font-lexend text-2xl font-bold">LAW-CREW</span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-sm text-primary hover:text-primary"
            >
              <Button
                className="rounded-full border-2 border-primary bg-primary px-6 text-sm text-secondary"
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

interface MobileNavigationProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileNavigation = ({ open, setOpen }: MobileNavigationProps) => {
  const Navs = [
    { label: "Home", icon: Home, link: "/" },
    { label: "About Us", icon: Info, link: "/about" },
    { label: "Services", icon: Briefcase, link: "/services" },
    { label: "Blogs", icon: Newspaper, link: "/blogs" },
    { label: "Contact Us", icon: Mail, link: "/contact" },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
          aria-label="Main menu"
          onClick={() => setOpen(!open)}
        >
          <Grip size={33} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="card w-[300px] p-2 font-lexend" align="start">
        <nav className="flex flex-col gap-4">
          {Navs.map((item, index) => (
            <div key={item.link}>
              <Link
                href={item.link}
                className="flex w-full items-center gap-x-3 px-4 py-2 text-primary hover:text-primary"
              >
                <item.icon className="h-5 w-5 text-primary" /> {item.label}
              </Link>
              {index < Navs.length - 1 && <Separator className="bg-primary" />}
            </div>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
};
