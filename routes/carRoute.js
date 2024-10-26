import {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";
import express from "express";

const router = express.Router();

router.get("/cars", getAllCars);
router.get("/cars/:id", getCar);
router.post("/cars", createCar);
router.put("/cars/:id", updateCar);
router.delete("/cars/:id", deleteCar);

export default router;
