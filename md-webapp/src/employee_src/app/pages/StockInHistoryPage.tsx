import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";

export default function StockInHistoryPage() {

  const [historyData, setHistoryData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/stock-in"
      );

      setHistoryData(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const columns = [
    { key: "product_name", label: "Product" },
    { key: "quantity_added", label: "Quantity Added" },
    { key: "created_at", label: "Date & Time" },
  ];

  return (

    <div>

      <Header
        title="Stock-In History"
        breadcrumbs={["Home", "Stock History"]}
      />

      <div className="p-8">

        {loading ? (

          <div className="bg-white p-8 rounded-2xl text-center">
            Loading history...
          </div>

        ) : (

          <DataTable
            columns={columns}
            data={historyData}
          />

        )}

      </div>

    </div>

  );

}