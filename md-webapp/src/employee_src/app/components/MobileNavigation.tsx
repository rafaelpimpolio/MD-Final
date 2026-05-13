import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Clock,
  FileText,
  Package,
  User,
} from "lucide-react";

const navItems = [
  {
    path: "/dashboard",
    label: "Home",
    icon: LayoutDashboard,
    exact: true,
  },

  {
    path: "/dashboard/attendance",
    label: "Attendance",
    icon: Clock,
  },

  {
    path: "/dashboard/reports",
    label: "Reports",
    icon: FileText,
  },

  {
    path: "/dashboard/inventory",
    label: "Inventory",
    icon: Package,
  },

  {
    path: "/dashboard/profile",
    label: "Profile",
    icon: User,
  },
];

export function MobileNavigation() {

  return (

    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[rgba(98,47,30,0.1)] shadow-lg z-50">

      <div className="flex items-center justify-around">

        {navItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                isActive
                  ? "text-[#622F1E]"
                  : "text-[#6b6b6b]"
              }`
            }
          >

            {({ isActive }: { isActive: boolean }) => (

              <>

                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-[#622F1E]"
                      : "text-[#6b6b6b]"
                  }`}
                />

                <span className="text-xs">
                  {item.label}
                </span>

              </>

            )}

          </NavLink>

        ))}

      </div>

    </nav>

  );

}