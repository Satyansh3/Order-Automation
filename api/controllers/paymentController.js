const paymentController = {
    initiatePayment : async(req,res) => {
        const { jobId, amount } = req.body;
        console.log("initiated")
    }
}
export default paymentController