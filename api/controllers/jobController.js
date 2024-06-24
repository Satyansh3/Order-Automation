import Job from "../models/Job.js"
const jobController = {
    createJob: async(req,res) => {
        try{
            const {client, description} = req.body;
            const newJob = new Job({
                client, 
                description
            })
            const savedJob = await newJob.save()
            res.status(201).json(savedJob)
        } catch(error){
            console.error(error)
            res.status(500).json({message: 'Internal server error'})
        }
    }
}


export default jobController