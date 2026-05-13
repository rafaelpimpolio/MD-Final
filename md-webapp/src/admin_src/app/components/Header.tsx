import { Search, Bell, ChevronDown, Calendar, Filter } from "lucide-react";

interface HeaderProps {
  title: string;
  breadcrumbs?: string[];
}

export function Header({ title, breadcrumbs = [] }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[rgba(98,47,30,0.1)] px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Title & Breadcrumb */}
        <div>
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
          <h1 className="text-2xl text-[#2d2d2d]">{title}</h1>
        </div>

        {/* Right: Search, Filters, Notifications, Profile */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-64 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
            />
          </div>

          {/* Date Filter */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
            <Calendar className="w-4 h-4 text-[#6b6b6b]" />
            <span className="text-sm text-[#2d2d2d]">Today</span>
            <ChevronDown className="w-4 h-4 text-[#6b6b6b]" />
          </button>

          {/* Branch Filter */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
            <Filter className="w-4 h-4 text-[#6b6b6b]" />
            <span className="text-sm text-[#2d2d2d]">All Branches</span>
            <ChevronDown className="w-4 h-4 text-[#6b6b6b]" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
            <Bell className="w-5 h-5 text-[#6b6b6b]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#dc2626] rounded-full"></span>
          </button>

          {/* Admin Avatar */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#622F1E] flex items-center justify-center">
              <span className="text-white text-sm">CM</span>
            </div>
            <ChevronDown className="w-4 h-4 text-[#6b6b6b]" />
          </button>
        </div>
      </div>
    </header>
  );
}
