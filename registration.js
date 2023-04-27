const express = require('express');
const mysql = require('mysql');

const app = express();

// Configure MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'userdb'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database with ID ' + connection.threadId);
});

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
