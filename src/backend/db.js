const sqlite3 = require('sqlite3').verbose();
const dbPath = './database.db'; // Relative path to database.db file

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error('Error connecting to SQLite database:', err.message);
    }
    console.log('Connected to SQLite database');
});

module.exports = db;

