// server.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Route for user signup
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        db.run('INSERT INTO Users(usr_name, usr_password) VALUES(?, ?)', [username, password], function(err) {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            console.log(`User ${username} signed up successfully`);
            res.status(201).json({ message: 'User signed up successfully' });
        });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
