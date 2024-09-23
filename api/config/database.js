import mongoose from "mongoose"

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(VITE_MONGODB_URI)
        console.log(`MongoDB Connected!: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDB : ${error.message}`)
        process.exit(1)
    }
}
export default connectDB
