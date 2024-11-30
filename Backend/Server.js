import express from "express";
import cors from "cors";
import db from "./db.js";
import bodyParser from "body-parser";
// import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// KINDLY UNCOMMENT NODEMAILER AND SUBSEQUENT CODE TO SET IT UP
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST || "localhost",
//   port: process.env.EMAIL_PORT || 5000,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required please" });
  }

  const query = "INSERT INTO newsletter_subscriptions (email) VALUES (?)";

  db.query(query, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    // Uncomment to send an email upon subscription
    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Newsletter Subscription",
    //   text: "Thank you for subscribing to our newsletter",
    // };

    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ success: false, message: "Failed to send email" });
    //   }
    //   res.status(200).json({ success: true, message: "Successfully subscribed to newsletter!" });
    // });

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully subscribed to newsletter!",
      });
    console.log(result);
  });
});

app.post("/api/form", (req, res) => {
  const { name, email, phone, project, subject, message } = req.body;

  if (!name || !email || !phone || !project || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const query =
    "INSERT INTO form_submissions (name, email, phone, project, subject, message) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [name, email, phone, project, subject, message],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }
      res
        .status(200)
        .json({ success: true, message: "Form submitted successfully!" });
      console.log(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
