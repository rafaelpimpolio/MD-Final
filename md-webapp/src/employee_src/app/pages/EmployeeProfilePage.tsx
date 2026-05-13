import { Header } from "../components/Header";
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit } from "lucide-react";

export function EmployeeProfilePage() {
  return (
    <div>
      <Header title="My Profile" breadcrumbs={["Home", "Profile"]} />

      <div className="p-8 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-[#622F1E] flex items-center justify-center text-white text-3xl">
              MS
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl text-[#2d2d2d] mb-2">Maria Santos</h2>
                  <p className="text-sm text-[#6b6b6b]">Employee ID: EMP-2024-0156</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] hover:bg-[#FAF7F2] transition-colors">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit Profile</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2]">
                  <Briefcase className="w-5 h-5 text-[#622F1E]" />
                  <div>
                    <p className="text-xs text-[#6b6b6b]">Position</p>
                    <p className="text-sm text-[#2d2d2d]">Sales Associate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2]">
                  <MapPin className="w-5 h-5 text-[#622F1E]" />
                  <div>
                    <p className="text-xs text-[#6b6b6b]">Branch</p>
                    <p className="text-sm text-[#2d2d2d]">SM Manila</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2]">
                  <Calendar className="w-5 h-5 text-[#622F1E]" />
                  <div>
                    <p className="text-xs text-[#6b6b6b]">Join Date</p>
                    <p className="text-sm text-[#2d2d2d]">January 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2]">
                  <User className="w-5 h-5 text-[#622F1E]" />
                  <div>
                    <p className="text-xs text-[#6b6b6b]">Employment Status</p>
                    <p className="text-sm text-[#2d2d2d]">Full-Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#622F1E]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b6b]">Email Address</p>
                <p className="text-sm text-[#2d2d2d]">maria.santos@misterdonut.ph</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#622F1E]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b6b]">Phone Number</p>
                <p className="text-sm text-[#2d2d2d]">+63 917 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#622F1E]" />
              </div>
              <div>
                <p className="text-xs text-[#6b6b6b]">Home Address</p>
                <p className="text-sm text-[#2d2d2d]">123 Main St, Quezon City, Metro Manila</p>
              </div>
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Employment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Department</p>
              <p className="text-sm text-[#2d2d2d]">Sales & Operations</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Employment Type</p>
              <p className="text-sm text-[#2d2d2d]">Full-Time Permanent</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Years of Service</p>
              <p className="text-sm text-[#2d2d2d]">1 year, 4 months</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Direct Supervisor</p>
              <p className="text-sm text-[#2d2d2d]">Carlos Mendoza</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Shift Pattern</p>
              <p className="text-sm text-[#2d2d2d]">Rotating (Morning/Afternoon)</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Contract End Date</p>
              <p className="text-sm text-[#2d2d2d]">Permanent</p>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Performance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2]">
              <p className="text-sm text-[#6b6b6b] mb-2">Overall Rating</p>
              <p className="text-3xl text-[#2d2d2d]">4.8</p>
              <p className="text-xs text-green-600 mt-1">Excellent</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2]">
              <p className="text-sm text-[#6b6b6b] mb-2">Attendance Rate</p>
              <p className="text-3xl text-[#2d2d2d]">98%</p>
              <p className="text-xs text-green-600 mt-1">Above target</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2]">
              <p className="text-sm text-[#6b6b6b] mb-2">Customer Rating</p>
              <p className="text-3xl text-[#2d2d2d]">4.9</p>
              <p className="text-xs text-green-600 mt-1">Outstanding</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2]">
              <p className="text-sm text-[#6b6b6b] mb-2">Sales Performance</p>
              <p className="text-3xl text-[#2d2d2d]">107%</p>
              <p className="text-xs text-green-600 mt-1">Above target</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Contact Name</p>
              <p className="text-sm text-[#2d2d2d]">Juan Santos</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Relationship</p>
              <p className="text-sm text-[#2d2d2d]">Spouse</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Phone Number</p>
              <p className="text-sm text-[#2d2d2d]">+63 917 987 6543</p>
            </div>
            <div>
              <p className="text-xs text-[#6b6b6b] mb-2">Email</p>
              <p className="text-sm text-[#2d2d2d]">juan.santos@email.com</p>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Account Settings</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <span className="text-sm text-[#2d2d2d]">Change Password</span>
              <span className="text-[#622F1E]">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <span className="text-sm text-[#2d2d2d]">Notification Preferences</span>
              <span className="text-[#622F1E]">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] hover:bg-[#D4C4B0]/30 transition-colors">
              <span className="text-sm text-[#2d2d2d]">Privacy Settings</span>
              <span className="text-[#622F1E]">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
