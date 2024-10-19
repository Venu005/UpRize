"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="hidden font-extrabold text-2xl text-[#8C92E9] sm:inline-block px-6">
                Uprize.
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-md font-medium text-white/80 ">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="mr-2 md:hidden"
              >
                <Menu className="h-5 w-5  text-white" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center">
                <span className="font-bold text-[#8C92E9">Uprize.</span>
              </Link>
              <nav className="mt-4 flex flex-col space-y-2 ">
                <Link href="/about" className="block px-2 py-1 text-lg">
                  About
                </Link>
                <Link href="/pricing" className="block px-2 py-1 text-lg">
                  Pricing
                </Link>
                <Link href="/contact" className="block px-2 py-1 text-lg">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between p-6 space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2 md:hidden"
              >
                <span className="font-extrabold inline-block text-[#8C92E9]">
                  Uprize.
                </span>
              </Link>
            </div>
            <nav className="flex items-center">
              <Button variant={"secondary"} className="text-white" asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
