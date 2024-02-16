// const express = require('express')
// const app = express();
// require('dotenv').config();
// const cors = require('cors');
// const cookie_parser = require('cookie-parser');
// const mongoose = require('mongoose');

// app.use(cors({
//   origin : true,
//   credentials : true
// }));

// app.use(cookie_parser());

// app.use(express.json());

// const Retail_User_Routes = require('./Routes/Retail_User_Routes')

// app.use('/api/retail' , Retail_User_Routes);
// // const userRoutes = require('./Routes/UserRoutes');
// // const gptRouters = require('./Routes/ChatGPTroutes');
// // app.use('/api/user' , userRoutes);
// // //Use GPT Routes
// // app.use('/api/gpt' , gptRouters);
// const PORT = process.env.PORT || 5000;

// app.listen(PORT , ()=>{
//     console.log(`Server is running on port ${PORT}`);
// })




















const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
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

// Login endpoint
app.post('/login', async (req, res) => {
    try {
      await client.connect();
      const db = client.db('Unity-In-Threads');
      const collection = db.collection('RetailEmployee');
  
      const { email, password } = req.body;
  
      // Perform the login logic here (e.g., check email and password against stored data)
      const user = await collection.findOne({ email, password });
  
      if (user) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  });

  // Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
    return client.db('Unity-In-Threads').collection('Bills');
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

// Fetch bill by billNumber endpoint
app.get('/api/getBill/:billNumber', async (req, res) => {
  try {
    //console.log('You are in server.');
    const billsCollection = await connectToDatabase();
    const billNumber = req.params.billNumber;
    console.log('Bill Number: ' + billNumber + ' jani kia haal hay');
    const bill = await billsCollection.findOne({ billNumber });

    if (bill) {
      res.status(200).json(bill);
    } else {
      res.status(404).json({ error: 'Bill not found' });
    }
  } catch (error) {
    console.error("Error fetching bill:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
