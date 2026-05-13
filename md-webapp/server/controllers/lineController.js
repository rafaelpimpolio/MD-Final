import db from "../config/db.js";

export const getLines = (req, res) => {
  const sql =
    "SELECT * FROM product_line ORDER BY line_name ASC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    res.json(result);
  });
};