import axios from 'axios';
import {v4 as uuidv4} from "uuid"
import xml2js from "xml2js"

const PAYSTATION_API_URL = 'https://www.paystation.co.nz/direct/paystation.dll';
export const initiatePayment = async (jobId, amount) => {
  try {
    const response = await axios.post(PAYSTATION_API_URL, {
      paystation: "_empty",
      pstn_nr: 't',
      pstn_pi: "617661",
      pstn_gi: "DEVELOPMENT",
      pstn_ms: uuidv4(),
      pstn_tm: 't',
      pstn_am : amount,
    });
    const responseData = response.data;
    // Parse the XML
    const parser = new xml2js.Parser();
    var digitalOrderUrl
    parser.parseString(responseData, (err, result) => {
      if (err) {
        throw err;
      }
      // Extract the DigitalOrder URL
      digitalOrderUrl = result.InitiationRequestResponse.DigitalOrder[0];
      console.log('Digital Order URL:', digitalOrderUrl);
    });
    console.log(digitalOrderUrl)
    return digitalOrderUrl
  } catch (error) {
    console.error('Error initiating payment with Paystation:', error);
    throw error;
  }
};
