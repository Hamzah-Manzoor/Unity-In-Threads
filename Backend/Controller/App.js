const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

const uri = "mongodb+srv://l201269:dRb8JHOGNS8EgGKq@unity-in-threads.wdi6zdw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/registerUser', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('Unity-In-Threads');
    const collection = db.collection('RetailEmployee');

    const userData = req.body;

    const result = await collection.insertOne(userData);

    res.status(201).json({ message: 'User registered successfully', insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
