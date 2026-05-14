import {
  NavLink,
  useNavigate,
} from "react-router-dom";

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
    path: "/employee/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },

  {
    path: "/employee/dashboard/attendance",
    label: "Attendance",
    icon: Clock,
  },

  {
    path: "/employee/dashboard/inventory",
    label: "Inventory",
    icon: Package,
  },

  {
    path: "/employee/dashboard/stock-history",
    label: "Stock-In History",
    icon: ArrowDownCircle,
  },

  {
    path: "/employee/dashboard/stock-out",
    label: "Stock-Out",
    icon: ArrowUpCircle,
  },

  {
    path: "/employee/dashboard/stock-out-history",
    label: "Stock-Out History",
    icon: FileText,
  },

  {
    path: "/employee/dashboard/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    path: "/employee/dashboard/notifications",
    label: "Notifications",
    icon: Bell,
  },

  {
    path: "/employee/dashboard/profile",
    label: "Profile",
    icon: User,
  },
];

export function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#622F1E] text-white shadow-lg flex flex-col z-50 hidden md:flex">

      {/* LOGO */}

      <div className="p-6 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">

            <Coffee className="w-6 h-6 text-[#622F1E]" />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              AFIRM
            </h1>

            <p className="text-xs text-gray-300">
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

        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10">

          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">

            <span className="text-[#622F1E] text-sm font-bold">
              EM
            </span>

          </div>

          <div className="flex-1">

            <p className="text-sm">
              Employee
            </p>

            <p className="text-xs text-gray-300">
              Staff Account
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#4a2316] text-white hover:bg-[#3a1b11] transition-colors"
        >

          <LogOut className="w-4 h-4" />

          <span className="text-sm">
            Logout
          </span>

        </button>

      </div>

    </aside>

  );

}