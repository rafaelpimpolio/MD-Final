import {
  LayoutDashboard,
  Package,
  Archive,
  ArrowDownCircle,
  ArrowUpCircle,
  FileText,
  ClipboardList,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },

  {
    path: "/dashboard/products",
    label: "Products",
    icon: Package,
  },

  {
    path: "/dashboard/inventory",
    label: "Inventory",
    icon: Archive,
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
    icon: ArrowUpCircle,
  },

  {
    path: "/dashboard/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    path: "/dashboard/attendance",
    label: "Attendance",
    icon: ClipboardList,
  },
];

export function Sidebar() {

  return (

    <aside className="w-64 bg-[#622F1E] h-screen flex flex-col text-white shadow-lg">

      {/* LOGO */}

      <div className="p-6 border-b border-white/10">

        <h1 className="text-3xl font-bold tracking-wide">
          AFIRM
        </h1>

        <p className="text-sm text-gray-300 mt-1">
          Admin Portal
        </p>

      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 overflow-y-auto py-4">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-6 py-3 mx-3 rounded-xl transition-all ${
                isActive
                  ? "bg-white text-[#622F1E] shadow-md"
                  : "text-white hover:bg-[#4a2316]"
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

      <div className="p-4 border-t border-white/10">

        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#622F1E] hover:bg-gray-100 transition">

          <LogOut className="w-4 h-4" />

          Logout

        </button>

      </div>

    </aside>

  );

}