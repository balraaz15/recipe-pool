/** 
 * Contains all the elements for the app 
 */

export const elements = {
	title: document.querySelector('.title'),
	recipeForm: document.querySelector('.search-recipe'),
	recipeInput: document.querySelector('.search-box'),
	resultsBox: document.querySelector('.results-box'),
	// searchLoader: document.querySelector('.loader-search'),
	// descLoader: document.querySelector('.loader-desc'),
	resultList: document.querySelector('.results-list'),
	resultItem: document.querySelector('.results-list .result-item'),
	resultItemTitle: document.querySelector('.results-list .result-item h6'),
	recipeDesc: document.querySelector('#desc'),
};

export const renderLoader = parent => {
	const loader = `
		<div class="loader">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	`;

	parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
	const loader = document.querySelector('.loader');
	if (loader) {
		loader.parentElement.removeChild(loader);
	}
}
