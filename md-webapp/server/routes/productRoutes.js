import express from "express";
import db from "../config/db.js";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/* =====================================================
   PRODUCTS
===================================================== */

router.get("/", getProducts);

router.post("/", addProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

/* =====================================================
   GET STOCK OUT HISTORY
===================================================== */

router.get("/history", (req, res) => {

  const sql = `
    SELECT
      stock_out_history.stock_out_id,
      stock_out_history.quantity_out,
      stock_out_history.remarks,
      stock_out_history.created_at,
      product.product_name
    FROM stock_out_history
    JOIN inventory
      ON stock_out_history.inventory_id =
         inventory.inventory_id
    JOIN product
      ON inventory.product_id =
         product.product_id
    ORDER BY stock_out_history.created_at DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database error",
      });

    }

    res.json(result);

  });

});

export default router;