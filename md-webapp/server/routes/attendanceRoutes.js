import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET ALL ATTENDANCE
router.get("/", (req, res) => {
  const sql = `
    SELECT
      attendance.attendance_id,
      attendance.date,
      attendance.time_in,
      attendance.time_out,
      attendance.status,

      employee.employee_id,
      CONCAT(employee.first_name, ' ', employee.last_name) AS employee_name,

      shift.shift_name

    FROM attendance

    JOIN employee
      ON attendance.employee_id = employee.employee_id

    LEFT JOIN shift
      ON attendance.shift_id = shift.shift_id

    ORDER BY attendance.date DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

export default router;