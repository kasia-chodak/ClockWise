const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require("cors");
const util = require('util');

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(bodyParser.json());

// Route for user signup
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // HOW NOT TO STORE PASSWORDS!!!!
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

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        db.get('SELECT * from Users WHERE usr_name = ? AND usr_password = ?', [username, password], function (err, result) {
            if (!result) {
                res.sendStatus(404);
                return;
            }

            res.status(200).json({
                usr_name: result.usr_name,
                usr_id: result.usr_id
            });
        });



    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.post('/api/task', async (req, res) => {
    const { name, date, userId } = req.body;
    db.run(`INSERT INTO Tasks (tsk_name, tsk_execution_date, tsk_user_id) VALUES (?, ?, ?)`, [name, date, userId], function(err) {
        if (err) {
            res.sendStatus(500);
            console.error("Error inserting mission data into database:", err.message);
            return;
        }
        res.status(200).json({
          id: this.lastID
        })
        console.log(`Row inserted with rowid: ${this.lastID}`);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});