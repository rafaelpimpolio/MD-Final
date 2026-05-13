import { useEffect, useState } from "react";
import axios from "axios";

export default function StockOutPage() {

  const [inventory, setInventory] =
    useState<any[]>([]);

  const [inventoryId, setInventoryId] =
    useState("");

  const [quantityOut, setQuantityOut] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  /* =====================================================
     FETCH INVENTORY
  ===================================================== */

  useEffect(() => {

    fetchInventory();

  }, []);

  const fetchInventory = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/inventory"
      );

      setInventory(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* =====================================================
     HANDLE STOCK OUT
  ===================================================== */

  const handleStockOut = async () => {

    if (
      !inventoryId ||
      !quantityOut
    ) {
      alert("Please complete all fields");

      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/stock-out",
        {
          inventory_id: inventoryId,
          quantity_out: quantityOut,
          remarks: remarks
        }
      );

      alert(
        "Stock out recorded successfully"
      );

      setInventoryId("");

      setQuantityOut("");

      setRemarks("");

      fetchInventory();

    } catch (error: any) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to record stock out"
      );

    }

  };

  return (

    <div className="p-8">

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl">

        <h1 className="text-3xl text-[#622F1E] mb-6">
          Stock Out
        </h1>

        {/* PRODUCT */}

        <div className="mb-4">

          <label className="block mb-2 text-sm">
            Product
          </label>

          <select
            value={inventoryId}
            onChange={(e) =>
              setInventoryId(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          >

            <option value="">
              Select Product
            </option>

            {inventory.map((item: any) => (

              <option
                key={item.inventory_id}
                value={item.inventory_id}
              >
                {item.product_name}
                {" "}
                (Stock:
                {" "}
                {item.current_stock})
              </option>

            ))}

          </select>

        </div>

        {/* QUANTITY */}

        <div className="mb-4">

          <label className="block mb-2 text-sm">
            Quantity Out
          </label>

          <input
            type="number"
            value={quantityOut}
            onChange={(e) =>
              setQuantityOut(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

        </div>

        {/* REMARKS */}

        <div className="mb-6">

          <label className="block mb-2 text-sm">
            Remarks
          </label>

          <textarea
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={handleStockOut}
          className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Submit Stock Out
        </button>

      </div>

    </div>

  );

}