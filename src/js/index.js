import Search from '../js/models/Search';
import Recipe from '../js/models/Recipe';
import { elements } from './views/base';
import * as searchView from './views/searchView';

/** 
 * Global state of the application
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipe object
 */
const state = {};

/** 
 * SEARCH CONTROLLER 
 */
const searchRecipe = async () => {
	const query = searchView.searchValue();
	if (query) {
		state.search = new Search(query);
		elements.searchLoader.style.display = 'block';
		searchView.clearResult();
		state.recipes = await state.search.getRecipes();
		searchView.renderResults(state.recipes);
		elements.searchLoader.style.display = 'none';
	}
	console.log(state);
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
	console.log(`Id: ${id}`);

	if (id) {
		elements.descLoader.style.display = 'block';
		state.recipe = new Recipe(id);
		state.recipeData = await state.recipe.getRecipe();
		elements.descLoader.style.display = 'none';
	}
	console.log(state);
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * Page Title
*/
elements.title.setAttribute('href', window.origin);
