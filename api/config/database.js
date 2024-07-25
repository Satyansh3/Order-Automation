import mongoose from "mongoose"

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://captaincoolsatyansh:Satyansh2024@intern-work-1.ypbcczd.mongodb.net/Intern-Work-1?retryWrites=true&w=majority")
        console.log(`MongoDB Connected!: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDB : ${error.message}`)
        process.exit(1)
    }
}
export default connectDB