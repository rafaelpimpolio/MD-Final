import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* =========================================================
   GET INVENTORY
========================================================= */
router.get("/", (req, res) => {

  const sql = `
    SELECT
      inventory.inventory_id,
      inventory.product_id,
      inventory.current_stock,
      product.product_name,
      product.price,
      product_line.line_name
    FROM inventory
    JOIN product
      ON inventory.product_id = product.product_id
    LEFT JOIN product_line
      ON product.line_id = product_line.line_id
    ORDER BY product.product_name ASC
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database error",
      });

    }

    res.json(result);

  });

});

/* =========================================================
   UPDATE INVENTORY
========================================================= */
router.post("/update", (req, res) => {

  const inventories = req.body;

  if (!Array.isArray(inventories)) {

    return res.status(400).json({
      success: false,
      message: "Invalid payload",
    });

  }

  let completed = 0;

  inventories.forEach((item) => {

    const sql = `
      UPDATE inventory
      SET current_stock = ?
      WHERE inventory_id = ?
    `;

    db.query(
      sql,
      [
        item.current_stock,
        item.inventory_id,
      ],
      (err, result) => {

        if (err) {

          console.error(err);

          return res.status(500).json({
            success: false,
            message: "Database error",
          });

        }

        completed++;

        if (completed === inventories.length) {

          return res.json({
            success: true,
            message: "Inventory updated successfully",
          });

        }

      }
    );

  });

});

/* =========================================================
   STOCK IN
========================================================= */

router.post("/stock-in", (req, res) => {

  const {
    inventory_id,
    quantity,
  } = req.body;

  const sql = `
    UPDATE inventory
    SET current_stock =
      current_stock + ?
    WHERE inventory_id = ?
  `;

  db.query(
    sql,
    [quantity, inventory_id],
    (err, result) => {

      if (err) {

        console.error(err);

        return res.status(500).json({
          success: false,
          message: "Database error",
        });

      }

      const historySql = `
  INSERT INTO stock_in_history
  (
    inventory_id,
    quantity_added
  )
  VALUES (?, ?)
`;

db.query(
  historySql,
  [inventory_id, quantity],
  (historyErr) => {

    if (historyErr) {

      console.log(historyErr);

      return res.status(500).json({
        success: false,
        message: "Failed to save history",
      });

    }

    res.json({
      success: true,
      message: "Stock added successfully",
    });

  }
);

    

    }
  );

});

export default router;