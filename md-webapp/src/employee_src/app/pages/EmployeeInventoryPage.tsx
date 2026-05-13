import { Header } from "../components/Header";
import { Package, Minus, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function EmployeeInventoryPage() {
  const [showForm, setShowForm] = useState(false);

  const inventoryItems = [
    { name: "Bavarian", current: 48, used: 12, unit: "pcs" },
    { name: "Boston Kreme", current: 36, used: 14, unit: "pcs" },
    { name: "Chocolate Butternut", current: 42, used: 8, unit: "pcs" },
    { name: "Glazed", current: 24, used: 16, unit: "pcs", low: true },
    { name: "Strawberry Filled", current: 30, used: 10, unit: "pcs" },
    { name: "French Cruller", current: 28, used: 12, unit: "pcs" },
  ];

  const recentUpdates = [
    { date: "2026-05-10", time: "02:00 PM", items: 8, status: "Recorded" },
    { date: "2026-05-09", time: "02:05 PM", items: 7, status: "Recorded" },
    { date: "2026-05-08", time: "02:10 PM", items: 9, status: "Recorded" },
  ];

  return (
    <div>
      <Header title="Inventory Usage" breadcrumbs={["Home", "Inventory"]} />

      <div className="p-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Total Items</p>
              <Package className="w-5 h-5 text-[#622F1E]" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">32</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Product types</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Used Today</p>
              <Minus className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">72</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Items recorded</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Low Stock Alert</p>
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl text-red-600">3</p>
            <p className="text-xs text-red-600 mt-1">Items need restock</p>
          </div>
        </div>

        {/* Record Usage Button */}
        {!showForm && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)] text-center">
            <div className="w-16 h-16 rounded-xl bg-[#622F1E] flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg text-[#2d2d2d] mb-2">Record Inventory Usage</h3>
            <p className="text-sm text-[#6b6b6b] mb-6">Update product usage and stock levels</p>
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors"
            >
              Record Usage
            </button>
          </div>
        )}

        {/* Inventory Usage Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-6">Record Inventory Usage - May 11, 2026</h3>

            <div className="mb-6">
              <p className="text-sm text-[#2d2d2d] mb-4">Select products used during your shift:</p>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {inventoryItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                    <div className="flex-1">
                      <p className="text-sm text-[#2d2d2d]">{item.name}</p>
                      <p className="text-xs text-[#6b6b6b]">Current stock: {item.current} {item.unit}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-xs text-[#6b6b6b]">Used:</label>
                      <input
                        type="number"
                        defaultValue="0"
                        min="0"
                        className="w-20 px-3 py-2 rounded-lg border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                      />
                      <span className="text-xs text-[#6b6b6b]">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-[#2d2d2d] mb-2">Notes / Remarks</label>
              <textarea
                rows={3}
                placeholder="Any observations about stock levels, damages, or special notes..."
                className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">
                Submit Usage Record
              </button>
            </div>
          </div>
        )}

        {/* Current Stock Levels */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Current Stock Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inventoryItems.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  item.low ? "bg-red-50 border-2 border-red-200" : "bg-[#FAF7F2]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#2d2d2d]">{item.name}</p>
                  {item.low && <AlertTriangle className="w-4 h-4 text-red-600" />}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl text-[#2d2d2d]">{item.current}</p>
                    <p className="text-xs text-[#6b6b6b]">{item.unit} available</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#6b6b6b]">Used today</p>
                    <p className="text-lg text-orange-600">{item.used}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Your Recent Updates</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(98,47,30,0.1)]">
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Date</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Time</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Items Updated</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUpdates.map((update, index) => (
                  <tr key={index} className="border-b border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{update.date}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{update.time}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{update.items} products</td>
                    <td className="py-4 px-4">
                      <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {update.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Inventory Guidelines</h3>
          <ul className="space-y-2 text-sm text-[#6b6b6b]">
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Record inventory usage at the end of each shift</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Report any damaged or expired items immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Notify supervisor when stock levels are running low</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Always follow FIFO (First In, First Out) principle</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
