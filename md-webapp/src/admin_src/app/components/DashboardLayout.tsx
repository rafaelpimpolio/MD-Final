import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>

    </div>
  );
}