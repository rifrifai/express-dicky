import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Car = db.define(
  "Car",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "car",
    timestamps: true,
  }
);

export default Car;
