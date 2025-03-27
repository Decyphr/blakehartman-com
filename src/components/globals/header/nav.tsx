"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import type { Header as HeaderType } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import { Logo } from "~/components/logo";
import { buttonVariants } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems ?? [];

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button type="button">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="px-0 py-6">
              <SheetTitle className="px-6 pb-4">
                <Link href="/">
                  <Logo className="w-[120px]" />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col divide-y divide-foreground">
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    key={i}
                    className="text-lg p-6 transition-colors hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background"
                    {...link}
                  />
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <nav className="flex items-center gap-5 max-md:hidden lg:gap-6">
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              className="text-sm/6 text-gray-950"
              {...link}
            />
          );
        })}
        <Link
          className={buttonVariants({ variant: "default", size: "sm", className: "sm:min-w-0" })}
          href="/contact"
        >
          Let's Get Started
        </Link>
      </nav>
    </div>
  );
};
