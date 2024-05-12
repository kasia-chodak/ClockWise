const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = "mongodb+srv://adaniem80:Drmm7CAwWO7fcPU0@app-dev-cluster.0ohvmtq.mongodb.net/?retryWrites=true&w=majority&appName=app-dev-cluster";

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the database
async function connectDB() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Export the MongoDB client and the connectDB function
module.exports = { client, connectDB };
