import { elements } from './base';

export const searchValue = () => elements.recipeInput.value;

export const clearResult = () => {
	elements.resultList.innerHTML = '';
	elements.searchPages.innerHTML = '';
}

export const highlightSelectedItem = id => {
	const active = document.querySelector('.active');
	if (active) active.classList.remove('active');
	document.querySelector(`.result-item a[href="#${id}"]`).parentElement.classList.add('active');
}

const createButton = (page, type) => `
	<span class="${type}-btn shadow-sm pag-btn" data-goto=${type === 'prev' ? page - 1 : page + 1}>
			<i class="fas fa-arrow-circle-${type === 'prev' ? 'left' : 'right'}"></i>
			<span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
		</span>
`;

const renderButtons = (page, numResults, resPerPage) => {
	const pages = Math.ceil(numResults / resPerPage);

	let button;
	if (page === 1 && pages > 1) {
		button = createButton(page, 'next');
	} else if (page < pages) {
		button = `
			${createButton(page, 'prev')}
			${createButton(page, 'next')}
		`;
	} else if (page === pages && pages > 1) {
		button = createButton(page, 'prev');
	}

	elements.searchPages.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
	const start = (page - 1) * resPerPage;
	const end = page * resPerPage;
	let recipeItem;
	recipes.slice(start, end).map(recipe => {
		recipeItem = document.createElement('li');
		recipeItem.className = 'result-item';
		recipeItem.classList.add('animated');
		recipeItem.classList.add('fadeIn');
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

	renderButtons(page, recipes.length, resPerPage);
}
