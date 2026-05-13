import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const branchesData = [
  {
    id: "BR-001",
    name: "SM Manila",
    location: "Manila City, Metro Manila",
    manager: "Juan Dela Cruz",
    status: "Active",
  },
  {
    id: "BR-002",
    name: "Makati Branch",
    location: "Makati City, Metro Manila",
    manager: "Maria Santos",
    status: "Active",
  },
  {
    id: "BR-003",
    name: "BGC Branch",
    location: "Taguig City, Metro Manila",
    manager: "Pedro Reyes",
    status: "Active",
  },
  {
    id: "BR-004",
    name: "Quezon City",
    location: "Quezon City, Metro Manila",
    manager: "Ana Garcia",
    status: "Active",
  },
  {
    id: "BR-005",
    name: "Pasig Branch",
    location: "Pasig City, Metro Manila",
    manager: "Carlos Mendoza",
    status: "Active",
  },
];

const columns = [
  { key: "id", label: "Branch ID", width: "12%" },
  { key: "name", label: "Branch Name", width: "20%" },
  { key: "location", label: "Location", width: "30%" },
  { key: "manager", label: "Manager", width: "18%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "actions", label: "Actions", width: "10%" },
];

export function BranchManagementPage() {
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      return <StatusBadge status={value} type="success" />;
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
        title="Branch Management"
        breadcrumbs={["Home", "Master Data", "Branches"]}
      />

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
            <input
              type="text"
              placeholder="Search branches..."
              className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Add Branch</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Branches</p>
            <p className="text-3xl text-[#2d2d2d]">12</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Active Branches</p>
            <p className="text-3xl text-green-600">12</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Metro Manila</p>
            <p className="text-3xl text-[#622F1E]">8</p>
          </div>
        </div>

        <DataTable columns={columns} data={branchesData} renderCell={renderCell} />
      </div>
    </div>
  );
}
