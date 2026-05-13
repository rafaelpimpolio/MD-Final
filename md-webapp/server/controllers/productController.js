import db from "../config/db.js";

// GET ALL PRODUCTS
export const getProducts = (req, res) => {
  const sql = `
  SELECT
    p.product_id,
    p.product_name,
    p.price,
    p.line_id,
    pl.line_name
  FROM product p
  LEFT JOIN product_line pl
    ON p.line_id = pl.line_id
  ORDER BY p.product_id DESC
`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// ADD PRODUCT
export const addProduct = (req, res) => {
  const { product_name, price, line_id } = req.body;

  const sql = `
    INSERT INTO product
    (product_name, price, line_id)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [product_name, price, line_id],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Product added successfully",
      });
    }
  );
};

// UPDATE PRODUCT
export const updateProduct = (req, res) => {
  const { id } = req.params;

  const { product_name, price, line_id } = req.body;

  const sql = `
    UPDATE product
    SET
      product_name = ?,
      price = ?,
      line_id = ?
    WHERE product_id = ?
  `;

  db.query(
    sql,
    [product_name, price, line_id, id],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Product updated successfully",
      });
    }
  );
};

// DELETE PRODUCT
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM product WHERE product_id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  });
};