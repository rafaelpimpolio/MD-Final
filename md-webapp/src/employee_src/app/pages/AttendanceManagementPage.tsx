import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Search, Calendar, Download, FileText } from "lucide-react";

const attendanceData = [
  {
    date: "2026-03-23",
    employee: "Maria Santos",
    branch: "SM Manila",
    shift: "Morning",
    timeIn: "06:05 AM",
    timeOut: "02:10 PM",
    status: "Present",
    remarks: "-",
  },
  {
    date: "2026-03-23",
    employee: "Pedro Reyes",
    branch: "Makati",
    shift: "Morning",
    timeIn: "06:15 AM",
    timeOut: "02:05 PM",
    status: "Late",
    remarks: "15 mins late",
  },
  {
    date: "2026-03-23",
    employee: "Ana Garcia",
    branch: "BGC",
    shift: "Afternoon",
    timeIn: "02:00 PM",
    timeOut: "-",
    status: "Incomplete",
    remarks: "No time out",
  },
  {
    date: "2026-03-23",
    employee: "Carlos Mendoza",
    branch: "Quezon City",
    shift: "Morning",
    timeIn: "06:00 AM",
    timeOut: "02:00 PM",
    status: "Present",
    remarks: "-",
  },
  {
    date: "2026-03-23",
    employee: "Jose Cruz",
    branch: "Pasig",
    shift: "Morning",
    timeIn: "-",
    timeOut: "-",
    status: "Absent",
    remarks: "No show",
  },
];

const columns = [
  { key: "date", label: "Date", width: "10%" },
  { key: "employee", label: "Employee Name", width: "15%" },
  { key: "branch", label: "Branch", width: "12%" },
  { key: "shift", label: "Shift", width: "10%" },
  { key: "timeIn", label: "Time In", width: "10%" },
  { key: "timeOut", label: "Time Out", width: "10%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "remarks", label: "Remarks", width: "23%" },
];

export function AttendanceManagementPage() {
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      const typeMap: Record<string, any> = {
        Present: "success",
        Late: "warning",
        Incomplete: "warning",
        Absent: "danger",
      };
      return <StatusBadge status={value} type={typeMap[value] || "neutral"} />;
    }
    return value;
  };

  return (
    <div>
      <Header
        title="Attendance Management"
        breadcrumbs={["Home", "Attendance"]}
      />

      <div className="p-8 space-y-6">
        {/* Filters & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search employee..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Branches</option>
              <option>SM Manila</option>
              <option>Makati</option>
              <option>BGC</option>
            </select>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Shifts</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Status</option>
              <option>Present</option>
              <option>Late</option>
              <option>Incomplete</option>
              <option>Absent</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Present</p>
            <p className="text-3xl text-green-600">78</p>
            <p className="text-xs text-[#6b6b6b] mt-1">out of 85 employees</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Late Arrivals</p>
            <p className="text-3xl text-yellow-600">3</p>
            <p className="text-xs text-[#6b6b6b] mt-1">3.5% of workforce</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Incomplete</p>
            <p className="text-3xl text-orange-600">2</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Missing time out</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Absent</p>
            <p className="text-3xl text-red-600">2</p>
            <p className="text-xs text-[#6b6b6b] mt-1">2.4% absenteeism</p>
          </div>
        </div>

        {/* Attendance Table */}
        <DataTable columns={columns} data={attendanceData} renderCell={renderCell} />

        {/* Reports Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Attendance Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Daily Attendance Report</p>
                <p className="text-xs text-[#6b6b6b]">View today's attendance</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Employee History</p>
                <p className="text-xs text-[#6b6b6b]">Individual attendance records</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Branch Summary</p>
                <p className="text-xs text-[#6b6b6b]">Attendance by branch</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
