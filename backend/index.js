import express from 'express';
import products from './routes/products/index.js'
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()
const PORT = process.env.PORT
const mongourl = process.env.MONGO_URL 


// This is the main file


// Create a server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connectToDb()
})

// Initialize connection to mongodb via mongodb url
async function connectToDb() {
    try {
        await mongoose.connect(mongourl, {dbName: 'shop'})
        console.log("Connected to Database ✔")
    } catch (error) {
        console.log("Error connecting to database", error)
    }
}

let corsOptions = {
    credentials: true,
    origin: ['http://localhost:5173']
}

// Declare routes
app.use(express.json())
app.use(cors(corsOptions))

app.use('/', products)
