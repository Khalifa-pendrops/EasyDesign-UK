const express = require("express");
const db = require("./db");
const router = express.Router();

router.post("/submit-form", (req, res) => {
  const { name, email, phone, project, subject, message } = req.body;
  const sql =
    "INSERT INTO form_submissions (name, email, phone, project, suject, message) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, phone, project, subject, message],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to submit form" });
      }
      res.status(200).json({ success: "Form submitted successfully" });
    }
  );
});

module.exports = router;
