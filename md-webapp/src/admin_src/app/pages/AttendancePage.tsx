import { useState } from "react";

export default function AttendancePage() {

  const [employees, setEmployees] =
    useState([
      {
        id: 1,
        name: "Juan Dela Cruz",
        status: "Present",
      },
      {
        id: 2,
        name: "Maria Santos",
        status: "Absent",
      },
      {
        id: 3,
        name: "Pedro Reyes",
        status: "Present",
      },
    ]);

  const toggleStatus = (id: number) => {

    const updated =
      employees.map((employee) => {

        if (employee.id === id) {

          return {
            ...employee,
            status:
              employee.status === "Present"
                ? "Absent"
                : "Present",
          };

        }

        return employee;

      });

    setEmployees(updated);

  };

  return (

    <div className="min-h-screen bg-[#F8F5F1] p-6 md:p-8">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-4xl md:text-5xl font-bold text-[#622F1E] tracking-tight">

          Attendance Tracker

        </h1>

        <p className="text-gray-600 mt-2 text-lg">

          Monitor and manage employee attendance records

        </p>

      </div>

      {/* MAIN CONTAINER */}

      <div className="bg-white rounded-3xl shadow-lg border border-[rgba(98,47,30,0.08)] p-8">

        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full border-separate border-spacing-y-2">

            <thead>

              <tr className="bg-[#622F1E] text-white">

                <th className="p-4 text-left rounded-l-2xl">
                  Employee ID
                </th>

                <th className="p-4 text-left">
                  Employee Name
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left rounded-r-2xl">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map((employee) => (

                <tr
                  key={employee.id}
                  className="bg-white shadow-sm hover:shadow-md hover:bg-[#FAF7F2] transition-all duration-300 rounded-2xl"
                >

                  <td className="p-4 rounded-l-2xl font-medium text-[#2d2d2d]">
                    {employee.id}
                  </td>

                  <td className="p-4 text-[#2d2d2d]">
                    {employee.name}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        employee.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td className="p-4 rounded-r-2xl">

                    <button
                      onClick={() =>
                        toggleStatus(employee.id)
                      }
                      className="bg-[#622F1E] text-white px-5 py-2 rounded-2xl shadow-md hover:bg-[#4a2316] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Toggle
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}