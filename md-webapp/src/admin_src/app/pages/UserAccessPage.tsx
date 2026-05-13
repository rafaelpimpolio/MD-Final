import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Plus, Search, Filter, Edit, Trash2, RotateCcw, Eye } from "lucide-react";

const usersData = [
  {
    id: "USR-001",
    name: "Juan Dela Cruz",
    username: "juan.delacruz",
    role: "Admin",
    branch: "All Branches",
    status: "Active",
    lastLogin: "2026-03-23 09:15 AM",
  },
  {
    id: "USR-002",
    name: "Maria Santos",
    username: "maria.santos",
    role: "Branch Employee",
    branch: "SM Manila",
    status: "Active",
    lastLogin: "2026-03-23 08:30 AM",
  },
  {
    id: "USR-003",
    name: "Pedro Reyes",
    username: "pedro.reyes",
    role: "Branch Employee",
    branch: "Makati",
    status: "Active",
    lastLogin: "2026-03-23 07:45 AM",
  },
  {
    id: "USR-004",
    name: "Ana Garcia",
    username: "ana.garcia",
    role: "Branch Employee",
    branch: "BGC",
    status: "Inactive",
    lastLogin: "2026-03-20 05:00 PM",
  },
  {
    id: "USR-005",
    name: "Carlos Mendoza",
    username: "carlos.mendoza",
    role: "Branch Employee",
    branch: "Quezon City",
    status: "Active",
    lastLogin: "2026-03-23 08:00 AM",
  },
];

const columns = [
  { key: "id", label: "User ID", width: "10%" },
  { key: "name", label: "Name", width: "20%" },
  { key: "username", label: "Username", width: "15%" },
  { key: "role", label: "Role", width: "12%" },
  { key: "branch", label: "Assigned Branch", width: "15%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "lastLogin", label: "Last Login", width: "13%" },
  { key: "actions", label: "Actions", width: "5%" },
];

export function UserAccessPage() {
  const renderCell = (key: string, value: any, row: any) => {
    if (key === "status") {
      return (
        <StatusBadge
          status={value}
          type={value === "Active" ? "success" : "neutral"}
        />
      );
    }
    if (key === "role") {
      return (
        <span className={`px-3 py-1 rounded-lg text-xs ${
          value === "Admin"
            ? "bg-[#622F1E] text-white"
            : "bg-[#D4C4B0] text-[#2d2d2d]"
        }`}>
          {value}
        </span>
      );
    }
    if (key === "actions") {
      return (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-[#FAF7F2] rounded-lg transition-colors">
            <Eye className="w-4 h-4 text-[#6b6b6b]" />
          </button>
          <button className="p-1 hover:bg-[#FAF7F2] rounded-lg transition-colors">
            <Edit className="w-4 h-4 text-[#6b6b6b]" />
          </button>
          <button className="p-1 hover:bg-[#FAF7F2] rounded-lg transition-colors">
            <RotateCcw className="w-4 h-4 text-[#6b6b6b]" />
          </button>
          <button className="p-1 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      );
    }
    return value;
  };

  return (
    <div>
      <Header
        title="User & Access Management"
        breadcrumbs={["Home", "Users"]}
      />

      <div className="p-8 space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
              />
            </div>

            {/* Role Filter */}
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Branch Employee</option>
            </select>

            {/* Status Filter */}
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Add User Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Add User</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Users</p>
            <p className="text-3xl text-[#2d2d2d]">42</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Active Users</p>
            <p className="text-3xl text-green-600">38</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Admins</p>
            <p className="text-3xl text-[#622F1E]">3</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Branch Employees</p>
            <p className="text-3xl text-[#2d2d2d]">39</p>
          </div>
        </div>

        {/* Users Table */}
        <DataTable columns={columns} data={usersData} renderCell={renderCell} />
      </div>
    </div>
  );
}
