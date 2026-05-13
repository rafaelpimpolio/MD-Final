import { Header } from "../components/Header";
import { Download, Calendar, Filter } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesTrendData = [
  { date: "Mar 17", sales: 45000, target: 40000 },
  { date: "Mar 18", sales: 52000, target: 40000 },
  { date: "Mar 19", sales: 48000, target: 40000 },
  { date: "Mar 20", sales: 61000, target: 40000 },
  { date: "Mar 21", sales: 55000, target: 40000 },
  { date: "Mar 22", sales: 67000, target: 40000 },
  { date: "Mar 23", sales: 72000, target: 40000 },
];

const branchPerformanceData = [
  { branch: "SM Manila", sales: 185000, orders: 850 },
  { branch: "Makati", sales: 172000, orders: 720 },
  { branch: "BGC", sales: 168000, orders: 680 },
  { branch: "Quezon City", sales: 155000, orders: 620 },
  { branch: "Pasig", sales: 148000, orders: 580 },
];

const productPerformanceData = [
  { name: "Classic Glazed", value: 35, color: "#622F1E" },
  { name: "Premium Coffee", value: 25, color: "#8b5234" },
  { name: "Chocolate Donut", value: 20, color: "#a67c52" },
  { name: "Croissant", value: 12, color: "#D4C4B0" },
  { name: "Others", value: 8, color: "#e8d5c4" },
];

export function ReportingAnalyticsPage() {
  return (
    <div>
      <Header
        title="Reporting & Analytics"
        breadcrumbs={["Home", "Reports & Analytics"]}
      />

      <div className="p-8 space-y-6">
        {/* Filters & Export */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Last 7 Days</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
              <Filter className="w-4 h-4" />
              <span>All Branches</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Excel</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Revenue (7 days)</p>
            <p className="text-3xl text-[#622F1E]">₱400,000</p>
            <p className="text-xs text-green-600 mt-1">↑ 18.5% vs last week</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Orders</p>
            <p className="text-3xl text-[#2d2d2d]">3,450</p>
            <p className="text-xs text-green-600 mt-1">↑ 12.3% vs last week</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Avg Order Value</p>
            <p className="text-3xl text-[#2d2d2d]">₱116</p>
            <p className="text-xs text-green-600 mt-1">↑ 5.2% vs last week</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Best Performing Branch</p>
            <p className="text-2xl text-[#622F1E]">SM Manila</p>
            <p className="text-xs text-[#6b6b6b] mt-1">₱185,000 total sales</p>
          </div>
        </div>

        {/* Report Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(98,47,30,0.1)] overflow-hidden">
          <div className="flex border-b border-[rgba(98,47,30,0.1)]">
            <button className="px-6 py-4 bg-[#622F1E] text-white">
              Sales Reports
            </button>
            <button className="px-6 py-4 bg-white text-[#2d2d2d] hover:bg-[#FAF7F2] transition-colors">
              Inventory Reports
            </button>
            <button className="px-6 py-4 bg-white text-[#2d2d2d] hover:bg-[#FAF7F2] transition-colors">
              Attendance Reports
            </button>
            <button className="px-6 py-4 bg-white text-[#2d2d2d] hover:bg-[#FAF7F2] transition-colors">
              Branch Performance
            </button>
          </div>

          <div className="p-6">
            {/* Sales Trend Chart */}
            <div className="mb-8">
              <h3 className="text-lg text-[#2d2d2d] mb-4">Daily Sales Trend</h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={salesTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D4C4B0" />
                  <XAxis dataKey="date" stroke="#6b6b6b" />
                  <YAxis stroke="#6b6b6b" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#622F1E"
                    strokeWidth={3}
                    name="Actual Sales"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#D4C4B0"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Target"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Branch Performance & Product Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Branch Performance Chart */}
              <div>
                <h3 className="text-lg text-[#2d2d2d] mb-4">Branch Sales Comparison</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={branchPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D4C4B0" />
                    <XAxis dataKey="branch" stroke="#6b6b6b" angle={-15} textAnchor="end" height={80} />
                    <YAxis stroke="#6b6b6b" />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#622F1E" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Product Performance Chart */}
              <div>
                <h3 className="text-lg text-[#2d2d2d] mb-4">Product Performance Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={productPerformanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {productPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Summary Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* Best Selling Products */}
              <div>
                <h3 className="text-lg text-[#2d2d2d] mb-4">Top 5 Best-Selling Products</h3>
                <div className="space-y-2">
                  {[
                    { product: "Classic Glazed Donut", qty: 1250, revenue: "₱62,500" },
                    { product: "Premium Coffee", qty: 980, revenue: "₱73,500" },
                    { product: "Chocolate Donut", qty: 850, revenue: "₱51,000" },
                    { product: "Bavarian Donut", qty: 720, revenue: "₱43,200" },
                    { product: "Croissant", qty: 650, revenue: "₱55,250" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2]">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#622F1E] text-white flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm text-[#2d2d2d]">{item.product}</p>
                          <p className="text-xs text-[#6b6b6b]">{item.qty} sold</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#622F1E]">{item.revenue}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch Rankings */}
              <div>
                <h3 className="text-lg text-[#2d2d2d] mb-4">Branch Performance Rankings</h3>
                <div className="space-y-2">
                  {branchPerformanceData.map((branch, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2]">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#622F1E] text-white flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm text-[#2d2d2d]">{branch.branch}</p>
                          <p className="text-xs text-[#6b6b6b]">{branch.orders} orders</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#622F1E]">₱{branch.sales.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
