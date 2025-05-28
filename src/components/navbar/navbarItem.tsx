"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface NavbarItemProps {
  href: string;
  children: ReactNode;
  isActive: boolean;
}

export const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent border-transparent hover:border-primary",
        "rounded-full px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href} className="flex items-center">
        {children}
      </Link>
    </Button>
  );
};
