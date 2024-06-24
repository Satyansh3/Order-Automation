import axios from "axios"
// import crypto from "crypto"

// Function to initiate e-signature using Eversign
const everSignService = {
    getAccessToken: async(authorizationCode) => {
        try {
            const response = await axios.post('https://satyanshsharma.eversign.com/oauth/token', {
                client_id : '3c48229f1071e3e7b27935efee1f91de',
                client_secret: '674e2bf1216c93bf3578a65ad01e36d7',
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
                'https://satyanshsharma.eversign.com/document',
                {
                    "title": "E-Signature Document",
                    "signers": [
                        {
                            "email": "captaincoolsatyansh@gmail.com",
                            "role":"Admin",
                            "id":1,
                            "embedded_signing_url" : "https://satyanshsharma.eversign.com/documents?43959ebf8f9bfb24b9c8337e722d3f46&893686&ec1f1163b0857261894a4ea4680829f0f510705ef36ae2ea5a006f6e44e82be8"
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
