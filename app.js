const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./userModel'); // Import the user model

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', async(req, res) => {
    const { first, last, email, dob, password, repassword, mobile, gender, qualification } = req.body;

    // Additional validation can be added here

    try {
        const newUser = new User({ first, last, email, dob, password, repassword, mobile, gender, qualification });
        await newUser.save();

        res.status(201).send('Registration successful!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});