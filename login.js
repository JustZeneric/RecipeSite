// User database
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" }
];

// Login function
function login(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password match any user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Store the username in localStorage
    localStorage.setItem("username", username);

    // Redirect to the home page
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}


// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", login);
