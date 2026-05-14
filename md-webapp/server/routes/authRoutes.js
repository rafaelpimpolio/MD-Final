import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* LOGIN */
router.post("/login", (req, res) => {

  const { username, password } = req.body;

  const sql = `
    SELECT
      user_id,
      username,
      role,
      employee_id
    FROM users
    WHERE username = ?
    AND password = ?
  `;

  db.query(
    sql,
    [username, password],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Server error",
        });
      }

      if (result.length === 0) {
        return res.status(401).json({
          message: "Invalid username or password",
        });
      }

      return res.status(200).json({
        success: true,
        user: result[0],
      });
    }
  );
});

export default router;