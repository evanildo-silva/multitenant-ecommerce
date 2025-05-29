"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { NAVBAR_ITEMS } from "@/app/(home)/constants";
import { NavbarItem } from "./navbarItem";
import { Button } from "../ui/button";
import { Sidebar } from "../sidebar-mobile";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className="flex justify-between items-center h-20 border-b bg-white font-medium">
      <Link href="/" className="pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <div className="hidden lg:flex items-center gap-4 pr-6">
        {NAVBAR_ITEMS.map(({ href, children }) => (
          <NavbarItem key={href} href={href} isActive={href === currentPath}>
            {children}
          </NavbarItem>
        ))}
      </div>

      <Sidebar
        items={NAVBAR_ITEMS}
        onOpenChange={setIsSidebarOpen}
        open={isSidebarOpen}
      />

      <div className="hidden lg:flex h-full">
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>
    </nav>
  );
}

export { Navbar };
