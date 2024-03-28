import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors'; // Import the cors middleware

const app = express();
const port = 4000;

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
    console.log('Bill Number: ' + billNumber);
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


app.post("/set-product-rate", async (req, res) => {
  try {
      // Connect to the database
      await client.connect();
      const db = client.db('Unity-In-Threads');
      const collection = db.collection('ProductRate');

      const { priceCode, rate } = req.body;

      // Check if the price code already exists in the database
      const existingRate = await collection.findOne({ priceCode });

      if (existingRate) {
          // If the price code already exists, return a 409 Conflict status
          return res.status(409).json({ error: 'Price code already exists' });
      }

      // If the price code doesn't exist, insert the new product rate
      const result = await collection.insertOne({ priceCode, rate });

      res.status(201).json({ message: 'Product rate added successfully', insertedId: result.insertedId });
  } catch (error) {
      console.error("Error adding product rate:", error);
      res.status(500).json({ error: 'Internal Server Error' });
  } finally {
      await client.close();
  }
});


app.post("/update-product-rate", async (req, res) => {
  try {
      
      // Connect to the database
      await client.connect();
      const db = client.db('Unity-In-Threads');
      const collection = db.collection('ProductRate');

      const { priceCode, rate } = req.body;

      // Check if the price code exists in the database
      const existingRate = await collection.findOne({ priceCode });

      if (!existingRate) {
          return res.status(404).json({ error: 'Price code not found' });
      }

      // Update the rate for the given price code
      await collection.updateOne({ priceCode }, { $set: { rate } });

      res.status(200).json({ message: 'Product rate updated successfully.' });
  } catch (error) {
      console.error("Error updating product rate:", error);
      res.status(500).json({ error: 'Internal Server Error' });
  } finally {
      await client.close();
  }
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
