import axios from 'axios';

const PAYSTATION_API_URL = 'https://payments.paystation.com/api/v1/initiate';
const MERCHANT_ID = 'your-merchant-id'; // Replace with your merchant ID
const API_KEY = 'your-api-key'; // Replace with your API key

export const initiatePayment = async (jobId, amount) => {
  try {
    const response = await axios.post(PAYSTATION_API_URL, {
      merchant_id: MERCHANT_ID,
      api_key: API_KEY,
      amount,
      job_id: jobId,
      // Add any other required fields by Paystation API
    });

    if (response.status !== 200) {
      throw new Error('Failed to initiate payment');
    }

    return response.data.paymentUrl; // Assuming the API returns a payment URL
  } catch (error) {
    console.error('Error initiating payment with Paystation:', error.message);
    throw error;
  }
};
