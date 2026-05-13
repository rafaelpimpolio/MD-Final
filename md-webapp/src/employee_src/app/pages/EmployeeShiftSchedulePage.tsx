import { Header } from "../components/Header";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export function EmployeeShiftSchedulePage() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentWeek = [
    { date: 11, shifts: [{ time: "6:00 AM - 2:00 PM", type: "Morning", current: true }] },
    { date: 12, shifts: [{ time: "6:00 AM - 2:00 PM", type: "Morning" }] },
    { date: 13, shifts: [{ time: "6:00 AM - 2:00 PM", type: "Morning" }] },
    { date: 14, shifts: [{ time: "2:00 PM - 10:00 PM", type: "Afternoon" }] },
    { date: 15, shifts: [{ time: "2:00 PM - 10:00 PM", type: "Afternoon" }] },
    { date: 16, shifts: [] },
    { date: 17, shifts: [] },
  ];

  const upcomingShifts = [
    {
      date: "May 12, 2026",
      day: "Tuesday",
      time: "6:00 AM - 2:00 PM",
      type: "Morning",
      branch: "SM Manila",
    },
    {
      date: "May 13, 2026",
      day: "Wednesday",
      time: "6:00 AM - 2:00 PM",
      type: "Morning",
      branch: "SM Manila",
    },
    {
      date: "May 14, 2026",
      day: "Thursday",
      time: "2:00 PM - 10:00 PM",
      type: "Afternoon",
      branch: "SM Manila",
    },
    {
      date: "May 15, 2026",
      day: "Friday",
      time: "2:00 PM - 10:00 PM",
      type: "Afternoon",
      branch: "SM Manila",
    },
  ];

  const shiftStats = [
    { label: "This Month", value: "23", sub: "Shifts completed" },
    { label: "This Week", value: "5", sub: "Scheduled shifts" },
    { label: "Total Hours", value: "184h", sub: "This month" },
    { label: "Rest Days", value: "8", sub: "This month" },
  ];

  return (
    <div>
      <Header title="Shift Schedule" breadcrumbs={["Home", "Schedule"]} />

      <div className="p-8 space-y-6">
        {/* Shift Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {shiftStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
              <p className="text-sm text-[#6b6b6b] mb-2">{stat.label}</p>
              <p className="text-3xl text-[#2d2d2d]">{stat.value}</p>
              <p className="text-xs text-[#6b6b6b] mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Weekly Calendar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-[#2d2d2d]">Week View - May 11-17, 2026</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                <ChevronLeft className="w-5 h-5 text-[#6b6b6b]" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                <ChevronRight className="w-5 h-5 text-[#6b6b6b]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-[#6b6b6b] mb-3">{day}</p>
                <div
                  className={`p-4 rounded-xl min-h-[120px] ${
                    currentWeek[index].shifts.length > 0
                      ? currentWeek[index].shifts[0].current
                        ? "bg-[#622F1E] text-white"
                        : "bg-[#FAF7F2] border-2 border-[#D4C4B0]"
                      : "bg-gray-50"
                  }`}
                >
                  <p className="text-2xl mb-2">{currentWeek[index].date}</p>
                  {currentWeek[index].shifts.length > 0 ? (
                    <div>
                      <p className="text-xs mb-1">{currentWeek[index].shifts[0].type}</p>
                      <p className="text-xs">{currentWeek[index].shifts[0].time}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400">Rest Day</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#622F1E]"></div>
              <span className="text-[#6b6b6b]">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#FAF7F2] border-2 border-[#D4C4B0]"></div>
              <span className="text-[#6b6b6b]">Scheduled</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-50"></div>
              <span className="text-[#6b6b6b]">Rest Day</span>
            </div>
          </div>
        </div>

        {/* Upcoming Shifts List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Upcoming Shifts</h3>
          <div className="space-y-3">
            {upcomingShifts.map((shift, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2]">
                <div className="w-16 text-center">
                  <p className="text-2xl text-[#622F1E]">{shift.date.split(" ")[1].replace(",", "")}</p>
                  <p className="text-xs text-[#6b6b6b]">{shift.day.substring(0, 3).toUpperCase()}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#2d2d2d] mb-1">{shift.type} Shift</p>
                  <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{shift.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{shift.branch}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    shift.type === "Morning"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {shift.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shift Types Reference */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Shift Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-[#2d2d2d] mb-1">Morning Shift</p>
              <p className="text-xs text-[#6b6b6b]">6:00 AM - 2:00 PM (8 hours)</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p className="text-sm text-[#2d2d2d] mb-1">Afternoon Shift</p>
              <p className="text-xs text-[#6b6b6b]">2:00 PM - 10:00 PM (8 hours)</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <p className="text-sm text-[#2d2d2d] mb-1">Evening Shift</p>
              <p className="text-xs text-[#6b6b6b]">10:00 PM - 6:00 AM (8 hours)</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Schedule Guidelines</h3>
          <ul className="space-y-2 text-sm text-[#6b6b6b]">
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Check your schedule regularly for any updates or changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Notify your supervisor at least 48 hours in advance for shift swap requests</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Arrive 15 minutes before your shift starts for proper handover</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#622F1E] mt-1">•</span>
              <span>Contact branch manager for any schedule-related concerns</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
