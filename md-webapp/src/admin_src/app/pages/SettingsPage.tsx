import { Header } from "../components/Header";
import { User, Lock, Bell, Shield } from "lucide-react";
import { useState } from "react";

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      <Header title="Settings / Profile" breadcrumbs={["Home", "Settings"]} />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[rgba(98,47,30,0.1)]">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === "profile"
                      ? "bg-[#622F1E] text-white"
                      : "text-[#2d2d2d] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === "security"
                      ? "bg-[#622F1E] text-white"
                      : "text-[#2d2d2d] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <Lock className="w-5 h-5" />
                  <span>Security</span>
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === "notifications"
                      ? "bg-[#622F1E] text-white"
                      : "text-[#2d2d2d] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
                <button
                  onClick={() => setActiveTab("session")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === "session"
                      ? "bg-[#622F1E] text-white"
                      : "text-[#2d2d2d] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <Shield className="w-5 h-5" />
                  <span>Session</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
                <h2 className="text-2xl text-[#2d2d2d] mb-6">Profile Information</h2>
                
                {/* Profile Picture */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-[#622F1E] flex items-center justify-center">
                    <span className="text-white text-3xl">CM</span>
                  </div>
                  <div>
                    <button className="px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors mr-3">
                      Change Photo
                    </button>
                    <button className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Profile Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#2d2d2d] mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Core"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#2d2d2d] mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Manager"
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="admin@afirm.com"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+63 917-123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">Role</label>
                    <input
                      type="text"
                      value="Admin / Core Manager"
                      disabled
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-[#FAF7F2] text-[#6b6b6b]"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "security" && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
                <h2 className="text-2xl text-[#2d2d2d] mb-6">Change Password</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#2d2d2d] mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                    />
                  </div>

                  <div className="bg-[#FAF7F2] p-4 rounded-xl">
                    <p className="text-sm text-[#6b6b6b] mb-2">Password requirements:</p>
                    <ul className="text-xs text-[#6b6b6b] space-y-1 ml-4 list-disc">
                      <li>At least 8 characters long</li>
                      <li>Contains uppercase and lowercase letters</li>
                      <li>Contains at least one number</li>
                      <li>Contains at least one special character</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors"
                    >
                      Update Password
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white hover:bg-[#FAF7F2] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
                <h2 className="text-2xl text-[#2d2d2d] mb-6">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
                    <div>
                      <p className="text-sm text-[#2d2d2d]">Daily Sales Reports</p>
                      <p className="text-xs text-[#6b6b6b]">Receive daily sales summary notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#622F1E] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#622F1E]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
                    <div>
                      <p className="text-sm text-[#2d2d2d]">Low Stock Alerts</p>
                      <p className="text-xs text-[#6b6b6b]">Get notified when stock levels are low</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#622F1E] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#622F1E]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
                    <div>
                      <p className="text-sm text-[#2d2d2d]">Late Report Submissions</p>
                      <p className="text-xs text-[#6b6b6b]">Alert when reports are submitted late</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#622F1E] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#622F1E]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2]">
                    <div>
                      <p className="text-sm text-[#2d2d2d]">Attendance Anomalies</p>
                      <p className="text-xs text-[#6b6b6b]">Notify about attendance issues</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#622F1E] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#622F1E]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "session" && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
                <h2 className="text-2xl text-[#2d2d2d] mb-6">Session & Security Settings</h2>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-[#FAF7F2]">
                    <p className="text-sm text-[#2d2d2d] mb-2">Current Session</p>
                    <p className="text-xs text-[#6b6b6b]">Logged in since: March 23, 2026 08:00 AM</p>
                    <p className="text-xs text-[#6b6b6b]">IP Address: 192.168.1.100</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F2]">
                    <p className="text-sm text-[#2d2d2d] mb-2">Session Timeout</p>
                    <select className="mt-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>4 hours</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors">
                      Logout from All Devices
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
