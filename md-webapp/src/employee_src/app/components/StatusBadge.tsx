interface StatusBadgeProps {
  status: string;
  type?: "success" | "warning" | "danger" | "info" | "neutral";
}

const statusStyles = {
  success: "bg-green-100 text-green-700 border-green-200",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
  danger: "bg-red-100 text-red-700 border-red-200",
  info: "bg-blue-100 text-blue-700 border-blue-200",
  neutral: "bg-gray-100 text-gray-700 border-gray-200",
};

export function StatusBadge({ status, type = "neutral" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs border ${statusStyles[type]}`}
    >
      {status}
    </span>
  );
}
