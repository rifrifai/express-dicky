import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.get("/about", (req, res) => {
  res.send("This is about");
});

app.get("/contact", (req, res) => {
  res.send("This is contact");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Menampilkan user ID ${id}`);
});

app.post("/submit", (req, res) => {
  res.send("Data berhasil dikirim");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
