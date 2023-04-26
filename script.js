// Get the login button and username list item
const loginBtn = document.getElementById('login-btn');
const usernameLi = document.getElementById('username-li');

// Check if the user is logged in by looking for a saved username in local storage
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
  // Display the username and hide the login button
  loginBtn.style.display = 'none';
  const dropdownMenu = document.createElement('div');
  dropdownMenu.className = 'dropdown';
  const usernameLink = document.createElement('a');
  usernameLink.href = '#';
  usernameLink.className = 'dropdown-toggle text-decoration-none ms-3 text-uppercase';
  usernameLink.setAttribute('data-bs-toggle', 'dropdown');
  usernameLink.textContent = savedUsername;
  dropdownMenu.appendChild(usernameLink);
  const dropdownMenuList = document.createElement('ul');
  dropdownMenuList.className = 'dropdown-menu';
  dropdownMenuList.setAttribute('aria-labelledby', 'dropdownMenuLink');
  const accountLink = document.createElement('a');
  accountLink.href = 'account.html';
  accountLink.className = 'dropdown-item';
  accountLink.textContent = 'Account';
  dropdownMenuList.appendChild(accountLink);
  const recipesLink = document.createElement('a');
  recipesLink.href = 'recipes.html';
  recipesLink.className = 'dropdown-item';
  recipesLink.textContent = 'Recipes';
  dropdownMenuList.appendChild(recipesLink);
  const logoutLink = document.createElement('a');
  logoutLink.href = '#';
  logoutLink.className = 'dropdown-item';
  logoutLink.textContent = 'Logout';
  logoutLink.addEventListener('click', logout);
  dropdownMenuList.appendChild(logoutLink);
  dropdownMenu.appendChild(dropdownMenuList);
  usernameLi.appendChild(dropdownMenu);
} 
else {
  // Display the login button and hide the username
  loginBtn.style.display = 'block';
  const logoutBtn = document.getElementById('logout-btn');
  logoutBtn.style.display = 'none';
  const usernameSpan = document.getElementById('username');
  usernameSpan.style.display = 'none';
}

// Add a click event listener to the login button
loginBtn.addEventListener('click', () => {
  // Redirect to the login page
  window.location.href = 'login.html';
});

// Add a function to handle logging out
function logout() {
  // Remove the saved username from local storage
  localStorage.removeItem('username');
  // Redirect to the home page to show the login button again
  window.location.href = 'index.html';
}
