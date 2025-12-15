const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// server used to send emails
const app = express();
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(",")
      : undefined,
    methods: ["POST"],
  })
);
app.use(express.json());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/contact", limiter);
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const REQUIRED_ENVS = ["EMAIL_USER", "EMAIL_PASS", "EMAIL_TO"];
const missing = REQUIRED_ENVS.filter((k) => !process.env[k]);
if (missing.length) {
  console.warn(`Missing env vars: ${missing.join(", ")}`);
}

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { name, email, subject, message, phone } = req.body || {};

  // Basic validation
  if (!name || typeof name !== "string" || name.length > 100) {
    return res
      .status(400)
      .json({
        error: {
          code: "INVALID_NAME",
          message: "Name is required and must be <= 100 chars",
        },
      });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res
      .status(400)
      .json({
        error: { code: "INVALID_EMAIL", message: "Valid email is required" },
      });
  }
  if (!subject || typeof subject !== "string" || subject.length > 150) {
    return res
      .status(400)
      .json({
        error: {
          code: "INVALID_SUBJECT",
          message: "Subject is required and must be <= 150 chars",
        },
      });
  }
  if (!message || typeof message !== "string" || message.length < 1) {
    return res
      .status(400)
      .json({
        error: { code: "INVALID_MESSAGE", message: "Message is required" },
      });
  }

  const mail = {
    from: `${name} <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `Contact Form Submission - ${subject}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           ${phone ? `<p>Phone: ${phone}</p>` : ""}
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          error: { code: "EMAIL_SEND_FAILED", message: "Failed to send email" },
        });
    }
    return res.status(200).json({ status: "Message Sent" });
  });
});
