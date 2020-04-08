/** 
 * Contains all the elements for the app 
 */

export const elements = {
	title: document.querySelector('.title'),
	favoriteTop: document.querySelector('.favorites'),
	favoriteBox: document.querySelector('.favorites-list'),
	recipeForm: document.querySelector('.search-recipe'),
	searchBar: document.querySelector('.search-bar'),
	recipeInput: document.querySelector('.search-box'),
	resultsBox: document.querySelector('.results-box'),
	resultList: document.querySelector('.results-list'),
	resultItem: document.querySelector('.results-list .result-item'),
	resultItemTitle: document.querySelector('.results-list .result-item h6'),
	recipeDesc: document.querySelector('#desc'),
	favorite: document.querySelector('.favorite'),
	favorited: document.querySelector('.favorited'),
	favBox: document.querySelector('.favorites-list'),
	favList: document.querySelector('.fav-list'),
	shoppingList: document.querySelector('.shopping-list'),
	searchPages: document.querySelector('.more-results'),
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
