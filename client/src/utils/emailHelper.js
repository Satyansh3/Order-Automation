// emailHelper.js

const emailHelper = {
    sendEmail: async (recipient, subject, body) => {
      try {
        // Code to send email (can be implemented using an email service or library)
        console.log(`Email sent to ${recipient} with subject: ${subject}`);
      } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
      }
    }
  };
  
  export default emailHelper;
  