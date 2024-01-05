const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cors({
  origin : true,
  credentials : true
}));

app.use(cookie_parser());

app.use(express.json());

const Retail_User_Routes = require('./Routes/Retail_User_Routes')

app.use('/api/retail' , Retail_User_Routes);
// const userRoutes = require('./Routes/UserRoutes');
// const gptRouters = require('./Routes/ChatGPTroutes');
// app.use('/api/user' , userRoutes);
// //Use GPT Routes
// app.use('/api/gpt' , gptRouters);
const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})