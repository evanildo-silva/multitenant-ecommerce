import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F4]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
