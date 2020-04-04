import { elements } from './base';

export const clearRecipe = () => {
  elements.recipeDesc.innerHTML = '';
}

export const renderRecipeDesc = (recipeItem) => {
  let recipe;

  recipe = document.createElement('div');
  recipe.className = 'recipe';
  recipe.innerHTML = `
    <div class="recipe-img shadow"></div>
      <div class="recipe-info">
        <span class="recipe-title main-item-title">${recipeItem.title}</span>
        <div class="row text-center">
          <div class="col-md-4 text-primary">
            <p><i class="fas fa-stopwatch"></i>${recipeItem.readyInMinutes} minutes</p>
          </div>
          <div class="col-md-4 text-info">
            <p><i class="fas fa-concierge-bell"></i>${recipeItem.servings} person(s)</p>
          </div>
          <div class="col-md-4 text-danger favorite">
            <p><i class="far fa-heart"></i> Favorite</p>
          </div>
        </div>
      </div>
      <hr class="w-75" />
      <div class="recipe-list">
        <form class="measurement-preference text-center">
          <span>Preffered measurement system:</span>
          <input
            type="radio"
            id="metric"
            name="measurement"
            value="metric"
          />
          <label for="metric">Metric</label>
          <input 
            type="radio" 
            id="us" 
            name="measurement" 
            value="us" 
            checked 
          />
          <label for="us">US</label><br />
        </form>
        <ul class="ingredients">
          
        </ul>
      </div>
    </div>
    `;

  elements.recipeDesc.appendChild(recipe);

  const recipeImg = document.querySelector('.recipe-img');
  recipeImg.style.backgroundImage = `url(${recipeItem.image})`;
}

export const renderIngredients = (ingredients, measurement) => {
  let ingredientList;
  let amount;
  let unit;
  ingredients.map(ing => {
    amount = ing.measures[measurement].amount;
    unit = ing.measures[measurement].unitShort;
    ingredientList = document.createElement('li');
    ingredientList.innerHTML = `
      <i class="fas fa-angle-double-right"></i>
      <span class="col-md-9">${amount}${unit ? ' ' + unit : ''} ${ing.originalName}</span>
      `;

    document.querySelector('ul.ingredients').insertAdjacentElement('beforeend', ingredientList);
  });
}
