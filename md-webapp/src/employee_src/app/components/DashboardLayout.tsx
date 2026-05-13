import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileNavigation } from "./MobileNavigation";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#FAF7F2]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
        <Outlet />
      </main>
      <MobileNavigation />
    </div>
  );
}
