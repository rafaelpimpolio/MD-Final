import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  bgColor?: string;
}

export function SummaryCard({ title, value, icon: Icon, trend, bgColor = "white" }: SummaryCardProps) {
  return (
    <div className={`bg-${bgColor} rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-[#6b6b6b] mb-2">{title}</p>
          <p className="text-3xl text-[#2d2d2d] mb-2">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#622F1E] bg-opacity-10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#622F1E]" />
        </div>
      </div>
    </div>
  );
}
