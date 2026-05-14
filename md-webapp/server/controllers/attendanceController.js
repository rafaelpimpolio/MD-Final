import db from "../config/db.js";

/* CLOCK IN */

export const clockIn = (req, res) => {

  const {
    employee_id,
    shift_id,
  } = req.body;

  const sql = `
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
    sql,
    [employee_id, shift_id],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          error: err,
        });
      }

      return res.json({
        success: true,
        message: "Clock In Successful",
      });

    }
  );

};

/* CLOCK OUT */

export const clockOut = (req, res) => {

  const { employee_id } = req.params;

  const sql = `
    UPDATE attendance
    SET time_out = CURTIME()
    WHERE employee_id = ?
    AND date = CURDATE()
  `;

  db.query(
    sql,
    [employee_id],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          error: err,
        });
      }

      return res.json({
        success: true,
        message: "Clock Out Successful",
      });

    }
  );

};

/* GET ALL ATTENDANCE */

export const getAttendance = (req, res) => {

  const sql = `
    SELECT
      attendance.*,
      employees.first_name,
      employees.last_name
    FROM attendance
    JOIN employees
    ON attendance.employee_id =
    employees.employee_id
    ORDER BY attendance.date DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        error: err,
      });
    }

    return res.json({
      success: true,
      data: result,
    });

  });

};