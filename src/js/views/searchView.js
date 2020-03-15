import { elements } from './base';

export const searchValue = () => elements.recipeInput.value;

export const clearResult = () => {
	elements.resultList.innerHTML = '';
}

export const renderResults = (recipes) => {
	let recipeItem;
	recipes.map(recipe => {
		recipeItem = document.createElement('li');
		recipeItem.className = 'result-item row';
		recipeItem.setAttribute('data-recipe-id', recipe.id);
		recipeItem.innerHTML = `<div class="col-md-4">
						<img src="https://spoonacular.com/recipeImages/${recipe.id}-90x90.jpg" alt="${recipe.title}" crossorigin="anonymous" />
					</div>
					<div class="col-md-8">
						<h6>${recipe.title}</h6>
						<p>Servings: ${recipe.servings}</p>
						<p>${recipe.readyInMinutes} mins.</p>
					</div>`;

		elements.resultList.insertAdjacentElement('beforeend', recipeItem);
	});
}
