import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { MobileNavigation } from "../components/MobileNavigation";

export function EmployeeDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#F8F5F2]">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-6 pb-24">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>

    </div>
  );
}