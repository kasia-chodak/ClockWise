const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route for user signup
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        db.get('SELECT * FROM Users WHERE usr_name = ?', [username], (err, existingUser) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (existingUser) {
                return res.status(409).json({ message: 'User already exists' });
            }
            // User does not exist, proceed with signup
            db.run('INSERT INTO Users(usr_name, usr_password) VALUES(?, ?)', [username, password], function(err) {
                if (err) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
                console.log(`User ${username} signed up successfully`);
                res.status(201).json({ message: 'User signed up successfully' });
            });
        });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for user login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists with the provided username and password
        db.get('SELECT * FROM Users WHERE usr_name = ? AND usr_password = ?', [username, password], (err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            console.log(`User ${username} logged in successfully`);
            res.status(200).json({ message: 'User logged in successfully', user });
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
