import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import ProductRoutes from "./routes/product.js";

import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5700;
app.use(express.json());

app.use("/api/products", ProductRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening at http://localhost: ${PORT}`);
});
