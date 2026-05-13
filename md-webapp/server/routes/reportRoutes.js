import express from "express";
import db from "../config/db.js";

const router = express.Router();


// DAILY SALES REPORT
router.get("/daily-sales", (req, res) => {

  const sql = `
    SELECT
      sales.date,

      CONCAT(employee.first_name, ' ', employee.last_name)
      AS employee_name,

      branch.branch_name,

      SUM(sales.total_amount) AS total_sales,

      COUNT(sales.sales_id) AS total_transactions

    FROM sales

    JOIN employee
      ON sales.employee_id = employee.employee_id

    JOIN branch
      ON sales.branch_id = branch.branch_id

    GROUP BY
      sales.date,
      employee.employee_id,
      branch.branch_id

    ORDER BY sales.date DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});


// SALES PER EMPLOYEE
router.get("/employee-sales", (req, res) => {

  const sql = `
    SELECT
      employee.employee_id,

      CONCAT(employee.first_name, ' ', employee.last_name)
      AS employee_name,

      COUNT(sales.sales_id) AS total_transactions,

      IFNULL(SUM(sales.total_amount), 0)
      AS total_sales

    FROM employee

    LEFT JOIN sales
      ON employee.employee_id = sales.employee_id

    GROUP BY employee.employee_id

    ORDER BY total_sales DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});


// DASHBOARD SUMMARY
router.get("/dashboard-summary", (req, res) => {

  const sql = `
    SELECT

      (
        SELECT COUNT(*)
        FROM employee
      ) AS total_employees,

      (
        SELECT COUNT(*)
        FROM attendance
        WHERE date = CURDATE()
      ) AS attendance_today,

      (
        SELECT IFNULL(SUM(total_amount), 0)
        FROM sales
        WHERE date = CURDATE()
      ) AS today_sales,

      (
        SELECT COUNT(*)
        FROM inventory
        WHERE current_stock <= 10
      ) AS low_stock_items
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result[0]);
  });
});

export default router;