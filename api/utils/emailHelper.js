import nodemailer from "nodemailer"
import emailConfig from "../config/email.js"

const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password
  }
});

const emailHelper = {
  // Send email
  sendEmail: async (to, subject, text) => {
    const mailOptions = {
      from: emailConfig.sender,
      to,
      subject,
      text
    };
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
};

module.exports = emailHelper;
