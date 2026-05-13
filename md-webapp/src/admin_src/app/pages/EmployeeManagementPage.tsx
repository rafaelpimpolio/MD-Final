import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const employeesData = [
  {
    id: "EMP-001",
    name: "Juan Dela Cruz",
    contact: "0917-123-4567",
    role: "Manager",
    branch: "SM Manila",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Maria Santos",
    contact: "0917-234-5678",
    role: "Cashier",
    branch: "SM Manila",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Pedro Reyes",
    contact: "0917-345-6789",
    role: "Baker",
    branch: "Makati",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Ana Garcia",
    contact: "0917-456-7890",
    role: "Server",
    branch: "BGC",
    status: "Active",
  },
  {
    id: "EMP-005",
    name: "Carlos Mendoza",
    contact: "0917-567-8901",
    role: "Manager",
    branch: "Quezon City",
    status: "Active",
  },
];

const columns = [
  { key: "id", label: "Employee ID", width: "12%" },
  { key: "name", label: "Full Name", width: "20%" },
  { key: "contact", label: "Contact Number", width: "15%" },
  { key: "role", label: "Role", width: "15%" },
  { key: "branch", label: "Assigned Branch", width: "18%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "actions", label: "Actions", width: "10%" },
];

export function EmployeeManagementPage() {
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      return <StatusBadge status={value} type="success" />;
    }
    if (key === "role") {
      const colors: Record<string, string> = {
        Manager: "bg-[#622F1E] text-white",
        Cashier: "bg-blue-100 text-blue-700",
        Baker: "bg-orange-100 text-orange-700",
        Server: "bg-green-100 text-green-700",
      };
      return (
        <span className={`px-3 py-1 rounded-lg text-xs ${colors[value] || "bg-gray-100 text-gray-700"}`}>
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
        title="Employee Management"
        breadcrumbs={["Home", "Master Data", "Employees"]}
      />

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search employees..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Branches</option>
              <option>SM Manila</option>
              <option>Makati</option>
              <option>BGC</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Add Employee</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Employees</p>
            <p className="text-3xl text-[#2d2d2d]">85</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Active</p>
            <p className="text-3xl text-green-600">82</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Managers</p>
            <p className="text-3xl text-[#622F1E]">12</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Staff</p>
            <p className="text-3xl text-[#2d2d2d]">73</p>
          </div>
        </div>

        <DataTable columns={columns} data={employeesData} renderCell={renderCell} />
      </div>
    </div>
  );
}
