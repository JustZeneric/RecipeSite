const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Check if the submitted login credentials are valid
  if (validateCredentials(username, email, password)) {
    // Set the user status as logged in
    req.session.isLoggedIn = true;
    // Redirect to the homepage
    res.redirect('index.html');
  } else {
    // Handle any errors
    res.status(401).send('Login failed!');
  }
});

// For testing purposes, we'll set up two sets of login credentials
const validCredentials = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
];

// Check if the submitted login credentials are valid
function validateCredentials(username, email, password) {
  return validCredentials.some((credentials) => {
    return credentials.username === username && credentials.email === email && credentials.password === password;
  });
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
