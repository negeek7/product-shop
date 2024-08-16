import express from 'express'

const app = express()
const PORT = process.env.PORT


// This is the main file



// Create a server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// Initialize connection to mongodb via mongodb url

// Declare routes
