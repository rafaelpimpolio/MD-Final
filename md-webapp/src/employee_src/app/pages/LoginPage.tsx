import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Coffee, Eye, EyeOff } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );

      const user = res.data.user;

      // Check role properly
      if (user.role === "employee") {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard"); // Employee dashboard
      } else {
        setError("Unauthorized access");
      }

    } catch (err) {
      console.log("LOGIN ERROR:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#FAF7F2] to-[#D4C4B0] flex items-center justify-center p-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#622F1E]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#622F1E]"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-[rgba(98,47,30,0.1)]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#622F1E] mb-4">
              <Coffee className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl text-[#622F1E] mb-2">AFIRM</h1>
            <p className="text-sm text-[#6b6b6b]">Employee Web Portal</p>
            <p className="text-sm text-[#2d2d2d] mt-2">Employee Login</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm text-[#2d2d2d] mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-[#2d2d2d] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(98,47,30,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b6b] hover:text-[#622F1E]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-[#622F1E] hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#622F1E] text-white py-3 rounded-xl hover:bg-[#4a2316] transition-colors shadow-md"
            >
              Login
            </button>
          </form>

          <p className="text-center text-xs text-[#6b6b6b] mt-8">
            Mister Donut Employee Portal - Attendance, Sales & Inventory Management
          </p>
        </div>
      </div>
    </div>
  );
}