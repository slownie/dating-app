require('dotenv').config();
const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const uri = 'mongodb+srv://slownie:123@cluster0.hbyv0.mongodb.net/?retryWrites=true&w=majority'

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.json({mssg: 'Welcome'})
});

// Sign up to the Database
app.post('/signup', async(req,res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users');
    } catch (error) {
        console.log(error);
    }
});

// Database Connection
app.listen(process.env.PORT, () => console.log('Server running on PORT 4000'))