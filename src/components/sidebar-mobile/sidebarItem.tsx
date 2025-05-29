import Link from "next/link";

export interface SidebarItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

function SidebarItem({ href, onClick, children }: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-4"
    >
      {children}
    </Link>
  );
}

export { SidebarItem };
