const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('database.sqlite', (err) => {
    if (err) {
        return console.error('Error connecting to SQLite database:', err.message);
    }
    console.log('Connected to SQLite database');
});

// create if not exists table users
db.run(`CREATE TABLE IF NOT EXISTS Users (
                                             usr_id INTEGER NOT NULL  PRIMARY KEY,
                                             usr_name VARCHAR NOT NULL,
                                             usr_password VARCHAR NOT NULL
        );
CREATE TABLE IF NOT EXISTS Tasks(
                      tsk_id INTEGER NOT NULL PRIMARY KEY,
                      tsk_name VARCHAR NOT NULL,
                      tsk_execution_date DATETIME NOT NULL);
`)

// Export the SQLite database instance
module.exports = db;