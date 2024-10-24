import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import session from "express-session";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: "Content-Length",
    credentials: true,
    maxAge: 1800,
    preflightContinue: false,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 60 * 1000,
    },
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
