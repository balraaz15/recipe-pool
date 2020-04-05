import { elements } from './base';
import { Fraction } from 'fractional';

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
            <p>
              <i class="fas fa-concierge-bell"></i>${recipeItem.servings > 1 ? recipeItem.servings + ' persons' : recipeItem.servings + ' person'} 
            </p>
          </div>
          <div class="col-md-4 text-danger favorite">
            <p><i class="far fa-heart"></i> Favorite</p>
          </div>
        </div>
      </div>
      <hr class="w-75" />
      <div class="recipe-list">
        <h6>Ingredients:</h6>
        <ul class="ingredients">
          ${recipeItem.extendedIngredients.map(ingr => renderIngredients(ingr)).join('')}
        </ul>
        <hr class="w-75" />
        <h6>Instructions:</h6>
        <div class="instructions">
          <ol class="inst-list">
            ${recipeItem.analyzedInstructions[0].steps.map(inst => renderInstructions(inst)).join('')}
          </ol>
        </div>
      </div>
    </div>
    `;

  elements.recipeDesc.appendChild(recipe);

  const recipeImg = document.querySelector('.recipe-img');
  recipeImg.style.backgroundImage = `url(${recipeItem.image})`;
}

/**
 * Format the amount from decimal number to fraction. 
 */
const formatAmount = amount => {
  if (amount) {
    const [integer, decimal] = amount.toString().split('.').map(num => parseInt(num, 10));

    if (!decimal) return amount;

    if (integer === 0) {
      const fr = new Fraction(amount);
      return `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(amount - integer);
      return `${integer} ${fr.numerator}/${fr.denominator}`;
    }
  }
  return '?';
}

const renderIngredients = ing => `
  <li>
    <i class="fas fa-angle-double-right"></i>
    <span class="col-md-9">
      ${ing.originalString}
    </span>
  </li>
`;

const renderInstructions = instruction => `
  <li>
    <span>
      ${instruction.step}
    </span>
  </li>
`;
