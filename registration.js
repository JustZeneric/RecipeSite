
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


const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  const url = "https://api.backendless.com/<E3445B62-E657-3EB3-FF35-C9710D47EE00>/<C71CEADD-7AE5-4A8C-AB6D-4764AC773CA7>/users/register";
  const data = {
    username: username,
    email: email,
    password: password
  };
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Handle successful registration
    console.log(data);
    alert("Registration successful. You may now log in.");
    window.location.href = "login.html";
  })
  .catch(error => {
    // Handle error
    console.error(error);
    alert("Registration failed. Please try again.");
  });
});