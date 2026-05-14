import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";

import {
  Search,
  Package,
} from "lucide-react";

type Product = {
  product_id: number;
  product_name: string;
  price: string;
  line_name: string;
};

const columns = [
  { key: "id", label: "Product ID", width: "15%" },
  { key: "name", label: "Product Name", width: "35%" },
  { key: "category", label: "Category", width: "25%" },
  { key: "price", label: "Price", width: "25%" },
];

export function ProductManagementPage() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("");

  /* =====================================================
     FETCH PRODUCTS
  ===================================================== */

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  /* =====================================================
     FILTER PRODUCTS
  ===================================================== */

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.product_name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "" ||
        product.line_name ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  /* =====================================================
     UNIQUE CATEGORIES
  ===================================================== */

  const uniqueCategories = [
    ...new Set(
      products.map(
        (product) => product.line_name
      )
    ),
  ];

  /* =====================================================
     TABLE CELL RENDER
  ===================================================== */

  const renderCell = (
    key: string,
    value: any,
    row: any
  ) => {

    if (key === "category") {

      return (
        <span className="px-3 py-1 rounded-lg text-xs bg-[#622F1E] text-white">
          {row.line_name}
        </span>
      );

    }

    if (key === "price") {

      return `₱${value}`;

    }

    return value;

  };

  /* =====================================================
     TABLE DATA
  ===================================================== */

  const tableData =
    filteredProducts.map((product) => ({
      id: product.product_id,
      name: product.product_name,
      category: product.line_name,
      price: product.price,
      line_name: product.line_name,
    }));

  return (

    <div>

      <Header
        title="Products"
        breadcrumbs={[
          "Home",
          "Products",
        ]}
      />

      <div className="p-8 space-y-6">

        {/* ACTION BAR */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex flex-col md:flex-row gap-4">

            {/* SEARCH */}

            <div className="relative">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none"
              />

            </div>

            {/* CATEGORY FILTER */}

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value
                )
              }
              className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none"
            >

              <option value="">
                All Categories
              </option>

              {uniqueCategories.map(
                (category, index) => (

                  <option
                    key={index}
                    value={category}
                  >
                    {category}
                  </option>

                )
              )}

            </select>

          </div>

        </div>

        {/* SUMMARY CARD */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">

            <div className="flex items-start justify-between mb-2">

              <p className="text-sm text-[#6b6b6b]">
                Total Products
              </p>

              <div className="w-10 h-10 rounded-xl bg-[#622F1E]/10 flex items-center justify-center">

                <Package className="w-5 h-5 text-[#622F1E]" />

              </div>

            </div>

            <p className="text-3xl text-[#2d2d2d]">
              {filteredProducts.length}
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">

            <p className="text-sm text-[#6b6b6b] mb-2">
              Categories
            </p>

            <p className="text-3xl text-[#622F1E]">
              {uniqueCategories.length}
            </p>

          </div>

        </div>

        {/* TABLE */}

        {loading ? (

          <div className="bg-white rounded-2xl p-8 text-center">
            Loading products...
          </div>

        ) : (

          <DataTable
            columns={columns}
            data={tableData}
            renderCell={renderCell}
          />

        )}

      </div>

    </div>

  );

}