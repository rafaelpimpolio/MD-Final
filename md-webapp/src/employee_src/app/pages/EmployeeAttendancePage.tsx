import { Header } from "../components/Header";
import { StatusBadge } from "../components/StatusBadge";

import {
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

export function EmployeeAttendancePage() {

  const [isClockedIn, setIsClockedIn] =
    useState(false);

  const [timeIn, setTimeIn] =
    useState("--:--");

  const [attendanceHistory, setAttendanceHistory] =
    useState<any[]>([]);

    const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

  // FETCH ATTENDANCE
  useEffect(() => {
    fetchAttendance();

    const checkActiveAttendance = async () => {

  try {

    const res = await axios.get(
      `http://localhost:5000/api/attendance/active/${user.employee_id}`
    );

    if (res.data.active) {

      setIsClockedIn(true);

      setTimeIn(res.data.attendance.time_in);

    }

  } catch (err) {
    console.log(err);
  }

};
    checkActiveAttendance();
  }, []);

  const fetchAttendance = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/attendance/${user.employee_id}`
      );

      setAttendanceHistory(res.data);

    } catch (err) {
      console.log(err);
    }

  };

  // CLOCK IN / CLOCK OUT
  const handleAttendance = async () => {

    try {

      if (!isClockedIn) {

        await axios.post(
          "http://localhost:5000/api/attendance/clock-in",
          {
            employee_id: user.employee_id,
            shift_id: 1,
          }
        );

        const currentTime =
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

        setTimeIn(currentTime);

        setIsClockedIn(true);

      } else {

        await axios.post(
  `http://localhost:5000/api/attendance/clock-out-by-employee/${user.employee_id}`
);

        setIsClockedIn(false);

      }

      fetchAttendance();

    } catch (err) {
      console.log(err);
    }

  };

  return (

    <div>

      <Header
        title="Attendance"
        breadcrumbs={[
          "Home",
          "Attendance",
        ]}
      />

      <div className="p-8 space-y-6">

        {/* CLOCK CARD */}

        <div className="bg-gradient-to-br from-[#622F1E] to-[#8b5234] rounded-2xl p-8 text-white shadow-lg">

          <div className="flex items-start justify-between mb-6">

            <div>

              <h2 className="text-2xl mb-2">
                Time Clock
              </h2>

              <p className="text-white/80">
                Monday, May 11, 2026
              </p>

            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">

              <p className="text-sm text-white/80">
                Current Time
              </p>

              <p className="text-xl mt-1">

                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}

              </p>

            </div>

          </div>

          {/* TIME CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">

              <div className="flex items-center gap-3 mb-3">

                <Clock className="w-5 h-5" />

                <p className="text-sm text-white/80">
                  Time In
                </p>

              </div>

              <p className="text-3xl">
                {isClockedIn ? timeIn : "--:--"}
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">

              <div className="flex items-center gap-3 mb-3">

                <Clock className="w-5 h-5" />

                <p className="text-sm text-white/80">
                  Time Out
                </p>

              </div>

              <p className="text-3xl">
                {isClockedIn ? "--:--" : "Completed"}
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">

              <div className="flex items-center gap-3 mb-3">

                <Clock className="w-5 h-5" />

                <p className="text-sm text-white/80">
                  Status
                </p>

              </div>

              <p className="text-2xl">

                {isClockedIn
                  ? "Working"
                  : "Off Duty"}

              </p>

            </div>

          </div>

          {/* LOCATION */}

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">

            <div className="flex items-center gap-3 mb-3">

              <MapPin className="w-5 h-5" />

              <p className="text-sm text-white/80">
                Location
              </p>

            </div>

            <p className="text-lg">
              Wonder Water Equipment and Supplies Trading
            </p>

            <p className="text-sm text-white/80 mt-1">
              Philippines
            </p>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleAttendance}
            className={`w-full py-4 rounded-xl text-xl transition-all ${
              isClockedIn
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-white hover:bg-gray-100 text-[#622F1E]"
            }`}
          >

            {isClockedIn
              ? "Clock Out"
              : "Clock In"}

          </button>

        </div>

        {/* ATTENDANCE TABLE */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-lg text-[#2d2d2d]">
              Attendance History
            </h3>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">

              <Calendar className="w-4 h-4" />

              <span className="text-sm">
                View History
              </span>

            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-[rgba(98,47,30,0.1)]">

                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">
                    Date
                  </th>

                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">
                    Time In
                  </th>

                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">
                    Time Out
                  </th>

                  <th className="text-left py-3 px-4 text-sm text-[#6b6b6b]">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {attendanceHistory.map(
                  (record, index) => (

                    <tr
                      key={index}
                      className="border-b border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2]"
                    >

                      <td className="py-4 px-4 text-sm text-[#2d2d2d]">

                        {new Date(
                          record.date
                        ).toLocaleDateString()}

                      </td>

                      <td className="py-4 px-4 text-sm text-[#2d2d2d]">

                        {record.time_in || "--"}

                      </td>

                      <td className="py-4 px-4 text-sm text-[#2d2d2d]">

                        {record.time_out || "--"}

                      </td>

                      <td className="py-4 px-4">

                        <StatusBadge
                          status={record.status}
                          type={
                            record.status === "Present"
                              ? "success"
                              : "warning"
                          }
                        />

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}