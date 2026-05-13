import { Header } from "../components/Header";
import { DataTable } from "../components/DataTable";
import { StatusBadge } from "../components/StatusBadge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

const productsData = [
  {
    id: "PRD-001",
    name: "Classic Glazed Donut",
    category: "Donuts",
    price: "₱50.00",
    status: "Active",
    lastUpdated: "2026-03-15",
  },
  {
    id: "PRD-002",
    name: "Chocolate Donut",
    category: "Donuts",
    price: "₱60.00",
    status: "Active",
    lastUpdated: "2026-03-15",
  },
  {
    id: "PRD-003",
    name: "Bavarian Donut",
    category: "Donuts",
    price: "₱60.00",
    status: "Active",
    lastUpdated: "2026-03-10",
  },
  {
    id: "PRD-004",
    name: "Premium Coffee",
    category: "Beverages",
    price: "₱75.00",
    status: "Active",
    lastUpdated: "2026-03-18",
  },
  {
    id: "PRD-005",
    name: "Iced Coffee",
    category: "Beverages",
    price: "₱75.00",
    status: "Active",
    lastUpdated: "2026-03-18",
  },
  {
    id: "PRD-006",
    name: "Croissant",
    category: "Pastries",
    price: "₱85.00",
    status: "Active",
    lastUpdated: "2026-03-12",
  },
  {
    id: "PRD-007",
    name: "Cheese Danish",
    category: "Pastries",
    price: "₱90.00",
    status: "Active",
    lastUpdated: "2026-03-12",
  },
  {
    id: "PRD-008",
    name: "Hot Chocolate",
    category: "Beverages",
    price: "₱80.00",
    status: "Inactive",
    lastUpdated: "2026-02-28",
  },
];

const columns = [
  { key: "id", label: "Product ID", width: "12%" },
  { key: "name", label: "Product Name", width: "25%" },
  { key: "category", label: "Category", width: "15%" },
  { key: "price", label: "Unit Price", width: "12%" },
  { key: "status", label: "Status", width: "12%" },
  { key: "lastUpdated", label: "Last Updated", width: "14%" },
  { key: "actions", label: "Actions", width: "10%" },
];

export function ProductManagementPage() {
  const renderCell = (key: string, value: any, row: any) => {
    if (key === "status") {
      return (
        <StatusBadge
          status={value}
          type={value === "Active" ? "success" : "neutral"}
        />
      );
    }
    if (key === "category") {
      const colors: Record<string, string> = {
        Donuts: "bg-[#622F1E] text-white",
        Beverages: "bg-blue-100 text-blue-700",
        Pastries: "bg-orange-100 text-orange-700",
      };
      return (
        <span className={`px-3 py-1 rounded-lg text-xs ${colors[value] || "bg-gray-100 text-gray-700"}`}>
          {value}
        </span>
      );
    }
    if (key === "actions") {
      return (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-[#FAF7F2] rounded-lg transition-colors">
            <Eye className="w-4 h-4 text-[#6b6b6b]" />
          </button>
          <button className="p-1 hover:bg-[#FAF7F2] rounded-lg transition-colors">
            <Edit className="w-4 h-4 text-[#6b6b6b]" />
          </button>
          <button className="p-1 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      );
    }
    return value;
  };

  return (
    <div>
      <Header
        title="Product Management"
        breadcrumbs={["Home", "Master Data", "Products"]}
      />

      <div className="p-8 space-y-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b]" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white w-80 focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Categories</option>
              <option>Donuts</option>
              <option>Beverages</option>
              <option>Pastries</option>
            </select>

            {/* Status Filter */}
            <select className="px-4 py-2 rounded-xl border border-[rgba(98,47,30,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#622F1E] focus:border-transparent">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Add Product Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#622F1E] text-white hover:bg-[#4a2316] transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            <span>Add Product</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Total Products</p>
            <p className="text-3xl text-[#2d2d2d]">48</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Active Products</p>
            <p className="text-3xl text-green-600">45</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Categories</p>
            <p className="text-3xl text-[#622F1E]">5</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
            <p className="text-sm text-[#6b6b6b] mb-2">Avg Price</p>
            <p className="text-3xl text-[#2d2d2d]">₱68</p>
          </div>
        </div>

        {/* Products Table */}
        <DataTable columns={columns} data={productsData} renderCell={renderCell} />

        {/* Master Data Navigation */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(98,47,30,0.1)]">
          <h3 className="text-lg text-[#2d2d2d] mb-4">Master Data Management</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/master-data/products"
              className="p-4 rounded-xl bg-[#622F1E] text-white text-center hover:bg-[#4a2316] transition-colors"
            >
              Products
            </a>
            <a
              href="/master-data/branches"
              className="p-4 rounded-xl bg-[#D4C4B0] text-[#2d2d2d] text-center hover:bg-[#c4b4a0] transition-colors"
            >
              Branches
            </a>
            <a
              href="/master-data/employees"
              className="p-4 rounded-xl bg-[#D4C4B0] text-[#2d2d2d] text-center hover:bg-[#c4b4a0] transition-colors"
            >
              Employees
            </a>
            <a
              href="/master-data/shifts"
              className="p-4 rounded-xl bg-[#D4C4B0] text-[#2d2d2d] text-center hover:bg-[#c4b4a0] transition-colors"
            >
              Shifts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
