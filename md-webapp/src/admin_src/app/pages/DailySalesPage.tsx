import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Search, Eye, Calendar, Filter } from "lucide-react";
import { useState } from "react";

const reportsData = [
  {
    id: "RPT-2023-001",
    date: "2026-03-23",
    branch: "SM Manila",
    shift: "Morning",
    employee: "Maria Santos",
    totalSales: "₱25,450",
    itemsSold: 145,
    status: "Submitted",
  },
  {
    id: "RPT-2023-002",
    date: "2026-03-23",
    branch: "Makati",
    shift: "Afternoon",
    employee: "Pedro Reyes",
    totalSales: "₱22,800",
    itemsSold: 132,
    status: "Reviewed",
  },
  {
    id: "RPT-2023-003",
    date: "2026-03-23",
    branch: "BGC",
    shift: "Morning",
    employee: "Ana Garcia",
    totalSales: "₱28,300",
    itemsSold: 168,
    status: "Pending",
  },
  {
    id: "RPT-2023-004",
    date: "2026-03-22",
    branch: "Quezon City",
    shift: "Evening",
    employee: "Carlos Mendoza",
    totalSales: "₱18,900",
    itemsSold: 98,
    status: "Late",
  },
];

const columns = [
  { key: "id", label: "Report ID", width: "12%" },
  { key: "date", label: "Date", width: "10%" },
  { key: "branch", label: "Branch", width: "12%" },
  { key: "shift", label: "Shift", width: "10%" },
  { key: "employee", label: "Submitted By", width: "15%" },
  { key: "totalSales", label: "Total Sales", width: "12%" },
  { key: "itemsSold", label: "Items Sold", width: "10%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "actions", label: "Actions", width: "9%" },
];

export function DailySalesPage() {
  const [selectedReport, setSelectedReport] = useState<any>(null);

  const renderCell = (key: string, value: any, row: any) => {
    if (key === "status") {
      const typeMap: Record<string, any> = {
        Submitted: "info",
        Reviewed: "success",
        Pending: "warning",
        Late: "danger",
      };
      return <StatusBadge status={value} type={typeMap[value] || "neutral"} />;
    }
    if (key === "actions") {
      return (
        <button
          onClick={() => setSelectedReport(row)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors text-xs"
        >
          <Eye className="w-3 h-3" />
          View
        </button>
      );
    }
    return value;
  };

  return (
    <div>
      <Header
        title="Daily Sales & Report Submission"
        breadcrumbs={["Home", "Daily Sales"]}
      />

      <div className="p-8 space-y-6">
        {/* Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search reports..."
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
              <option>Submitted</option>
              <option>Reviewed</option>
              <option>Pending</option>
              <option>Late</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Date Range</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Today's Total Sales</p>
            <p className="text-3xl text-[#622F1E]">₱72,450</p>
            <p className="text-xs text-green-600 mt-1">↑ 12.5% vs yesterday</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Reports Submitted</p>
            <p className="text-3xl text-green-600">28</p>
            <p className="text-xs text-[#6b6b6b] mt-1">out of 30 expected</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Pending Review</p>
            <p className="text-3xl text-yellow-600">5</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Need attention</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Late Submissions</p>
            <p className="text-3xl text-red-600">2</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Overdue reports</p>
          </div>
        </div>

        {/* Reports Table */}
        <DataTable columns={columns} data={reportsData} renderCell={renderCell} />

        {/* Report Detail Modal */}
        {selectedReport && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 z-50"
            onClick={() => setSelectedReport(null)}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-[#2d2d2d]">Report Details</h2>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-[#6b6b6b] hover:text-[#2d2d2d]"
                >
                  ✕
                </button>
              </div>

              {/* Report Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#FAF7F2]">
                  <p className="text-xs text-[#6b6b6b] mb-1">Report ID</p>
                  <p className="text-sm text-[#2d2d2d]">{selectedReport.id}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2]">
                  <p className="text-xs text-[#6b6b6b] mb-1">Branch</p>
                  <p className="text-sm text-[#2d2d2d]">{selectedReport.branch}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2]">
                  <p className="text-xs text-[#6b6b6b] mb-1">Date</p>
                  <p className="text-sm text-[#2d2d2d]">{selectedReport.date}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2]">
                  <p className="text-xs text-[#6b6b6b] mb-1">Shift</p>
                  <p className="text-sm text-[#2d2d2d]">{selectedReport.shift}</p>
                </div>
              </div>

              {/* Sales Items */}
              <div className="mb-6">
                <h3 className="text-lg text-[#2d2d2d] mb-4">Sales Items</h3>
                <div className="space-y-3">
                  {[
                    { product: "Classic Glazed Donut", qty: 45, price: 50, total: 2250 },
                    { product: "Premium Coffee", qty: 38, price: 75, total: 2850 },
                    { product: "Chocolate Donut", qty: 32, price: 60, total: 1920 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2]">
                      <div className="flex-1">
                        <p className="text-sm text-[#2d2d2d]">{item.product}</p>
                        <p className="text-xs text-[#6b6b6b]">Qty: {item.qty} × ₱{item.price}</p>
                      </div>
                      <p className="text-sm text-[#622F1E]">₱{item.total.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-[rgba(98,47,30,0.1)] pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg text-[#2d2d2d]">Total Sales</p>
                  <p className="text-2xl text-[#622F1E]">{selectedReport.totalSales}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">
                  Mark as Reviewed
                </button>
                <button className="flex-1 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
