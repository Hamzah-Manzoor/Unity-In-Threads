import mongoose, { model } from 'mongoose';
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import RetailRoutes from './Routes/Retail-Routes.js'

const app = express();
const port = 3000;

const uri = "mongodb+srv://l201269:dRb8JHOGNS8EgGKq@unity-in-threads.wdi6zdw.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://l201269:dRb8JHOGNS8EgGKq@unity-in-threads.wdi6zdw.mongodb.net/Unity-In-Threads?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/', RetailRoutes);

mongoose.connect(uri2, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


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



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
