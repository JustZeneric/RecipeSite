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
