import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/bookController.js";
import express from "express";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.get("/books/:id", getBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
