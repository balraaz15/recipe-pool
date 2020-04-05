import Search from '../js/models/Search';
import Recipe from '../js/models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';

/** 
 * Global state of the application
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipe object
 * - measurement preference
 */
const state = {};

/** 
 * SEARCH CONTROLLER 
 */
const searchRecipe = async () => {
	const query = searchView.searchValue();
	if (query) {
		document.title = `Recipe Pool: ${query.charAt(0).toUpperCase() + query.slice(1)}`;
		state.search = new Search(query);
		searchView.clearResult();
		renderLoader(elements.resultsBox);
		try {
			state.recipes = await state.search.getRecipes();
			clearLoader();
			searchView.renderResults(state.recipes);
		} catch (error) {
			alert(error);
			clearLoader();
		}
		console.log(state);
	}
}

elements.recipeForm.addEventListener('submit', e => {
	e.preventDefault();
	searchRecipe();
});

/** 
 * RECIPE CONTROLLER 
 */
const controlRecipe = async () => {
	const id = window.location.hash.replace('#', '');

	if (id) {
		const search = state.recipes.find(item => item.id == id);
		document.title = `Recipe Pool: ${search.title}`;
		state.recipe = new Recipe(id);
		recipeView.clearRecipe();
		renderLoader(elements.recipeDesc);
		if (state.search) searchView.highlightSelectedItem(id);
		try {
			state.recipeData = await state.recipe.getRecipe();
			clearLoader();
			recipeView.renderRecipeDesc(state.recipeData);
		} catch (error) {
			console.log(error);
			clearLoader();
		}
	}
	console.log(state);
}

window.addEventListener('hashchange', controlRecipe);

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * Page Title
*/
elements.title.setAttribute('href', window.origin);

/**
 * Load starter page if no search and link exists in URL
 * TODO :: use localstorage for better UX
 */
window.addEventListener('load', function () {
	if (window.location.hash && !state.search) window.location = window.origin;
});
