const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  // Make an AJAX request to submit the form data
  const loginData = {
    username: username,
    email: email,
    password: password
  };
  
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    // Handle the response from the server
    if (response.ok) {
      // Redirect to the homepage
      window.location.href = '/';
      // Set the user status as logged in
      localStorage.setItem('isLoggedIn', true);
    } else {
      // Handle any errors
      alert('Login failed!');
    }
  })
  .catch((error) => {
    console.error('Error submitting login form', error);
  });
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
