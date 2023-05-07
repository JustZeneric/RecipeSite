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


// Fridge Toggle Icons

function ToggleIcon() {
  const inputButtons = document.getElementsByClassName("btn-check");
  const buttonIcons = document.getElementsByClassName("toggle-icon");

  for (let i = 0; i < inputButtons.length; i++) {
    if (inputButtons[i].checked) {
      buttonIcons[i].className = "fa-regular fa-circle-check ms-2 toggle-icon";
    } else {
      buttonIcons[i].className = "fa-solid fa-plus ms-2 toggle-icon";
    }
  }
}
ToggleIcon();

// Creating Table Data

function addToTable() {
  const checkboxes = document.querySelectorAll('.btn-check:checked');
  const tableBody = document.querySelector('#tableBody tbody');
  
  checkboxes.forEach((checkbox) => {
    const label = checkbox.nextElementSibling.textContent.trim();
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const input = document.createElement('input');
    
    cell1.textContent = label;
    input.type = 'number';
    input.min = '0';
    input.max = '99';
    input.className = "form-control";
    input.style = "width: 80px"
    cell2.appendChild(input);
    cell2.className = "text-center d-flex justify-content-center w-100";
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    ToggleIcon(checkbox);
  });
}


