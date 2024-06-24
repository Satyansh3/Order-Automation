import oAuthService from "../services/oAuthService.js";

const oAuthController = {
    handleCallback: async(req,res) => {
        const {code} = req.query;
        console.log(code)
        try {
            const tokenData = await oAuthService.exchangeCodeForToken(code);
            res.redirect(`/callback?token=${tokenData.token}`)
        } catch (error) {
            console.error(error)
        }}
}

export default oAuthController;