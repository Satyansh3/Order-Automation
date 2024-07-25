

const oAuthService = {
    exchangeCodeForToken: async (code) => {
        try {
            const formData = new FormData();
            formData.append('client_id', '3c48229f1071e3e7b27935efee1f91de');
            formData.append('client_secret', '674e2bf1216c93bf3578a65ad01e36d7');
            formData.append('code', code);

            const response = await fetch('/findToken', {
                method: 'POST',
                body: formData
            });
            const data = await response.json()
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(data)
            return data;
        } catch (error) {
            console.error(error)
        }
    },
    getDocuments: async (accessToken) => {
        try {
            const response = await fetch('https://api.eversign.com/document?access_key=43959ebf8f9bfb24b9c8337e722d3f46&business_id=893686&type=all', {
                method: "GET",
                headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
                }
            })
            console.log("get document" , response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.data}`)
            }
            const data = await response.json();

            return data;
        } catch (error) {
            console.error(error)
        }
    },
    createDocumentFromTemplate: async (accessToken, documentData) => {
        try {
            const response = await fetch('https://api.eversign.com/document?access_key=43959ebf8f9bfb24b9c8337e722d3f46&business_id=893686', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(documentData)
            })
            console.log("Create document",response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating document:', error.message);
            throw error;
        }
    },
    listBusinesses: async() => {
        try {
            const response = await fetch("https://api.eversign.com/business?access_key=43959ebf8f9bfb24b9c8337e722d3f46")
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }
}

export default oAuthService;