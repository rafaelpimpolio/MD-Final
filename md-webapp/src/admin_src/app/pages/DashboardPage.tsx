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
  ClipboardCheck,
} from "lucide-react";

export function DashboardPage() {

  const [totalProducts, setTotalProducts] =
    useState(0);

  const [totalInventory, setTotalInventory] =
    useState(0);

  const [stockInCount, setStockInCount] =
    useState(0);

  const [stockOutCount, setStockOutCount] =
    useState(0);

  const [lowStockCount, setLowStockCount] =
    useState(0);

  const [dashboardSummary, setDashboardSummary] =
    useState<any>(null);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      /* PRODUCTS */

      const productsRes =
        await axios.get(
          "http://localhost:5000/api/products"
        );

      setTotalProducts(
        productsRes.data.length
      );

      /* INVENTORY */

      const inventoryRes =
        await axios.get(
          "http://localhost:5000/api/inventory"
        );

      setTotalInventory(
        inventoryRes.data.length
      );

      /* LOW STOCK */

      const lowStock =
        inventoryRes.data.filter(
          (item: any) =>
            item.current_stock <= 10
        );

      setLowStockCount(
        lowStock.length
      );

      /* STOCK IN */

      const stockInRes =
        await axios.get(
          "http://localhost:5000/api/stock-in"
        );

      setStockInCount(
        stockInRes.data.length
      );

      /* STOCK OUT */

      const stockOutRes =
        await axios.get(
          "http://localhost:5000/api/stock-out"
        );

      setStockOutCount(
        stockOutRes.data.length
      );

      /* DASHBOARD SUMMARY */

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
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-blue-500",
    },

    {
      title: "Inventory Items",
      value: totalInventory,
      icon: Archive,
      color: "bg-green-500",
    },

    {
      title: "Stock-In Records",
      value: stockInCount,
      icon: ArrowDownCircle,
      color: "bg-yellow-500",
    },

    {
      title: "Stock-Out Records",
      value: stockOutCount,
      icon: ArrowUpCircle,
      color: "bg-red-500",
    },

    {
      title: "Low Stock Alerts",
      value: lowStockCount,
      icon: AlertTriangle,
      color: "bg-orange-500",
    },

    {
      title: "Today's Sales",
      value: `₱${dashboardSummary?.today_sales || 0}`,
      icon: DollarSign,
      color: "bg-purple-500",
    },

    {
      title: "Employees",
      value: dashboardSummary?.total_employees || 0,
      icon: Users,
      color: "bg-indigo-500",
    },

    {
      title: "Attendance Today",
      value: dashboardSummary?.attendance_today || 0,
      icon: ClipboardCheck,
      color: "bg-teal-500",
    },

  ];

  return (

    <div className="min-h-screen bg-[#F8F5F1] p-6 md:p-8">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-4xl md:text-5xl font-bold text-[#622F1E] tracking-tight">

          Dashboard Overview

        </h1>

        <p className="text-gray-600 mt-2 text-lg">

          Welcome to AFIRM Management System

        </p>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <div
              key={index}
              className="group bg-white rounded-3xl border border-[rgba(98,47,30,0.08)] p-6 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              <div>

                <p className="text-gray-500 text-sm">

                  {card.title}

                </p>

                <h2 className="text-3xl font-bold mt-2 text-[#2d2d2d]">

                  {card.value}

                </h2>

              </div>

              <div
                className={`${card.color} p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >

                <Icon size={28} />

              </div>

            </div>

          );

        })}

      </div>

      {/* SYSTEM SUMMARY */}

      <div className="mt-10 bg-white rounded-3xl shadow-lg p-8 border border-[rgba(98,47,30,0.08)]">

        <h2 className="text-2xl font-bold text-[#622F1E] mb-6">

          System Summary

        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Products Registered
            </span>

            <span className="font-bold">
              {totalProducts}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Inventory Records
            </span>

            <span className="font-bold">
              {totalInventory}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Total Stock-In Transactions
            </span>

            <span className="font-bold text-green-600">
              {stockInCount}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Total Stock-Out Transactions
            </span>

            <span className="font-bold text-red-600">
              {stockOutCount}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Employees Registered
            </span>

            <span className="font-bold text-indigo-600">
              {dashboardSummary?.total_employees || 0}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Attendance Today
            </span>

            <span className="font-bold text-teal-600">
              {dashboardSummary?.attendance_today || 0}
            </span>

          </div>

          <div className="flex items-center justify-between border-b pb-3">

            <span className="text-gray-600">
              Today's Sales
            </span>

            <span className="font-bold text-purple-600">
              ₱{dashboardSummary?.today_sales || 0}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-gray-600">
              Low Stock Alerts
            </span>

            <span className="font-bold text-orange-600">
              {lowStockCount}
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}