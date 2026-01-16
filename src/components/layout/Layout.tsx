import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { GlobalSearch } from "./GlobalSearch";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar 
        onOpenSearch={() => setSearchOpen(true)} 
        isCollapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-16 md:ml-64'}`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
