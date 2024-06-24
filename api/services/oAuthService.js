import axios from "axios"
const oAuthService = {
    exchangeCodeForToken: async(code) => {
        const response = await axios.post("http://localhost:3000/xodo-oauth/oauth/token" , {
            client_id : '3c48229f1071e3e7b27935efee1f91de',
            client_secret: '674e2bf1216c93bf3578a65ad01e36d7',
            redirect_uri: 'http://localhost:5173/callback',
            grant_type: 'authorization_code',
            code: code
        })
        console.log(response.data)
        return response.data
    }
}

export default oAuthService;