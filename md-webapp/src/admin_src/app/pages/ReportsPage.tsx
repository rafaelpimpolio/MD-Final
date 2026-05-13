import { useEffect, useState } from "react";

import axios from "axios";

import {
  Package,
  Archive,
  ArrowDownCircle,
  ArrowUpCircle,
  AlertTriangle,
  DollarSign,
  Users,
} from "lucide-react";

export default function ReportsPage() {

  const [products, setProducts] =
    useState(0);

  const [inventory, setInventory] =
    useState(0);

  const [stockIn, setStockIn] =
    useState(0);

  const [stockOut, setStockOut] =
    useState(0);

  const [lowStock, setLowStock] =
    useState<any[]>([]);

  const [dailySales, setDailySales] =
    useState<any[]>([]);

  const [employeeSales, setEmployeeSales] =
    useState<any[]>([]);

  const [dashboardSummary, setDashboardSummary] =
    useState<any>(null);

  useEffect(() => {

    fetchReports();

  }, []);

  const fetchReports = async () => {

    try {

      const productsRes =
        await axios.get(
          "http://localhost:5000/api/products"
        );

      setProducts(
        productsRes.data.length
      );

      const inventoryRes =
        await axios.get(
          "http://localhost:5000/api/inventory"
        );

      setInventory(
        inventoryRes.data.length
      );

      const lowStockItems =
        inventoryRes.data.filter(
          (item: any) =>
            item.current_stock <= 10
        );

      setLowStock(lowStockItems);

      const stockInRes =
        await axios.get(
          "http://localhost:5000/api/stock-in"
        );

      setStockIn(
        stockInRes.data.length
      );

      const stockOutRes =
        await axios.get(
          "http://localhost:5000/api/stock-out"
        );

      setStockOut(
        stockOutRes.data.length
      );

      const dailySalesRes =
        await axios.get(
          "http://localhost:5000/api/reports/daily-sales"
        );

      setDailySales(
        dailySalesRes.data
      );

      const employeeSalesRes =
        await axios.get(
          "http://localhost:5000/api/reports/employee-sales"
        );

      setEmployeeSales(
        employeeSalesRes.data
      );

      const dashboardRes =
        await axios.get(
          "http://localhost:5000/api/reports/dashboard-summary"
        );

      setDashboardSummary(
        dashboardRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  const cards = [

    {
      title: "Products",
      value: products,
      icon: Package,
      color: "bg-blue-500",
    },

    {
      title: "Inventory",
      value: inventory,
      icon: Archive,
      color: "bg-green-500",
    },

    {
      title: "Stock-In",
      value: stockIn,
      icon: ArrowDownCircle,
      color: "bg-yellow-500",
    },

    {
      title: "Stock-Out",
      value: stockOut,
      icon: ArrowUpCircle,
      color: "bg-red-500",
    },

    {
      title: "Today's Sales",
      value: dashboardSummary?.today_sales || 0,
      icon: DollarSign,
      color: "bg-purple-500",
    },

    {
      title: "Employees",
      value: dashboardSummary?.total_employees || 0,
      icon: Users,
      color: "bg-indigo-500",
    },

  ];

  return (

    <div className="p-8">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#622F1E]">

          Reports Overview

        </h1>

        <p className="text-gray-500 mt-2">

          System inventory and transaction reports

        </p>

      </div>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between"
            >

              <div>

                <p className="text-gray-500 text-sm">

                  {card.title}

                </p>

                <h2 className="text-3xl font-bold mt-2">

                  {card.value}

                </h2>

              </div>

              <div
                className={`${card.color} p-4 rounded-2xl text-white`}
              >

                <Icon size={28} />

              </div>

            </div>

          );

        })}

      </div>

      {/* LOW STOCK TABLE */}

      <div className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex items-center gap-3 mb-6">

          <AlertTriangle className="text-orange-500" />

          <h2 className="text-2xl font-bold text-[#622F1E]">

            Low Stock Products

          </h2>

        </div>

        {lowStock.length === 0 ? (

          <p className="text-gray-500">

            No low stock products found.

          </p>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Product
                </th>

                <th className="text-left py-3">
                  Current Stock
                </th>

              </tr>

            </thead>

            <tbody>

              {lowStock.map((item: any) => (

                <tr
                  key={item.inventory_id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">
                    {item.product_name}
                  </td>

                  <td className="py-4">

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">

                      {item.current_stock}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* DAILY SALES REPORT */}

      <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

        <h2 className="text-2xl font-bold text-[#622F1E] mb-6">

          Daily Sales Report

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Date
              </th>

              <th className="text-left py-3">
                Employee
              </th>

              <th className="text-left py-3">
                Branch
              </th>

              <th className="text-left py-3">
                Transactions
              </th>

              <th className="text-left py-3">
                Total Sales
              </th>

            </tr>

          </thead>

          <tbody>

            {dailySales.map((sale: any, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">
                  {new Date(sale.date)
                    .toLocaleDateString()}
                </td>

                <td className="py-4">
                  {sale.employee_name}
                </td>

                <td className="py-4">
                  {sale.branch_name}
                </td>

                <td className="py-4">
                  {sale.total_transactions}
                </td>

                <td className="py-4 font-bold text-green-600">
                  ₱{sale.total_sales}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* EMPLOYEE SALES REPORT */}

      <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

        <h2 className="text-2xl font-bold text-[#622F1E] mb-6">

          Employee Sales Report

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Employee
              </th>

              <th className="text-left py-3">
                Transactions
              </th>

              <th className="text-left py-3">
                Total Sales
              </th>

            </tr>

          </thead>

          <tbody>

            {employeeSales.map((employee: any) => (

              <tr
                key={employee.employee_id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">
                  {employee.employee_name}
                </td>

                <td className="py-4">
                  {employee.total_transactions}
                </td>

                <td className="py-4 font-bold text-green-600">
                  ₱{employee.total_sales}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}