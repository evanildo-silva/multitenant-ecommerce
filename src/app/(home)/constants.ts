import { ReactNode } from "react";

export interface NavbarLink {
  href: string;
  children: ReactNode;
}

export const NAVBAR_ITEMS: NavbarLink[] = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
