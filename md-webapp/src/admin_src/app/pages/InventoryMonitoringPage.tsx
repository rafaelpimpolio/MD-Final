import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";

import {
  Search,
  Plus,
  TrendingDown,
  TrendingUp,
  Package,
} from "lucide-react";

export function InventoryMonitoringPage() {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     FETCH INVENTORY
     ========================================================= */
  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/inventory"
      );

      const mappedData = response.data.map((item: any) => {
        let status = "Normal";

        if (item.current_stock <= 5) {
          status = "Critical";
        } else if (item.current_stock <= 20) {
          status = "Low";
        }

        return {
          id: item.product_id,
          product: item.product_name,
          category: item.line_name,
          stockIn: item.current_stock,
          usage: 0,
          available: item.current_stock,
          price: item.price,
          status,
        };
      });

      setInventoryData(mappedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     TABLE COLUMNS
     ========================================================= */
  const columns = [
    { key: "id", label: "Product ID", width: "10%" },
    { key: "product", label: "Product Name", width: "22%" },
    { key: "category", label: "Category", width: "14%" },
    { key: "price", label: "Price", width: "10%" },
    { key: "stockIn", label: "Current Stock", width: "12%" },
    { key: "available", label: "Available", width: "12%" },
    { key: "status", label: "Stock Status", width: "12%" },
    { key: "actions", label: "Actions", width: "8%" },
  ];

  /* =========================================================
     RENDER CELLS
     ========================================================= */
  const renderCell = (key: string, value: any) => {
    if (key === "status") {
      const typeMap: Record<string, any> = {
        Normal: "success",
        Low: "warning",
        Critical: "danger",
      };

      return (
        <StatusBadge
          status={value}
          type={typeMap[value] || "neutral"}
        />
      );
    }

    if (key === "category") {
      return (
        <span className="px-3 py-1 rounded-lg text-xs bg-[#622F1E] text-white">
          {value}
        </span>
      );
    }

    if (key === "price") {
      return `₱${value}`;
    }

    if (key === "actions") {
      return (
        <button className="px-3 py-1 rounded-lg bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors text-xs">
          View
        </button>
      );
    }

    return value;
  };

  /* =========================================================
     SUMMARY
     ========================================================= */
  const totalProducts = inventoryData.length;

  const totalStock = inventoryData.reduce(
    (sum, item) => sum + item.available,
    0
  );

  const lowStockItems = inventoryData.filter(
    (item) =>
      item.status === "Low" ||
      item.status === "Critical"
  ).length;

  return (
    <div>
      <Header
        title="Inventory & Stock Monitoring"
        breadcrumbs={["Home", "Inventory"]}
      />

      <div className="p-8 space-y-6">

        {/* ACTION BAR */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />

              <input
                type="text"
                placeholder="Search inventory..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none"
              />
            </div>

          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white">
            <Plus className="w-5 h-5" />
            <span>Record Stock-In</span>
          </button>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">
                Total Products
              </p>

              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>

            <p className="text-3xl text-[#2d2d2d]">
              {totalProducts}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">
                Remaining Stock
              </p>

              <div className="w-10 h-10 rounded-xl bg-[#622F1E] bg-opacity-10 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#622F1E]" />
              </div>
            </div>

            <p className="text-3xl text-[#622F1E]">
              {totalStock}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-[#6b6b6b]">
                Low Stock Items
              </p>

              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
            </div>

            <p className="text-3xl text-red-600">
              {lowStockItems}
            </p>
          </div>
        </div>

        {/* INVENTORY TABLE */}
        {loading ? (
          <div className="bg-white p-8 rounded-2xl text-center">
            Loading inventory...
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={inventoryData}
            renderCell={renderCell}
          />
        )}
      </div>
    </div>
  );
}