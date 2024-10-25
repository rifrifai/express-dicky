import Book from "../models/book.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};

export const createBook = async (req, res) => {
  const { title, author, publicationYear } = req.body;
  try {
    const book = await Book.create({ title, author, publicationYear });

    return res.status(201).json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};

export const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, publicationYear } = req.body;
  try {
    const [updated] = await Book.update(
      { title, author, publicationYear },
      { where: { id } }
    );

    const updatedBook = await Book.findByPk(id);
    if (updated === 0) {
      return res
        .status(404)
        .json({ success: false, message: "book not found" });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.destroy({ where: { id: id } });
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error", message: error.message });
  }
};
