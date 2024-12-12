import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS || "", // Use empty string since there is no password 
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.message);
  } else {
    console.log("Connected to the MySQL database.");
  }
});

export default db;
