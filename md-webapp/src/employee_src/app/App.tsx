import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { DashboardLayout } from "./components/DashboardLayout";

import { InventoryMonitoringPage } from "./pages/InventoryMonitoringPage";

import StockInHistoryPage from "./pages/StockInHistoryPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >
        <Route
          index
          element={
            <Navigate to="/dashboard/inventory" />
          }
        />

        <Route
          path="inventory"
          element={<InventoryMonitoringPage />}
        />

        <Route
          path="stock-history"
          element={<StockInHistoryPage />}
        />
      </Route>
    </Routes>
  );
}