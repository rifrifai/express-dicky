import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
export default router;
