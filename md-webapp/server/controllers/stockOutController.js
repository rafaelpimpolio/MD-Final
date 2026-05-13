import db from "../config/db.js";

// STOCK OUT / DEDUCT INVENTORY
export const stockOutInventory = (req, res) => {
  const {
    inventory_id,
    quantity_out,
    remarks,
  } = req.body;

  // CHECK CURRENT STOCK
  const checkSql = `
    SELECT quantity
    FROM inventory
    WHERE inventory_id = ?
  `;

  db.query(
    checkSql,
    [inventory_id],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Inventory not found",
        });
      }

      const currentQty =
        result[0].quantity;

      // PREVENT NEGATIVE STOCK
      if (currentQty < quantity_out) {
        return res.status(400).json({
          message:
            "Not enough inventory stock",
        });
      }

      // UPDATE INVENTORY
      const updateSql = `
        UPDATE inventory
        SET quantity = quantity - ?
        WHERE inventory_id = ?
      `;

      db.query(
        updateSql,
        [quantity_out, inventory_id],
        (err, updateResult) => {
          if (err) {
            console.log(err);

            return res.status(500).json(err);
          }

          // INSERT HISTORY
          const historySql = `
            INSERT INTO stock_out_history
            (
              inventory_id,
              quantity_out,
              remarks
            )
            VALUES (?, ?, ?)
          `;

          db.query(
            historySql,
            [
              inventory_id,
              quantity_out,
              remarks,
            ],
            (err, historyResult) => {
              if (err) {
                console.log(err);

                return res
                  .status(500)
                  .json(err);
              }

              res.json({
                success: true,
                message:
                  "Stock deducted successfully",
              });
            }
          );
        }
      );
    }
  );
};

// GET STOCK OUT HISTORY
export const getStockOutHistory = (
  req,
  res
) => {
  const sql = `
    SELECT
      soh.stock_out_id,
      soh.quantity_out,
      soh.remarks,
      soh.created_at,
      p.product_name
    FROM stock_out_history soh
    JOIN inventory i
      ON soh.inventory_id = i.inventory_id
    JOIN product p
      ON i.product_id = p.product_id
    ORDER BY soh.stock_out_id DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    res.json(result);
  });
};