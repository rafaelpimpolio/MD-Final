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

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const menuItems = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },

  {
    path: "/admin/dashboard/products",
    label: "Products",
    icon: Package,
  },

  {
    path: "/admin/dashboard/inventory",
    label: "Inventory",
    icon: Archive,
  },

  {
    path: "/admin/dashboard/stock-history",
    label: "Stock-In History",
    icon: ArrowDownCircle,
  },

  {
    path: "/admin/dashboard/stock-out",
    label: "Stock-Out",
    icon: ArrowUpCircle,
  },

  {
    path: "/admin/dashboard/stock-out-history",
    label: "Stock-Out History",
    icon: ArrowUpCircle,
  },

  {
    path: "/admin/dashboard/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    path: "/admin/dashboard/attendance",
    label: "Attendance",
    icon: ClipboardList,
  },
];

export function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#622F1E] text-white shadow-lg flex flex-col z-50">

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

        <button
          onClick={handleLogout}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#4a2316] text-white hover:bg-[#3a1b11] transition-colors"
        >

          <LogOut className="w-4 h-4" />

          Logout

        </button>

      </div>

    </aside>

  );

}