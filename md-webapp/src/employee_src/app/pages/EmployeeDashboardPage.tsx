import { Header } from "../components/Header";
import { Clock, FileText, Package, CalendarDays, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export function EmployeeDashboardPage() {

  const currentTime =
  new Date().toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }
  );
  return (
    <div>
      <Header title="Dashboard" breadcrumbs={["Home"]} />

      <div className="p-8 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#622F1E] to-[#8b5234] rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-2xl mb-2">Welcome back, Maria!</h2>
          <p className="text-white/80">SM Manila Branch • Morning Shift • Today: May 11, 2026</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-sm text-white/80">Current Status</p>
              <p className="text-xl mt-1">Clocked In</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-sm text-white/80">Time In</p>
              <p className="text-xl mt-1">
  {currentTime}
</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-sm text-white/80">Hours Today</p>
              <p className="text-xl mt-1">3h 24m</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg text-[#2d2d2d] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)] hover:shadow-md transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#2d2d2d] mb-1">Clock In/Out</p>
              <p className="text-xs text-[#6b6b6b]">Record your attendance</p>
            </button>

            <button className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)] hover:shadow-md transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#2d2d2d] mb-1">Submit Sales Report</p>
              <p className="text-xs text-[#6b6b6b]">Daily sales submission</p>
            </button>

            <button className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)] hover:shadow-md transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#2d2d2d] mb-1">Record Inventory</p>
              <p className="text-xs text-[#6b6b6b]">Update stock usage</p>
            </button>

            <button className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)] hover:shadow-md transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center mb-4">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#2d2d2d] mb-1">View Schedule</p>
              <p className="text-xs text-[#6b6b6b]">Check your shifts</p>
            </button>
          </div>
        </div>

        {/* Today's Summary & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Summary */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-4">Today's Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2d2d2d]">Attendance Recorded</p>
                  <p className="text-xs text-[#6b6b6b]">Clocked in at 06:05 AM</p>
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">Complete</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2d2d2d]">Sales Report Pending</p>
                  <p className="text-xs text-[#6b6b6b]">Due by end of shift</p>
                </div>
                <span className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Pending</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2d2d2d]">Inventory Update Pending</p>
                  <p className="text-xs text-[#6b6b6b]">Update stock levels</p>
                </div>
                <span className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Pending</span>
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <h3 className="text-lg text-[#2d2d2d] mb-4">Notifications</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border-l-4 border-[#622F1E]">
                <p className="text-sm text-[#2d2d2d] mb-1">Shift Reminder</p>
                <p className="text-xs text-[#6b6b6b]">Your shift starts at 6:00 AM tomorrow</p>
                <p className="text-xs text-[#6b6b6b] mt-1">2 hours ago</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F2]">
                <p className="text-sm text-[#2d2d2d] mb-1">Sales Target Update</p>
                <p className="text-xs text-[#6b6b6b]">Branch target for May: ₱250,000</p>
                <p className="text-xs text-[#6b6b6b] mt-1">1 day ago</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F2]">
                <p className="text-sm text-[#2d2d2d] mb-1">New Product Launch</p>
                <p className="text-xs text-[#6b6b6b]">Summer Special Donuts available now</p>
                <p className="text-xs text-[#6b6b6b] mt-1">3 days ago</p>
              </div>
            </div>
            <button className="w-full mt-4 text-center text-sm text-[#622F1E] hover:underline">
              View All Notifications
            </button>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Attendance Rate</p>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">98%</p>
            <p className="text-xs text-green-600 mt-1">+2% from last month</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Reports Submitted</p>
              <FileText className="w-4 h-4 text-[#622F1E]" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">23</p>
            <p className="text-xs text-[#6b6b6b] mt-1">This month</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">Shifts Completed</p>
              <CalendarDays className="w-4 h-4 text-[#622F1E]" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">23</p>
            <p className="text-xs text-[#6b6b6b] mt-1">This month</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">On-Time Rate</p>
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-3xl text-[#2d2d2d]">95%</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Excellent punctuality</p>
          </div>
        </div>

        {/* Upcoming Shifts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Upcoming Shifts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
              <div className="text-center">
                <p className="text-2xl text-[#622F1E]">12</p>
                <p className="text-xs text-[#6b6b6b]">TUE</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#2d2d2d]">Morning Shift</p>
                <p className="text-xs text-[#6b6b6b]">06:00 AM - 02:00 PM • SM Manila Branch</p>
              </div>
              <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Tomorrow</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
              <div className="text-center">
                <p className="text-2xl text-[#622F1E]">13</p>
                <p className="text-xs text-[#6b6b6b]">WED</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#2d2d2d]">Morning Shift</p>
                <p className="text-xs text-[#6b6b6b]">06:00 AM - 02:00 PM • SM Manila Branch</p>
              </div>
              <span className="text-xs text-[#6b6b6b] bg-gray-100 px-3 py-1 rounded-full">In 2 days</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
              <div className="text-center">
                <p className="text-2xl text-[#622F1E]">14</p>
                <p className="text-xs text-[#6b6b6b]">THU</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#2d2d2d]">Afternoon Shift</p>
                <p className="text-xs text-[#6b6b6b]">02:00 PM - 10:00 PM • SM Manila Branch</p>
              </div>
              <span className="text-xs text-[#6b6b6b] bg-gray-100 px-3 py-1 rounded-full">In 3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
