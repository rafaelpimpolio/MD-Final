import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";

export default function StockOutHistoryPage() {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     FETCH STOCK-OUT HISTORY
  ========================================================= */
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/stock-out");
      setHistoryData(response.data);
    } catch (error) {
      console.error("Stock-out history fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     TABLE COLUMNS
  ========================================================= */
  const columns = [
    { key: "product_name", label: "Product" },
    { key: "quantity_out", label: "Quantity Out" },
    { key: "remarks", label: "Remarks" },
    { key: "created_at", label: "Date & Time" },
  ];

  return (
    <div>
      <Header
        title="Stock-Out History"
        breadcrumbs={["Home", "Stock-Out History"]}
      />

      <div className="p-8">
        {loading ? (
          <div className="bg-white p-8 rounded-2xl text-center">
            Loading stock-out history...
          </div>
        ) : (
          <DataTable columns={columns} data={historyData} />
        )}
      </div>
    </div>
  );
}