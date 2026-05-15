import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* LOGIN */
import { LoginPage } from "./admin_src/app/pages/LoginPage";

/* PROTECTED ROUTES */
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import ProtectedEmployeeRoute from "./ProtectedEmployeeRoute";

/* ADMIN */
import {
  AttendanceManagementPage,
} from "./admin_src/app/pages/AttendanceManagementPage";

import {
  DashboardLayout as AdminDashboardLayout,
} from "./admin_src/app/components/DashboardLayout";

import {
  DashboardPage,
} from "./admin_src/app/pages/DashboardPage";

import {
  ProductManagementPage,
} from "./admin_src/app/pages/ProductManagementPage";

import ReportsPage from "./admin_src/app/pages/ReportsPage";

/* EMPLOYEE */
import {
  EmployeeNotificationsPage,
} from "./employee_src/app/pages/EmployeeNotificationsPage";

import {
  EmployeeProfilePage,
} from "./employee_src/app/pages/EmployeeProfilePage";

import {
  EmployeeReportsPage,
} from "./employee_src/app/pages/EmployeeReportsPage";

import {
  EmployeeAttendancePage,
} from "./employee_src/app/pages/EmployeeAttendancePage";

import {
  EmployeeDashboardLayout,
} from "./employee_src/app/components/EmployeeDashboardLayout";

import {
  EmployeeDashboardPage,
} from "./employee_src/app/pages/EmployeeDashboardPage";

import {
  InventoryMonitoringPage,
} from "./employee_src/app/pages/InventoryMonitoringPage";

import StockInHistoryPage from "./employee_src/app/pages/StockInHistoryPage";

import StockOutPage from "./employee_src/app/pages/StockOutPage";

import StockOutHistoryPage from "./employee_src/app/pages/StockOutHistoryPage";

export default function App() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route
        path="/"
        element={<LoginPage />}
      />

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute>
            <AdminDashboardLayout />
          </ProtectedAdminRoute>
        }
      >

        {/* ADMIN HOME */}
        <Route
          index
          element={<DashboardPage />}
        />

        {/* PRODUCTS */}
        <Route
          path="products"
          element={<ProductManagementPage />}
        />

        {/* INVENTORY */}
        <Route
          path="inventory"
          element={<InventoryMonitoringPage />}
        />

        {/* STOCK HISTORY */}
        <Route
          path="stock-history"
          element={<StockInHistoryPage />}
        />

        {/* STOCK OUT */}
        <Route
          path="stock-out"
          element={<StockOutPage />}
        />

        {/* STOCK OUT HISTORY */}
        <Route
          path="stock-out-history"
          element={<StockOutHistoryPage />}
        />

        {/* REPORTS */}
        <Route
          path="reports"
          element={<ReportsPage />}
        />

        {/* ATTENDANCE */}
        <Route
  path="attendance"
  element={<AttendanceManagementPage />}
/>

      </Route>

      {/* ================= EMPLOYEE ROUTES ================= */}
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedEmployeeRoute>
            <EmployeeDashboardLayout />
          </ProtectedEmployeeRoute>
        }
      >

        {/* EMPLOYEE HOME */}
        <Route
          index
          element={<EmployeeDashboardPage />}
        />

        {/* INVENTORY */}
        <Route
          path="inventory"
          element={<InventoryMonitoringPage />}
        />

        {/* STOCK HISTORY */}
        <Route
          path="stock-history"
          element={<StockInHistoryPage />}
        />

        {/* STOCK OUT */}
        <Route
          path="stock-out"
          element={<StockOutPage />}
        />

        {/* STOCK OUT HISTORY */}
        <Route
          path="stock-out-history"
          element={<StockOutHistoryPage />}
        />

        {/* ATTENDANCE */}
        <Route
          path="attendance"
          element={<EmployeeAttendancePage />}
        />

        {/* REPORTS */}
        <Route
          path="reports"
          element={<EmployeeReportsPage />}
        />

        {/* NOTIFICATIONS */}
        <Route
          path="notifications"
          element={<EmployeeNotificationsPage />}
        />

        {/* PROFILE */}
        <Route
          path="profile"
          element={<EmployeeProfilePage />}
        />

      </Route>

      {/* FALLBACK */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}