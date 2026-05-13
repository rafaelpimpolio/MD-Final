import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./components/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { ProductManagementPage } from "./pages/ProductManagementPage";

export default function App() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<LoginPage />} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />

        <Route
          path="products"
          element={<ProductManagementPage />}
        />
      </Route>
    </Routes>
  );
}