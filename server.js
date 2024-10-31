require("dotenv").config();
console.log(process.env);

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = 5001; // Choose your desired port here
app.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);

// Check that environment variables are loaded
console.log(process.env.EMAIL_USER); // Should print the email address from .env
console.log(process.env.EMAIL_PASS); // Should print the password or app-specific password from .env

// Nodemailer configuration with environment variables
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use EMAIL_USER from .env
    pass: process.env.EMAIL_PASS, // Use EMAIL_PASS from .env
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
  const name = req.body.firstName + " " + req.body.lastName; // Add a space between first and last names
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "********@gmail.com", // Replace with your receiving email address
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email using Nodemailer
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending mail:", error); // Detailed error logging
      res.json({ code: 500, status: "Error in sending message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
