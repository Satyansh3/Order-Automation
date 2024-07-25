import nodemailer from 'nodemailer';
import emailConfig from '../config/email';

const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: {
    user: emailConfig.username,
    pass: emailConfig.password,
  },
});

export const sendPaymentNotification = async (email, paymentUrl) => {
  const mailOptions = {
    from: emailConfig.username,
    to: email,
    subject: 'Payment Request',
    text: `Please make the payment using the following link: ${paymentUrl}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending payment notification:', error);
    throw error;
  }
};
