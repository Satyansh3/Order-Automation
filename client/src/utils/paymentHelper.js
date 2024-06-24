// paymentHelper.js

const paymentHelper = {
    processPayment: async (amount, cardDetails) => {
      try {
        // Code to process payment (can be implemented using a payment gateway SDK)
        console.log(`Payment processed successfully for amount: ${amount}`);
        return { success: true };
      } catch (error) {
        console.error('Error processing payment:', error);
        throw new Error('Failed to process payment');
      }
    }
  };
  
  export default paymentHelper;
  