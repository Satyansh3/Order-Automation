import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import oAuthService from "../../../../api/services/oAuthService.js";

const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchTokenAndDocuments = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            console.log('Code: ', code);

            if (code) {
                try {
                    const tokenResponse = await oAuthService.exchangeCodeForToken(code);
                    const accessToken = tokenResponse.access_token;
                    console.log("Access token", accessToken)

                    // Document data example
                    const documentData = {
                        "title": 'Sample document for e-signing',
                        "sandbox": 1,
                        "is_draft": 0,
                        "custom_requester_name": "Company Name",
                        "use_signer_order": 1,
                        "reminders": 1,
                        "require_all_signers": 1,
                        "embedded_signing_enabled": 1,
                        "flexible_signing": 1,
                        "use_hidden_tags": 0,
                        "signers": [
                        {
                            "id": 1,
                            "name": "Admin",
                            "email": "captaincoolsatyansh@gmail.com",
                            "order": 1,
                        },
                        // {
                        //     "id": 2,
                        //     "name": "Client",
                        //     "email": '2021uee0153@iitjammu.ac.in',
                        //     "order": 2,
                        // }
                    ],
                        "files": [{
                            "name": 'Document',
                            "file_url": 'https://eversign.com/uploads/sample-document.pdf',
                            "file_id": "",
                            "file_base64": ""
                        }],
                        "recipients": [
                        // {
                        //     "name": "Client",
                        //     "email": "2021uee0153@iitjammu.ac.in",
                        //     "language": "en"
                        // },
                        // {
                        //     "name": "Admin",
                        //     "email": "captaincoolsatyansh@gmail.com",
                        //     "language": "en"
                        // }
                    ],
                    }
                        const createDocumentResponse = await oAuthService.createDocumentFromTemplate(accessToken, documentData);
                        console.log('Create Document Response:', createDocumentResponse)
                    } catch (error) {
                        console.error("Error fetching token:", error);
                    }
                }
        };
        fetchTokenAndDocuments();
        }, [navigate, location])

        return (
            <div style={styles.container}>
                <div style={styles.box}>
                    <h2 style={styles.heading}>Documents Sent for Signature</h2>
                    <p style={styles.message}>
                        The documents have been sent to your email for signature. Please sign them to continue.
                    </p>
                </div>
            </div>
        );
    };
    
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f7f7f7',
        },
        box: {
            padding: '20px',
            border: '2px solid #007bff',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            color: '#007bff',
            marginBottom: '10px',
        },
        message: {
            color: '#333333',
        },
    };
    
export default OAuthCallback;