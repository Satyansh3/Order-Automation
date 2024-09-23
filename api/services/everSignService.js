import axios from "axios"
// import crypto from "crypto"

// Function to initiate e-signature using Eversign
const everSignService = {
    getAccessToken: async(authorizationCode) => {
        try {
            const response = await axios.post('https://your_business_account.eversign.com/oauth/token', {
                client_id : VITE_CLIENT_ID,
                client_secret: VITE_SECRET_KEY,
                redirect_uri: 'http://localhost:5173/callback',
                grant_type: 'authorization_code',
                code: code
            })
            return response.data.token
        } catch (error) {
            console.error('Error fetching access token', error.message)
        }
    },
    initiateEsignature: async (jobId, clientEmail, documentUrl) => {
        try {
            const url = documentUrl;
            const hash = crypto.createHash('sha256').update(url).digest('')
            console.log(hash)
            // Make API call to Eversign to initiate e-signature process
            const eversignResponse = await axios.post(
                'https://your_business_account.eversign.com/document',
                {
                    "title": "E-Signature Document",
                    "signers": [
                        {
                            "email": "Your_gmail_id",
                            "role":"Admin",
                            "id":1,
                            "embedded_signing_url" : `https://your_business_account.eversign.com/documents?${VITE_EVERSIGN_API_KEY}&${VITE_BUSINESS_ID}&ec1f1163b0857261894a4ea4680829f0f510705ef36ae2ea5a006f6e44e82be8`
                        }
                    ],
                    "files": [
                        {
                            "name": "Document",
                            "file_url": `${documentUrl}`
                        }
                    ],
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const signers = eversignResponse.data.signers;
            const clientSigner = signers.find(signer => signer.email === clientEmail);
            if (clientSigner && clientSigner.embedded_signing_url) {
                return clientSigner.embedded_signing_url;
            } else {
                throw new Error('No embedded signing URL found for the client');
            }
        } catch (error) {
            throw new Error('Error initiating e-signature: ' + error.message);
        }
    }
}

export default everSignService
