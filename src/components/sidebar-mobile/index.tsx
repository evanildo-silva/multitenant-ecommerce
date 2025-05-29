import { NAVBAR_ITEMS } from "@/app/(home)/constants";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { LucideMenu } from "lucide-react";
import { SidebarItem } from "./sidebarItem";

interface SidebarProps
 {
  items: typeof NAVBAR_ITEMS;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

function Sidebar({ items, open, onOpenChange }: SidebarProps) {
  const handleClose = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger className="flex lg:hidden mr-6">
        <LucideMenu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        aria-describedby={undefined}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map(({ href, children }) => (
            <SidebarItem key={href} href={href} onClick={handleClose}>
              {children}
            </SidebarItem>
          ))}

          <div className="border-t">
            <SidebarItem href="/sign-in" onClick={handleClose}>
              Log in
            </SidebarItem>
            <SidebarItem href="/sign-up" onClick={handleClose}>
              Start selling
            </SidebarItem>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { Sidebar };
