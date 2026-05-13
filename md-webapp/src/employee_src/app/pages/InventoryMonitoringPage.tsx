import { useEffect, useState } from "react";

import axios from "axios";

import {
  Search,
  Plus,
  TrendingDown,
  TrendingUp,
  Package,
} from "lucide-react";

export function InventoryMonitoringPage() {

  const [inventoryData, setInventoryData] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedInventoryId, setSelectedInventoryId] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  /* =====================================================
     FETCH INVENTORY
  ===================================================== */

  useEffect(() => {

    fetchInventory();

  }, []);

  const fetchInventory = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/inventory"
      );

      const inventoryArray =
        Array.isArray(response.data)
          ? response.data
          : [];

      setInventoryData(inventoryArray);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  /* =====================================================
     STOCK IN
  ===================================================== */

  const handleStockIn = async () => {

    if (
      !selectedInventoryId ||
      !quantity
    ) {
      alert("Please complete all fields");

      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/stock-in",
        {
          inventory_id:
            selectedInventoryId,

          quantity_added:
            quantity,

          remarks:
            "Manual stock-in"
        }
      );

      alert(
        "Stock added successfully"
      );

      setShowModal(false);

      setSelectedInventoryId("");

      setQuantity("");

      fetchInventory();

    } catch (error) {

      console.log(error);

      alert("Failed to add stock");

    }

  };

  /* =====================================================
     SUMMARY
  ===================================================== */

  const totalProducts =
    inventoryData.length;

  const totalStock =
    inventoryData.reduce(
      (sum, item) =>
        sum + Number(item.current_stock),
      0
    );

  const lowStockItems =
    inventoryData.filter(
      (item) =>
        Number(item.current_stock) <= 20
    ).length;

  return (

    <div className="p-8 space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl text-[#622F1E] font-bold">
            Inventory Monitoring
          </h1>

          <p className="text-gray-500">
            Manage and monitor inventory stocks
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#622F1E] text-white px-5 py-3 rounded-xl hover:bg-[#4a2316] transition"
        >
          <Plus size={18} />

          Record Stock-In
        </button>

      </div>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* TOTAL PRODUCTS */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Products
              </p>

              <h2 className="text-3xl font-bold text-[#622F1E]">
                {totalProducts}
              </h2>

            </div>

            <div className="bg-green-100 p-3 rounded-xl">

              <TrendingUp className="text-green-600" />

            </div>

          </div>

        </div>

        {/* TOTAL STOCK */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Remaining Stock
              </p>

              <h2 className="text-3xl font-bold text-[#622F1E]">
                {totalStock}
              </h2>

            </div>

            <div className="bg-[#622F1E]/10 p-3 rounded-xl">

              <Package className="text-[#622F1E]" />

            </div>

          </div>

        </div>

        {/* LOW STOCK */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Low Stock Items
              </p>

              <h2 className="text-3xl font-bold text-red-600">
                {lowStockItems}
              </h2>

            </div>

            <div className="bg-red-100 p-3 rounded-xl">

              <TrendingDown className="text-red-600" />

            </div>

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div className="relative w-full md:w-[350px]">

        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />

        <input
          type="text"
          placeholder="Search inventory..."
          className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#622F1E]"
        />

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        {loading ? (

          <div className="p-8 text-center">
            Loading inventory...
          </div>

        ) : (

          <table className="w-full">

            <thead className="bg-[#622F1E] text-white">

              <tr>

                <th className="p-4 text-left">
                  Product
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Price
                </th>

                <th className="p-4 text-left">
                  Current Stock
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {inventoryData.map((item: any) => {

                const stock =
                  Number(item.current_stock);

                let status =
                  "Normal";

                let statusColor =
                  "text-green-600";

                if (stock <= 5) {

                  status =
                    "Critical";

                  statusColor =
                    "text-red-600";

                } else if (
                  stock <= 20
                ) {

                  status =
                    "Low";

                  statusColor =
                    "text-yellow-600";

                }

                return (

                  <tr
                    key={item.inventory_id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4">
                      {item.product_name}
                    </td>

                    <td className="p-4">
                      {item.line_name}
                    </td>

                    <td className="p-4">
                      ₱ {item.price}
                    </td>

                    <td className="p-4">

  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${
      stock <= 10
        ? "bg-red-100 text-red-600"
        : "bg-green-100 text-green-600"
    }`}
  >
    {stock}
  </span>

</td>

                    <td
                      className={`p-4 font-semibold ${statusColor}`}
                    >
                      {status}
                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        )}

      </div>

      {/* STOCK IN MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[400px]">

            <h2 className="text-2xl font-bold mb-6 text-[#622F1E]">
              Record Stock-In
            </h2>

            {/* PRODUCT */}

            <div className="mb-4">

              <label className="block mb-2 text-sm">
                Product
              </label>

              <select
                value={selectedInventoryId}
                onChange={(e) =>
                  setSelectedInventoryId(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-xl"
              >

                <option value="">
                  Select Product
                </option>

                {inventoryData.map(
                  (item: any) => (

                    <option
                      key={item.inventory_id}
                      value={
                        item.inventory_id
                      }
                    >
                      {item.product_name}
                    </option>

                  )
                )}

              </select>

            </div>

            {/* QUANTITY */}

            <div className="mb-6">

              <label className="block mb-2 text-sm">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-xl"
              />

            </div>

            {/* BUTTONS */}

            <div className="flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="px-4 py-2 rounded-xl bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleStockIn}
                className="px-4 py-2 rounded-xl bg-[#622F1E] text-white"
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}