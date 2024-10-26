import Car from "../models/car.js";

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

export const createCar = async (req, res) => {
  const { name, model, releaseYear } = req.body;
  try {
    const car = await Car.create({ name, model, releaseYear });
    res.status(201).json({ success: true, data: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "validation error" });
  }
};

export const getCar = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ success: false, message: "car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const { name, model, releaseYear } = req.body;
  try {
    const updated = await Car.update(
      { name, model, releaseYear },
      { where: { id } }
    );

    const updatedBook = await Car.findByPk(id);
    if (updated[0] === 0) {
      return res.status(404).json({ success: false, message: "car not found" });
    }
    res.status(200).json({
      success: true,
      message: "car updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Car.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ success: false, message: "car not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "car deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};
