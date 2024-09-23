const paymentService = {
    initiatePayment: async (jobId, amount, clientEmail) => {
        try {
          const response = await fetch(`http://localhost:3000/payment/initiate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jobId, amount, clientEmail })
          });
          if (!response.ok) {
            throw new Error('Failed to initiate payment');
          }
          return response;
        } catch (error) {
          console.error('Error initiating payment:', error.message);
          throw new Error('Failed to initiate payment');
        }
      }
}
export default paymentService