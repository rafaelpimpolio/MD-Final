import { ReactNode } from "react";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  renderCell?: (key: string, value: any, row: any) => ReactNode;
}

export function DataTable({ columns, data, renderCell }: DataTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[rgba(98,47,30,0.1)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#D4C4B0] bg-opacity-30">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm text-[#2d2d2d]"
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(98,47,30,0.1)]">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-[#6b6b6b]"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-[#FAF7F2] transition-colors">
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 text-sm text-[#2d2d2d]">
                      {renderCell
                        ? renderCell(column.key, row[column.key], row)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
