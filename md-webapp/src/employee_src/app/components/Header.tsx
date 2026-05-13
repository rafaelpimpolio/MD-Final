import { Bell, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  breadcrumbs?: string[];
}

export function Header({ title, breadcrumbs = [] }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[rgba(98,47,30,0.1)] px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Title & Breadcrumb */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm text-[#6b6b6b] mb-1">
            {breadcrumbs.length > 0 && (
              <>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="flex items-center gap-2">
                    {crumb}
                    {index < breadcrumbs.length - 1 && <span>/</span>}
                  </span>
                ))}
              </>
            )}
          </div>
          <h1 className="text-xl md:text-2xl text-[#2d2d2d] truncate">{title}</h1>
        </div>

        {/* Right: Notifications & Menu */}
        <div className="flex items-center gap-2 md:gap-4 ml-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
            <Bell className="w-5 h-5 text-[#6b6b6b]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#dc2626] rounded-full"></span>
          </button>

          {/* Mobile Menu Toggle (visible on small screens) */}
          <button className="md:hidden p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
            <Menu className="w-5 h-5 text-[#6b6b6b]" />
          </button>

          {/* Employee Avatar (hidden on small screens) */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#622F1E] flex items-center justify-center">
              <span className="text-white text-sm">MS</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
