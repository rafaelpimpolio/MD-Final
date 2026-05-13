import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* =====================================================
   STOCK OUT
===================================================== */

router.post("/", (req, res) => {

/* =====================================================
   GET STOCK OUT HISTORY
===================================================== */

router.get("/", (req, res) => {

  const sql = `
    SELECT
      stock_out_history.stock_out_id,
      stock_out_history.quantity_out,
      stock_out_history.remarks,
      stock_out_history.created_at,
      products.product_name
    FROM stock_out_history
    JOIN inventory
      ON stock_out_history.inventory_id =
         inventory.inventory_id
    JOIN products
      ON inventory.product_id =
         products.product_id
    ORDER BY stock_out_history.created_at DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json(err);

    }

    res.json(result);

  });

});

  const {
    inventory_id,
    quantity_out,
    remarks
  } = req.body;

  // VALIDATION
  if (
    !inventory_id ||
    !quantity_out
  ) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields"
    });
  }

  /* =========================================
     CHECK INVENTORY
  ========================================= */

  const getInventorySql = `
    SELECT current_stock
    FROM inventory
    WHERE inventory_id = ?
  `;

  db.query(
    getInventorySql,
    [inventory_id],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false
        });
      }

      // INVENTORY NOT FOUND
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Inventory not found"
        });
      }

      const currentStock =
        result[0].current_stock;

      // NOT ENOUGH STOCK
      if (
        currentStock < Number(quantity_out)
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Not enough inventory stock"
        });
      }

      const updatedStock =
        currentStock - Number(quantity_out);

      /* =========================================
         UPDATE INVENTORY STOCK
      ========================================= */

      const updateSql = `
        UPDATE inventory
        SET current_stock = ?
        WHERE inventory_id = ?
      `;

      db.query(
        updateSql,
        [updatedStock, inventory_id],
        (updateErr) => {

          if (updateErr) {
            console.log(updateErr);

            return res.status(500).json({
              success: false
            });
          }

          /* =========================================
             INSERT HISTORY
          ========================================= */

          const insertHistorySql = `
            INSERT INTO stock_out_history
            (
              inventory_id,
              quantity_out,
              remarks
            )
            VALUES (?, ?, ?)
          `;

          db.query(
            insertHistorySql,
            [
              inventory_id,
              quantity_out,
              remarks
            ],
            (historyErr) => {

              if (historyErr) {
                console.log(historyErr);

                return res.status(500).json({
                  success: false
                });
              }

              return res.json({
                success: true,
                message:
                  "Stock out recorded successfully"
              });
            }
          );
        }
      );
    }
  );
});

export default router;