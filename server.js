const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pantrypal'
});

// Connect to database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});

// Parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public folder
app.use(express.static('public'));

// Handle form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    connection.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error saving user data:', err);
            res.status(500).send('Error saving user data');
            return;
        }
        console.log('User data saved to database:', result);
        res.send('Registration successful!');
    });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
