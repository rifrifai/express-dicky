import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
