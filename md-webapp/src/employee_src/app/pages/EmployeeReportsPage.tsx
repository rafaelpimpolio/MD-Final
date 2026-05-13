import { Header } from "../components/Header";
import { FileText, TrendingUp, Award, Calendar } from "lucide-react";

export function EmployeeReportsPage() {
  const monthlyStats = [
    { month: "May 2026", attendance: "98%", sales: "₱267,450", shifts: 23 },
    { month: "April 2026", attendance: "100%", sales: "₱245,230", shifts: 24 },
    { month: "March 2026", attendance: "96%", sales: "₱256,890", shifts: 22 },
  ];

  const performanceMetrics = [
    { label: "Attendance Rate", value: "98%", trend: "+2%", status: "excellent" },
    { label: "Punctuality", value: "95%", trend: "+5%", status: "good" },
    { label: "Reports Submitted", value: "23/23", trend: "100%", status: "excellent" },
    { label: "Customer Feedback", value: "4.8/5.0", trend: "+0.2", status: "excellent" },
  ];

  const achievements = [
    { title: "Perfect Attendance", date: "April 2026", icon: Award },
    { title: "Top Seller", date: "March 2026", icon: TrendingUp },
    { title: "Employee of the Month", date: "February 2026", icon: Award },
  ];

  return (
    <div>
      <Header title="My Reports" breadcrumbs={["Home", "Reports"]} />

      <div className="p-8 space-y-6">
        {/* Performance Overview */}
        <div className="bg-gradient-to-r from-[#622F1E] to-[#8b5234] rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-2xl mb-2">Performance Overview</h2>
          <p className="text-white/80 mb-6">Your performance summary for May 2026</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">Overall Rating</p>
              <p className="text-3xl">4.8</p>
              <p className="text-xs text-white/80 mt-1">Excellent</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">Total Hours</p>
              <p className="text-3xl">184h</p>
              <p className="text-xs text-white/80 mt-1">This month</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">Sales Contribution</p>
              <p className="text-3xl">₱267K</p>
              <p className="text-xs text-white/80 mt-1">Above target</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">Shifts Completed</p>
              <p className="text-3xl">23</p>
              <p className="text-xs text-white/80 mt-1">100% completion</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-xl bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#6b6b6b]">{metric.label}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      metric.status === "excellent"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {metric.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl text-[#2d2d2d]">{metric.value}</p>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{metric.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Monthly Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(98,47,30,0.1)]">
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Month</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Attendance Rate</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Sales Contribution</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Shifts Completed</th>
                </tr>
              </thead>
              <tbody>
                {monthlyStats.map((stat, index) => (
                  <tr
                    key={index}
                    className="border-b border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{stat.month}</td>
                    <td className="py-4 px-4 text-sm text-green-600">{stat.attendance}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{stat.sales}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{stat.shifts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Achievements & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#622F1E] to-[#8b5234] text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <p className="text-sm mb-1">{achievement.title}</p>
                <p className="text-xs text-white/80">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Reports */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Download Detailed Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Attendance Report</p>
                <p className="text-xs text-[#6b6b6b]">Full attendance history</p>
              </div>
            </button>

            <button className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Sales Report</p>
                <p className="text-xs text-[#6b6b6b]">Sales performance data</p>
              </div>
            </button>

            <button className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Schedule History</p>
                <p className="text-xs text-[#6b6b6b]">Past shifts and schedules</p>
              </div>
            </button>

            <button className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2d2d2d]">Performance Summary</p>
                <p className="text-xs text-[#6b6b6b]">Overall performance metrics</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
