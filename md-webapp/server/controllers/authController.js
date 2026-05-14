import db from "../config/db.js";

export const login = (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:");
  console.log(username, password);

  const sql =
    "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log("DATABASE ERROR:");
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database error",
        error: err,
      });
    }

    console.log("QUERY RESULT:");
    console.log(result);

    if (result.length > 0) {
      console.log("LOGIN SUCCESS");

      return res.status(200).json({
        success: true,
        user: result[0],
      });
    } else {
      console.log("INVALID CREDENTIALS");

      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  });
};