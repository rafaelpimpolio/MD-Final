import { Header } from "../components/Header";
import { Bell, Clock, TrendingUp, Calendar, AlertCircle, CheckCircle, Info } from "lucide-react";

export function EmployeeNotificationsPage() {
  const notifications = [
    {
      type: "reminder",
      icon: Clock,
      title: "Shift Reminder",
      message: "Your morning shift starts at 6:00 AM tomorrow (May 12)",
      time: "2 hours ago",
      read: false,
    },
    {
      type: "info",
      icon: Info,
      title: "Sales Target Update",
      message: "Great job! Branch achieved 107% of May sales target",
      time: "5 hours ago",
      read: false,
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Report Approved",
      message: "Your daily sales report for May 10 has been approved",
      time: "1 day ago",
      read: true,
    },
    {
      type: "alert",
      icon: AlertCircle,
      title: "Inventory Alert",
      message: "Glazed donuts are running low. Please notify supervisor",
      time: "1 day ago",
      read: true,
    },
    {
      type: "info",
      icon: Calendar,
      title: "Schedule Updated",
      message: "Your shift schedule for next week has been published",
      time: "2 days ago",
      read: true,
    },
    {
      type: "success",
      icon: TrendingUp,
      title: "Performance Recognition",
      message: "Congratulations! You achieved 98% attendance rate this month",
      time: "3 days ago",
      read: true,
    },
    {
      type: "info",
      icon: Bell,
      title: "New Product Launch",
      message: "Summer Special Donuts now available. Learn about new items",
      time: "3 days ago",
      read: true,
    },
    {
      type: "reminder",
      icon: Clock,
      title: "Training Session",
      message: "Customer service training scheduled for May 15 at 10:00 AM",
      time: "4 days ago",
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIconColor = (type: string) => {
    switch (type) {
      case "reminder":
        return "text-blue-600 bg-blue-100";
      case "success":
        return "text-green-600 bg-green-100";
      case "alert":
        return "text-red-600 bg-red-100";
      case "info":
        return "text-[#622F1E] bg-[#FAF7F2]";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      <Header title="Notifications" breadcrumbs={["Home", "Notifications"]} />

      <div className="p-8 space-y-6">
        {/* Notification Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-[#2d2d2d] mb-1">Your Notifications</h3>
              <p className="text-sm text-[#6b6b6b]">
                You have {unreadCount} unread {unreadCount === 1 ? "notification" : "notifications"}
              </p>
            </div>
            <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors text-sm">
              Mark All as Read
            </button>
          </div>
        </div>

        {/* Notification Types Filter */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-xl bg-[#622F1E] text-white text-sm whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors text-sm whitespace-nowrap">
            Reminders
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors text-sm whitespace-nowrap">
            Alerts
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors text-sm whitespace-nowrap">
            Updates
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors text-sm whitespace-nowrap">
            Achievements
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border transition-all cursor-pointer hover:shadow-md ${
                notification.read
                  ? "border-[rgba(98,47,30,0.1)]"
                  : "border-[#622F1E] border-2"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(notification.type)}`}>
                  <notification.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm text-[#2d2d2d]">{notification.title}</h4>
                    {!notification.read && (
                      <span className="w-2 h-2 rounded-full bg-[#622F1E]"></span>
                    )}
                  </div>
                  <p className="text-sm text-[#6b6b6b] mb-2">{notification.message}</p>
                  <p className="text-xs text-[#6b6b6b]">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
              <div>
                <p className="text-sm text-[#2d2d2d] mb-1">Shift Reminders</p>
                <p className="text-xs text-[#6b6b6b]">Get notified before your shifts start</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#622F1E] transition-colors"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
              <div>
                <p className="text-sm text-[#2d2d2d] mb-1">Sales Targets</p>
                <p className="text-xs text-[#6b6b6b]">Updates on sales performance and targets</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#622F1E] transition-colors"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
              <div>
                <p className="text-sm text-[#2d2d2d] mb-1">Inventory Alerts</p>
                <p className="text-xs text-[#6b6b6b]">Low stock and inventory notifications</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#622F1E] transition-colors"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
              <div>
                <p className="text-sm text-[#2d2d2d] mb-1">Schedule Changes</p>
                <p className="text-xs text-[#6b6b6b]">Updates to your shift schedule</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#622F1E] transition-colors"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
              <div>
                <p className="text-sm text-[#2d2d2d] mb-1">Recognition & Achievements</p>
                <p className="text-xs text-[#6b6b6b]">Performance recognition and awards</p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#622F1E] transition-colors"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
