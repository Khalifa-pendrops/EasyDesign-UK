const express = require("express");
const db = require("./db");
const router = express.Router();

router.post("/subscribe", (req, res) => {
  const { email } = req.body;
  const sql = "INSERT INTO newsletter_subscription (email) VALUES (?)";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to subscribe" });
    }
    res.status(200).json({ success: "Subscribed successfully" });
  });
});

module.exports = router;
