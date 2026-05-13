import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import db from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import stockInRoutes from "./routes/stockInRoutes.js";
import stockOutRoutes from "./routes/stockOutRoutes.js";
import lineRoutes from "./routes/lineRoutes.js";

dotenv.config();

const app = express();

/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(cors());

app.use(express.json());

/* =========================================================
   ROUTES
========================================================= */

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/inventory", inventoryRoutes);

app.use("/api/stock-in", stockInRoutes);

app.use("/api/stock-out", stockOutRoutes);

app.use("/api/lines", lineRoutes);

/* =========================================================
   TEST DATABASE
========================================================= */

app.get("/test", (req, res) => {

  db.query(
    "SELECT * FROM users",
    (err, result) => {

      if (err) {

        return res.status(500).json(err);

      }

      res.json(result);

    }
  );

});

/* =========================================================
   SERVER
========================================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});

app.use("/api/attendance", attendanceRoutes);
app.use("/api/reports", reportRoutes);