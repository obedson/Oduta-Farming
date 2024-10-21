const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Farm Management Backend is running');
});



const uri = process.env.MONGO_URI;
const client = new MongoClient(uri); // Simply pass the connection string

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!, Oduta Agro Backend is running");
  } catch (err) {
    console.error(err);
  }
}

connect();
