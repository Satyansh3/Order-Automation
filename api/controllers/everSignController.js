import everSignService from "../services/everSignService.js";
const everSignController = {
    createESignature: async (req, res) => {
        const { jobId, clientEmail, documentUrl } = req.body
        // console.log(req.body)
        try {
            // Call eversignService to initiate e-signature process
            const everSignResponse = await everSignService.initiateEsignature(jobId, clientEmail, documentUrl);

            res.status(200).json(everSignResponse);
        } catch (error) {
            console.error('Error creating E-Signature', error)
            res.status(500).json({ success: false, message: 'Error creating e-signature' });
        }
    }
}

export default everSignController