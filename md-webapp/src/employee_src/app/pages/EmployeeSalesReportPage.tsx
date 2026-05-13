import { Header } from "../components/Header";
import { Plus, TrendingUp, DollarSign, Package } from "lucide-react";
import { useState } from "react";

export function EmployeeSalesReportPage() {
  const [showForm, setShowForm] = useState(false);

  const recentReports = [
    { date: "2026-05-10", totalSales: "₱12,450", items: 156, status: "Approved" },
    { date: "2026-05-09", totalSales: "₱11,230", items: 142, status: "Approved" },
    { date: "2026-05-08", totalSales: "₱13,670", items: 168, status: "Approved" },
    { date: "2026-05-07", totalSales: "₱10,890", items: 135, status: "Approved" },
  ];

  const topProducts = [
    { name: "Bavarian", sold: 45, revenue: "₱2,250" },
    { name: "Boston Kreme", sold: 38, revenue: "₱1,900" },
    { name: "Chocolate Butternut", sold: 35, revenue: "₱1,750" },
    { name: "Glazed", sold: 28, revenue: "₱1,400" },
  ];

  return (
    <div>
      <Header title="Sales Report" breadcrumbs={["Home", "Sales Report"]} />

      <div className="p-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Today's Sales</p>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">₱8,450</p>
            <p className="text-xs text-green-600 mt-1">+12% vs yesterday</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Items Sold</p>
              <Package className="w-5 h-5 text-[#622F1E]" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">98</p>
            <p className="text-xs text-[#6b6b6b] mt-1">So far today</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">This Month</p>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">₱267K</p>
            <p className="text-xs text-green-600 mt-1">Target: ₱250K</p>
          </div>
        </div>

        {/* Submit Report Button */}
        {!showForm && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)] text-center">
            <div className="w-16 h-16 rounded-xl bg-[#622F1E] flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#2d2d2d] mb-2">Submit Today's Sales Report</h3>
            <p className="text-sm text-[#6b6b6b] mb-6">Record your daily sales and transactions</p>
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors"
            >
              Start New Report
            </button>
          </div>
        )}

        {/* Sales Report Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-6">Daily Sales Report - May 11, 2026</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Branch</label>
                <input
                  type="text"
                  value="SM Manila Branch"
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-[#FAF7F2] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Shift</label>
                <input
                  type="text"
                  value="Morning Shift (6:00 AM - 2:00 PM)"
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-[#FAF7F2] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Total Sales Amount</label>
                <input
                  type="text"
                  placeholder="₱0.00"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Total Items Sold</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Cash Payments</label>
                <input
                  type="text"
                  placeholder="₱0.00"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-[#2d2d2d] mb-2">Card Payments</label>
                <input
                  type="text"
                  placeholder="₱0.00"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-[#2d2d2d] mb-2">Top Selling Products (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g., Bavarian, Boston Kreme, Chocolate Butternut"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-[#2d2d2d] mb-2">Notes / Remarks</label>
                <textarea
                  rows={4}
                  placeholder="Any special observations, customer feedback, or issues..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">
                Submit Report
              </button>
            </div>
          </div>
        )}

        {/* Recent Reports */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Recent Reports</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(98,47,30,0.1)]">
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Date</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Total Sales</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Items Sold</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report, index) => (
                  <tr key={index} className="border-b border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{report.date}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{report.totalSales}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{report.items}</td>
                    <td className="py-4 px-4">
                      <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Top Selling Products (This Week)</h3>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                <div className="w-10 h-10 rounded-lg bg-[#622F1E] text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2d2d2d]">{product.name}</p>
                  <p className="text-xs text-[#6b6b6b]">{product.sold} units sold</p>
                </div>
                <p className="text-[#622F1E]">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
