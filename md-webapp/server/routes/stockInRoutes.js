import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* =====================================================
   STOCK IN
===================================================== */

router.post("/", (req, res) => {

  const {
    inventory_id,
    quantity_added,
    remarks
  } = req.body;

  // VALIDATION
  if (
    !inventory_id ||
    !quantity_added
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

      const updatedStock =
        currentStock + Number(quantity_added);

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
            INSERT INTO stock_in_history
            (
              inventory_id,
              quantity_added,
              remarks
            )
            VALUES (?, ?, ?)
          `;

          db.query(
            insertHistorySql,
            [
              inventory_id,
              quantity_added,
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
                  "Stock added successfully"
              });
            }
          );
        }
      );
    }
  );
});

export default router;