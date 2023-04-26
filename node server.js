const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Set up the valid login credentials
const validCredentials = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
];

// Check if the submitted login credentials are valid
function validateCredentials(username, email, password) {
  return validCredentials.some(
    (credentials) =>
      credentials.username === username &&
      credentials.email === email &&
      credentials.password === password
  );
}

// Login route
app.post('/login', (req, res) => {
  const { username, email, password } = req.body;

  // Check if the submitted login credentials are valid
  if (validateCredentials(username, email, password)) {
    // Set the user status as logged in and store the username in the session
    req.session.isLoggedIn = true;
    req.session.username = username;

    // Redirect to the homepage
    res.redirect('/');
  } else {
    // Handle any errors
    res.status(401).send('Login failed!');
  }
});

// Homepage route
app.get('/', (req, res) => {
  // Get the logged-in user's information from the session
  const isLoggedIn = req.session.isLoggedIn || false;
  const username = req.session.username || '';

  // Render the homepage template with the user's information
  res.render('index', { isLoggedIn, username });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
