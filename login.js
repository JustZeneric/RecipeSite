 
 
 
 // Check if the submitted login credentials are valid
 function validateCredentials(username, email, password) {
  // For testing purposes, we'll set up two sets of login credentials
  const validCredentials = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' },
  ];

  return validCredentials.some((credentials) => {
    return credentials.username === username && credentials.email === email && credentials.password === password;
  });
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (validateCredentials(username, email, password)) {
    // Set a cookie or some other mechanism to remember that the user is logged in
    document.cookie = 'loggedIn=true';
    // Redirect to the homepage
    window.location.href = 'index.html';
  } else {
    alert('Login failed!');
  }
}