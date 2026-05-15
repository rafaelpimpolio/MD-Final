import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import {
  Search,
  Calendar,
  Download,
  FileText,
} from "lucide-react";

import { useEffect, useState } from "react";

const columns = [
  { key: "date", label: "Date", width: "10%" },
  {
    key: "employee_name",
    label: "Employee Name",
    width: "15%",
  },
  { key: "branch", label: "Branch", width: "12%" },
  { key: "shift", label: "Shift", width: "10%" },
  { key: "timeIn", label: "Time In", width: "10%" },
  { key: "timeOut", label: "Time Out", width: "10%" },
  { key: "status", label: "Status", width: "10%" },
  { key: "remarks", label: "Remarks", width: "23%" },
];

export function AttendanceManagementPage() {

  const [attendanceData, setAttendanceData] =
    useState<any[]>([]);

  useEffect(() => {

    fetch(
      "http://localhost:5000/api/attendance"
    )
      .then((res) => res.json())
      .then((data) => {

        const formattedData = data.map(
          (item: any) => ({

            ...item,

            branch: "Main Branch",

            shift: "Morning",

            remarks:
              item.status === "Present"
                ? "-"
                : item.status === "Late"
                ? "Late employee"
                : "Needs attention",

            timeIn: item.time_in
              ? new Date(
                  `1970-01-01T${item.time_in}`
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "-",

            timeOut: item.time_out
              ? new Date(
                  `1970-01-01T${item.time_out}`
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "-",

          })
        );

        setAttendanceData(formattedData);

      })
      .catch((err) =>
        console.log(err)
      );

  }, []);

  const renderCell = (
    key: string,
    value: any
  ) => {

    if (key === "status") {

      const typeMap: Record<string, any> = {
        Present: "success",
        Late: "warning",
        Incomplete: "warning",
        Absent: "danger",
      };

      return (
        <StatusBadge
          status={value}
          type={
            typeMap[value] || "neutral"
          }
        />
      );
    }

    return value;
  };

  return (

    <div>

      <Header
        title="Attendance Management"
        breadcrumbs={[
          "Home",
          "Attendance",
        ]}
      />

      <div className="p-8 space-y-6">

        {/* FILTERS */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />

              <input
                type="text"
                placeholder="Search employee..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E]"
              />

            </div>

            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white">
              <option>
                All Branches
              </option>
            </select>

            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white">
              <option>
                All Status
              </option>
            </select>

          </div>

          <div className="flex items-center gap-3">

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2]">

              <Calendar className="w-4 h-4" />

              <span>Date Range</span>

            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316]">

              <Download className="w-4 h-4" />

              <span>Export</span>

            </button>

          </div>

        </div>

        {/* SUMMARY */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <p className="text-sm text-[#6b6b6b] mb-2">
              Total Attendance Records
            </p>

            <p className="text-3xl text-green-600">
              {attendanceData.length}
            </p>

            <p className="text-xs text-[#6b6b6b] mt-1">
              database records
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <p className="text-sm text-[#6b6b6b] mb-2">
              Present
            </p>

            <p className="text-3xl text-green-600">
              {
                attendanceData.filter(
                  (item) =>
                    item.status ===
                    "Present"
                ).length
              }
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <p className="text-sm text-[#6b6b6b] mb-2">
              Late
            </p>

            <p className="text-3xl text-yellow-600">
              {
                attendanceData.filter(
                  (item) =>
                    item.status ===
                    "Late"
                ).length
              }
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">

            <p className="text-sm text-[#6b6b6b] mb-2">
              Absent
            </p>

            <p className="text-3xl text-red-600">
              {
                attendanceData.filter(
                  (item) =>
                    item.status ===
                    "Absent"
                ).length
              }
            </p>

          </div>

        </div>

        {/* TABLE */}

        <DataTable
          columns={columns}
          data={attendanceData}
          renderCell={renderCell}
        />

        {/* REPORTS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border">

          <h3 className="text-lg text-[#2d2d2d] mb-4">
            Attendance Reports
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <button className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30">

              <div className="w-12 h-12 rounded-xl bg-[#622F1E] flex items-center justify-center">

                <FileText className="w-6 h-6 text-white" />

              </div>

              <div>

                <p className="text-sm text-[#2d2d2d]">
                  Daily Attendance Report
                </p>

                <p className="text-xs text-[#6b6b6b]">
                  View today's attendance
                </p>

              </div>

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}