import { Header } from "../components/Header";
import { StatusBadge } from "../components/StatusBadge";
import { Clock, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export function EmployeeAttendancePage() {
  const [isClockedIn, setIsClockedIn] = useState(true);
  const [timeIn, setTimeIn] = useState("06:05 AM");

  const attendanceHistory = [
    { date: "2026-05-10", timeIn: "06:03 AM", timeOut: "02:05 PM", hours: "8h 2m", status: "Present" },
    { date: "2026-05-09", timeIn: "06:00 AM", timeOut: "02:00 PM", hours: "8h 0m", status: "Present" },
    { date: "2026-05-08", timeIn: "06:15 AM", timeOut: "02:10 PM", hours: "7h 55m", status: "Late" },
    { date: "2026-05-07", timeIn: "06:05 AM", timeOut: "02:00 PM", hours: "7h 55m", status: "Present" },
    { date: "2026-05-06", timeIn: "06:00 AM", timeOut: "02:02 PM", hours: "8h 2m", status: "Present" },
  ];

  return (
    <div>
      <Header title="Attendance" breadcrumbs={["Home", "Attendance"]} />

      <div className="p-8 space-y-6">
        {/* Clock In/Out Card */}
        <div className="bg-gradient-to-br from-[#622F1E] to-[#8b5234] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl mb-2">Time Clock</h2>
              <p className="text-white/80">Monday, May 11, 2026</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-sm text-white/80">Current Time</p>
              <p className="text-xl mt-1">09:29 AM</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5" />
                <p className="text-sm text-white/80">Time In</p>
              </div>
              <p className="text-3xl">{isClockedIn ? timeIn : "--:--"}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5" />
                <p className="text-sm text-white/80">Time Out</p>
              </div>
              <p className="text-3xl">{isClockedIn ? "--:--" : "02:10 PM"}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5" />
                <p className="text-sm text-white/80">Hours Today</p>
              </div>
              <p className="text-3xl">{isClockedIn ? "3h 24m" : "8h 5m"}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5" />
              <p className="text-sm text-white/80">Location</p>
            </div>
            <p className="text-lg">SM Manila Branch</p>
            <p className="text-sm text-white/80 mt-1">North EDSA, Quezon City</p>
          </div>

          <button
            onClick={() => setIsClockedIn(!isClockedIn)}
            className={`w-full py-4 rounded-xl text-xl transition-all ${
              isClockedIn
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-white hover:bg-gray-100 text-[#622F1E]"
            }`}
          >
            {isClockedIn ? "Clock Out" : "Clock In"}
          </button>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">This Month</p>
            <p className="text-3xl text-[#2d2d2d]">23</p>
            <p className="text-xs text-[#6b6b6b] mt-1">Days worked</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Hours</p>
            <p className="text-3xl text-[#2d2d2d]">184h</p>
            <p className="text-xs text-green-600 mt-1">On track</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Late Count</p>
            <p className="text-3xl text-orange-600">1</p>
            <p className="text-xs text-[#6b6b6b] mt-1">This month</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Attendance Rate</p>
            <p className="text-3xl text-green-600">98%</p>
            <p className="text-xs text-green-600 mt-1">Excellent</p>
          </div>
        </div>

        {/* Attendance History */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-[#2d2d2d]">Recent Attendance</h3>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">View Full History</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(98,47,30,0.1)]">
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Date</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Time In</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Time Out</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Hours</th>
                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceHistory.map((record, index) => (
                  <tr key={index} className="border-b border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{record.date}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{record.timeIn}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{record.timeOut}</td>
                    <td className="py-4 px-4 text-sm text-[#2d2d2d]">{record.hours}</td>
                    <td className="py-4 px-4">
                      <StatusBadge
                        status={record.status}
                        type={record.status === "Present" ? "success" : "warning"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes & Reminders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Important Reminders</h3>
          <ul className="space-y-2 text-sm text-[#6b6b6b]">
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Clock in within 15 minutes of your scheduled shift start time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Remember to clock out at the end of your shift</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Report any attendance issues to your supervisor immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Location verification is required for clock in/out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
