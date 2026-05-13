import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Clock,
  FileText,
  Package,
  User,
  Bell,
  LogOut,
  Coffee,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

const menuItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },

  {
    path: "/dashboard/attendance",
    label: "Attendance",
    icon: Clock,
  },

  {
    path: "/dashboard/inventory",
    label: "Inventory",
    icon: Package,
  },

  {
    path: "/dashboard/stock-history",
    label: "Stock-In History",
    icon: ArrowDownCircle,
  },

  {
    path: "/dashboard/stock-out",
    label: "Stock-Out",
    icon: ArrowUpCircle,
  },

  {
    path: "/dashboard/stock-out-history",
    label: "Stock-Out History",
    icon: FileText,
  },

  {
    path: "/dashboard/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    path: "/dashboard/notifications",
    label: "Notifications",
    icon: Bell,
  },

  {
    path: "/dashboard/profile",
    label: "Profile",
    icon: User,
  },
];

export function Sidebar() {

  return (

    <aside className="w-64 bg-[#D4C4B0] h-screen flex flex-col shadow-lg hidden md:flex">

      {/* LOGO */}

      <div className="p-6 border-b border-[rgba(98,47,30,0.1)]">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-[#622F1E] flex items-center justify-center">

            <Coffee className="w-6 h-6 text-white" />

          </div>

          <div>

            <h1 className="text-xl text-[#622F1E] font-bold">
              AFIRM
            </h1>

            <p className="text-xs text-[#6b6b6b]">
              Employee Portal
            </p>

          </div>

        </div>

      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 overflow-y-auto py-4">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-6 py-3 mx-2 rounded-xl transition-all ${
                isActive
                  ? "bg-[#622F1E] text-white shadow-md"
                  : "text-[#2d2d2d] hover:bg-[rgba(98,47,30,0.1)]"
              }`
            }
          >

            <item.icon className="w-5 h-5 flex-shrink-0" />

            <span className="text-sm">
              {item.label}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* FOOTER */}

      <div className="p-4 border-t border-[rgba(98,47,30,0.1)]">

        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">

          <div className="w-10 h-10 rounded-full bg-[#622F1E] flex items-center justify-center">

            <span className="text-white text-sm">
              MS
            </span>

          </div>

          <div className="flex-1">

            <p className="text-sm text-[#2d2d2d]">
              Maria Santos
            </p>

            <p className="text-xs text-[#6b6b6b]">
              Employee
            </p>

          </div>

        </div>

        <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">

          <LogOut className="w-4 h-4" />

          <span className="text-sm">
            Logout
          </span>

        </button>

      </div>

    </aside>

  );

}