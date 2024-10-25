// import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "db_express_diki",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export default db;
