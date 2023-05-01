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
    window.location.replace("index.html");
  } else {
    alert("Invalid username or password.");
  }
  
}

const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("closed");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("closed");
  }
});

  
// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", login);

// Add event listener to the show password checkbox
document.getElementById("show-password").addEventListener("change", showPassword);
// Initialize the FirebaseUI Widget using Firebase.
