import React, {useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import oAuthService from "../../../../api/services/oAuthService.js";

const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchTokenAndDocuments = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            console.log('Code: ',code);

            if (code) {
                try {
                    const tokenResponse = await oAuthService.exchangeCodeForToken(code);
                    const accessToken = tokenResponse.access_token;

                    // Document data example
                    const documentData = {
                        title: 'E-Signature Document',
                        signers: [
                            {
                                email: 'captaincoolsatyansh@gmail.com',
                                role: 'Admin',
                                order: 1,
                                id: 1
                            },
                        ],
                        files: [
                            {
                                name: 'Document',
                                file_url: ''
                            }
                        ]
                    };

                    // // Create a document
                    // const createDocumentResponse = await oAuthService.createDocument(accessToken, documentData);
                    // console.log('Create Document Response:', createDocumentResponse);

                    // // Get documents
                    const documentsResponse = await oAuthService.getDocuments(accessToken);
                    console.log('Documents Response:', documentsResponse);

                    // Get Businesse
                    // const listOfBusinesses = await oAuthService.listBusinesses();
                    // console.log('Businesses Response', listOfBusinesses)
                } catch (error) {
                    console.error("Error fetching token:", error);
                    
                }
            }
        };

        fetchTokenAndDocuments();
    }, [navigate,location])

    return(
        <div>Still Loading...</div>
    )
}

export default OAuthCallback