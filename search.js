document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById('username-input');
    const searchForm = document.getElementById('search-form');
    const recipesList = document.getElementById('recipes-list');
    
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const ingredients = document.getElementById('ingredients-input').value;
      const apiKey = 'd2022805135f4958aa84df765220ceaf';
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
    
      fetch(apiUrl)
        .then(response => response.json())
        .then(recipes => {
          recipesList.innerHTML = '';
          recipes.forEach(recipe => {
            const recipeHtml = `
              <div class="recipe">
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <button class="save-recipe-btn" data-recipe-id="${recipe.id}">Save Recipe</button>
              </div>
            `;
            recipesList.insertAdjacentHTML('beforeend', recipeHtml);
          });
        })
        .catch(error => console.error(error));
    });
    
    recipesList.addEventListener('click', (event) => {
      if (event.target.classList.contains('save-recipe-btn')) {
        const recipeId = event.target.getAttribute('data-recipe-id');
        const username = usernameInput.value;
        saveRecipe(username, recipeId);
      }
    });
    
    function saveRecipe(recipeId) {
        const apiUrl = 'save_recipe.php';
        const data = {
          recipe_id: recipeId
        };
      
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => console.log(data))
        .catch(error => {
          console.error(error);
          alert('An error occurred while saving the recipe.');
        });
      }
      
  });
  