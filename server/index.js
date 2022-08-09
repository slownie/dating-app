require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Logs request method and path
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req,res,next) => {
    res.json({mssg: 'test'});
    next();
})

// Routes
app.use('/api/users', userRoutes);

// Connect to db
mongoose.connect(process.env.URI)
    .then(() => {
        // Don't listen for requests until we connect to the database
        app.listen(process.env.PORT, () => console.log('Connected to db & Server running on PORT 4000'))
    })
    .catch((error) => {
        console.log(error)
    })





