import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  product_id: number;
  product_name: string;
  price: string;
  line_id: number;
  line_name: string;
};

type Line = {
  line_id: number;
  line_name: string;
};

export function ProductManagementPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [lines, setLines] = useState<Line[]>([]);

  // SEARCH
  const [searchTerm, setSearchTerm] =
    useState("");

  // CATEGORY FILTER
  const [selectedCategory, setSelectedCategory] =
    useState("");

  // EDIT STATES
  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [editName, setEditName] = useState("");

  const [editPrice, setEditPrice] = useState("");

  const [editLineId, setEditLineId] =
    useState("");

  // ADD PRODUCT STATES
  const [showAddModal, setShowAddModal] =
    useState(false);

  const [newName, setNewName] = useState("");

  const [newPrice, setNewPrice] = useState("");

  const [newLineId, setNewLineId] =
    useState("");

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // FETCH LINES
  const fetchLines = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/lines"
      );

      setLines(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();

    fetchLines();
  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.product_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        product.line_name === selectedCategory;

      return (
        matchesSearch && matchesCategory
      );
    }
  );

  // DELETE PRODUCT
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      fetchProducts();

      alert("Product deleted successfully");
    } catch (error) {
      console.log(error);

      alert("Failed to delete product");
    }
  };

  // OPEN EDIT MODAL
  const handleEditClick = (product: Product) => {
    setEditingProduct(product);

    setEditName(product.product_name);

    setEditPrice(product.price);

    setEditLineId(product.line_id.toString());
  };

  // UPDATE PRODUCT
  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    try {
      await axios.put(
        `http://localhost:5000/api/products/${editingProduct.product_id}`,
        {
          product_name: editName,
          price: editPrice,
          line_id: editLineId,
        }
      );

      alert("Product updated successfully");

      setEditingProduct(null);

      fetchProducts();
    } catch (error) {
      console.log(error);

      alert("Failed to update product");
    }
  };

  // ADD PRODUCT
  const handleAddProduct = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/products",
        {
          product_name: newName,
          price: newPrice,
          line_id: newLineId,
        }
      );

      alert("Product added successfully");

      setShowAddModal(false);

      setNewName("");

      setNewPrice("");

      setNewLineId("");

      fetchProducts();
    } catch (error) {
      console.log(error);

      alert("Failed to add product");
    }
  };

  return (
    <div className="p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-[#622F1E]">
          Product Management
        </h1>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#622F1E] text-white px-4 py-2 rounded-lg hover:bg-[#4a2316] transition"
        >
          Add Product
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full md:w-[300px] border p-2 rounded-lg"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="w-full md:w-[300px] border p-2 rounded-lg"
        >
          <option value="">
            All Categories
          </option>

          {[
            ...new Map(
              products.map((product) => [
                product.line_name,
                product.line_name,
              ])
            ).values(),
          ].map((lineName) => (
            <option
              key={lineName}
              value={lineName}
            >
              {lineName}
            </option>
          ))}
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#622F1E] text-white">
            <tr>
              <th className="text-left p-4">ID</th>

              <th className="text-left p-4">
                Product Name
              </th>

              <th className="text-left p-4">
                Price
              </th>

              <th className="text-left p-4">
                Category
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.product_id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {product.product_id}
                </td>

                <td className="p-4">
                  {product.product_name}
                </td>

                <td className="p-4">
                  ₱ {product.price}
                </td>

                <td className="p-4">
                  {product.line_name}
                </td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEditClick(product)
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          product.product_id
                        )
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">
            <h2 className="text-2xl mb-4 text-[#622F1E]">
              Edit Product
            </h2>

            <input
              type="text"
              placeholder="Product Name"
              value={editName}
              onChange={(e) =>
                setEditName(e.target.value)
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="number"
              placeholder="Price"
              value={editPrice}
              onChange={(e) =>
                setEditPrice(e.target.value)
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <select
              value={editLineId}
              onChange={(e) =>
                setEditLineId(e.target.value)
              }
              className="w-full border p-2 mb-5 rounded"
            >
              <option value="">
                Select Category
              </option>

              {lines.map((line) => (
                <option
                  key={line.line_id}
                  value={line.line_id}
                >
                  {line.line_name}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() =>
                  setEditingProduct(null)
                }
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdateProduct}
                className="px-4 py-2 bg-[#622F1E] text-white rounded hover:bg-[#4a2316] transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD PRODUCT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">
            <h2 className="text-2xl mb-4 text-[#622F1E]">
              Add Product
            </h2>

            <input
              type="text"
              placeholder="Product Name"
              value={newName}
              onChange={(e) =>
                setNewName(e.target.value)
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="number"
              placeholder="Price"
              value={newPrice}
              onChange={(e) =>
                setNewPrice(e.target.value)
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <select
              value={newLineId}
              onChange={(e) =>
                setNewLineId(e.target.value)
              }
              className="w-full border p-2 mb-5 rounded"
            >
              <option value="">
                Select Category
              </option>

              {lines.map((line) => (
                <option
                  key={line.line_id}
                  value={line.line_id}
                >
                  {line.line_name}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() =>
                  setShowAddModal(false)
                }
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-[#622F1E] text-white rounded hover:bg-[#4a2316] transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}