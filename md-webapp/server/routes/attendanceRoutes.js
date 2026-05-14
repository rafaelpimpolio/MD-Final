import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* =========================================
   GET ALL ATTENDANCE
========================================= */

router.get("/", (req, res) => {

  const sql = `
    SELECT
      attendance.attendance_id,
      attendance.date,
      attendance.time_in,
      attendance.time_out,
      attendance.status,

      employee.employee_id,

      CONCAT(
        employee.first_name,
        ' ',
        employee.last_name
      ) AS employee_name,

      shift.shift_name

    FROM attendance

    JOIN employee
      ON attendance.employee_id =
      employee.employee_id

    LEFT JOIN shift
      ON attendance.shift_id =
      shift.shift_id

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

/* =========================================
   GET EMPLOYEE ATTENDANCE
========================================= */

router.get("/:employee_id", (req, res) => {

  const { employee_id } = req.params;

  const sql = `
    SELECT
      attendance_id,
      date,
      time_in,
      time_out,
      status
    FROM attendance
    WHERE employee_id = ?
    ORDER BY attendance.date DESC
  `;

  db.query(
    sql,
    [employee_id],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

});

/* =========================================
   CHECK ACTIVE ATTENDANCE
========================================= */

router.get(
  "/active/:employee_id",
  (req, res) => {

    const { employee_id } = req.params;

    const sql = `
      SELECT *
      FROM attendance
      WHERE employee_id = ?
      AND date = CURDATE()
      AND time_out IS NULL
      LIMIT 1
    `;

    db.query(
      sql,
      [employee_id],
      (err, result) => {

        if (err) {
          console.log(err);

          return res.status(500).json(err);
        }

        if (result.length > 0) {

          return res.json({
            active: true,
            attendance: result[0],
          });

        }

        res.json({
          active: false,
        });

      }
    );

  }
);

/* =========================================
   CLOCK IN
========================================= */

router.post("/clock-in", (req, res) => {

  const {
    employee_id,
    shift_id,
  } = req.body;

  /* CHECK IF ALREADY CLOCKED IN */

  const checkSql = `
    SELECT *
    FROM attendance
    WHERE employee_id = ?
    AND date = CURDATE()
    AND time_out IS NULL
  `;

  db.query(
    checkSql,
    [employee_id],
    (checkErr, checkResult) => {

      if (checkErr) {
        console.log(checkErr);

        return res.status(500).json(checkErr);
      }

      if (checkResult.length > 0) {

        return res.status(400).json({
          message: "Already clocked in today",
        });

      }

      const insertSql = `
        INSERT INTO attendance
        (
          employee_id,
          shift_id,
          date,
          time_in,
          status
        )
        VALUES
        (
          ?,
          ?,
          CURDATE(),
          CURTIME(),
          'Present'
        )
      `;

      db.query(
        insertSql,
        [employee_id, shift_id],
        (err, result) => {

          if (err) {
            console.log(err);

            return res.status(500).json(err);
          }

          res.json({
            success: true,
            message: "Clock In Successful",
          });

        }
      );

    }
  );

});

/* =========================================
   CLOCK OUT BY EMPLOYEE
========================================= */

router.post(
  "/clock-out-by-employee/:employee_id",
  (req, res) => {

    const { employee_id } = req.params;

    const sql = `
      UPDATE attendance
      SET time_out = CURTIME()
      WHERE employee_id = ?
      AND date = CURDATE()
      AND time_out IS NULL
    `;

    db.query(
      sql,
      [employee_id],
      (err, result) => {

        if (err) {
          console.log(err);

          return res.status(500).json(err);
        }

        res.json({
          success: true,
          message: "Clock Out Successful",
        });

      }
    );

  }
);

export default router;