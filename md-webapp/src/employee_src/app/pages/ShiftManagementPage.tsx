import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

const shiftsData = [
  {
    id: "SHF-001",
    name: "Morning Shift",
    timeStart: "06:00 AM",
    timeEnd: "02:00 PM",
    description: "Early morning operations",
    status: "Active",
  },
  {
    id: "SHF-002",
    name: "Afternoon Shift",
    timeStart: "02:00 PM",
    timeEnd: "10:00 PM",
    description: "Afternoon to evening coverage",
    status: "Active",
  },
  {
    id: "SHF-003",
    name: "Evening Shift",
    timeStart: "10:00 PM",
    timeEnd: "06:00 AM",
    description: "Night operations",
    status: "Active",
  },
  {
    id: "SHF-004",
    name: "Mid Shift",
    timeStart: "10:00 AM",
    timeEnd: "06:00 PM",
    description: "Midday coverage",
    status: "Active",
  },
];

const columns = [
  { key: "id", label: "Shift ID", width: "12%" },
  { key: "name", label: "Shift Name", width: "18%" },
  { key: "timeStart", label: "Time Start", width: "15%" },
  { key: "timeEnd", label: "Time End", width: "15%" },
  { key: "description", label: "Description", width: "25%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "actions", label: "Actions", width: "5%" },
];

export function ShiftManagementPage() {
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      return <StatusBadge status={value} type="success" />;
    }
    if (key === "actions") {
      return (
        <div className="flex items-center gap-2">
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
        title="Shift Management"
        breadcrumbs={["Home", "Master Data", "Shifts"]}
      />

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
            <input
              type="text"
              placeholder="Search shifts..."
              className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Add Shift</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Shifts</p>
            <p className="text-3xl text-[#2d2d2d]">4</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Active Shifts</p>
            <p className="text-3xl text-green-600">4</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Avg Hours</p>
            <p className="text-3xl text-[#622F1E]">8h</p>
          </div>
        </div>

        <DataTable columns={columns} data={shiftsData} renderCell={renderCell} />
      </div>
    </div>
  );
}
