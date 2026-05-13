import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LoginPage } from "./admin_src/app/pages/LoginPage";

import AttendancePage from "./admin_src/app/pages/AttendancePage";

import { DashboardLayout } from "./admin_src/app/components/DashboardLayout";

import { DashboardPage } from "./admin_src/app/pages/DashboardPage";

import { ProductManagementPage } from "./admin_src/app/pages/ProductManagementPage";

/* SHARED PAGES */

import { InventoryMonitoringPage } from "./employee_src/app/pages/InventoryMonitoringPage";

import StockInHistoryPage from "./employee_src/app/pages/StockInHistoryPage";

import StockOutPage from "./employee_src/app/pages/StockOutPage";

import StockOutHistoryPage from "./employee_src/app/pages/StockOutHistoryPage";

/* ADMIN */

import ReportsPage from "./admin_src/app/pages/ReportsPage";

export default function App() {

  return (

    <Routes>

      {/* LOGIN */}

      <Route
        path="/"
        element={<LoginPage />}
      />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >

        {/* HOME */}

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

        {/* STOCK IN HISTORY */}

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
          element={<AttendancePage />}
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