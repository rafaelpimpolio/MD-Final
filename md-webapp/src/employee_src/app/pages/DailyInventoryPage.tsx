import { useEffect, useState } from "react";

export default function DailyInventoryPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const increase = (inventory_id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.inventory_id === inventory_id
          ? {
              ...item,
              current_stock: item.current_stock + 1,
            }
          : item
      )
    );
  };

  const decrease = (inventory_id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.inventory_id === inventory_id
          ? {
              ...item,
              current_stock: Math.max(0, item.current_stock - 1),
            }
          : item
      )
    );
  };

  const submitInventory = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/inventory/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }
    );

    const data = await response.json();

    alert(data.message);
  } catch (error) {
    console.error(error);

    alert("Failed to update inventory");
  }
};

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#7A3318]">
          Daily Inventory
        </h1>

        <p className="mt-1 text-base text-gray-600">
          Count remaining products before shift end
        </p>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.inventory_id}
            className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
          >
            <div>
              <h2 className="text-2xl font-semibold text-[#2B1B12]">
  {product.product_name}
</h2>

              <p className="mt-1 text-sm text-gray-500">
                Remaining quantity
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Minus */}
              <button
                onClick={() => decrease(product.inventory_id)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600 hover:bg-red-200"
              >
                -
              </button>

              {/* Count */}
              <span className="w-8 text-center text-2xl font-bold text-[#2B1B12]">
                {product.current_stock}
              </span>

              {/* Plus */}
              <button
                onClick={() => increase(product.inventory_id)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600 hover:bg-green-200"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-6 mb-8">
        <button
  onClick={submitInventory}
  className="w-full rounded-2xl bg-[#7A3318] py-3 text-lg font-semibold text-white shadow-md hover:opacity-90"
>
  Submit Inventory
</button>
      </div>
    </div>
  );
}