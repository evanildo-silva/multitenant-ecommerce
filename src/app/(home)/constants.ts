import { ReactNode } from "react";

export interface NavbarLink {
  href: string;
  label: ReactNode;
}

export const NAVBAR_ITEMS: NavbarLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];
