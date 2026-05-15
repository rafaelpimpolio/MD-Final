import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {

  return (

    <div className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">

      {/* SIDEBAR */}
      <div className="fixed top-0 left-0 h-screen w-56 z-50">

        <Sidebar />

      </div>

      {/* MAIN CONTENT */}
      <main className="ml-56 p-2 md:p-3 max-w-[calc(100vw-14rem)] overflow-x-hidden scale-[0.96] origin-top-left">

        <Outlet />

      </main>

    </div>

  );

}