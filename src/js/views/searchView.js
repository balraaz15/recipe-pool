import { elements } from './base';

export const searchValue = () => elements.recipeInput.value;

export const clearResult = () => {
	elements.resultList.innerHTML = '';
}

export const highlightSelectedItem = id => {
	const active = document.querySelector('.active');
	if (active) active.classList.remove('active');
	document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');
}

export const renderResults = (recipes) => {
	let recipeItem;
	recipes.map(recipe => {
		recipeItem = document.createElement('li');
		recipeItem.className = 'result-item';
		recipeItem.innerHTML = `
			<a class="row" href="#${recipe.id}">
				<div class="col-md-4">
					<img src="https://spoonacular.com/recipeImages/${recipe.id}-90x90.jpg" alt="${recipe.title}" crossorigin="anonymous" />
				</div>
				<div class="col-md-8">
					<h6>${recipe.title}</h6>
					<p><i class="fas fa-concierge-bell"></i> ${recipe.servings} person(s)</p>
					<p><i class="fas fa-stopwatch"></i> ${recipe.readyInMinutes} mins.</p>
				</div>
			</a>
			`;

		elements.resultList.insertAdjacentElement('beforeend', recipeItem);
	});
}
