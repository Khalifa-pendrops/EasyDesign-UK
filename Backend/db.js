import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "easydesignuk",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err.stack);
  } else {
    console.log("Connection to MySQL database");
  }
});

export default db;
