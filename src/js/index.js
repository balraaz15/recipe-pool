// Spoonacular API Key : f17a5a50930a46ee878e7608b9f48fe8
// URL : [GET] https://api.spoonacular.com/recipes/search

import Search from '../js/models/Search';
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

const searchRecipe = async () => {
	const query = searchView.searchValue();
	if (query) {
		state.search = new Search(query);
		elements.searchLoader.style.display = 'block';
		searchView.clearResult();
		state.recipe = await state.search.getRecipes();
		searchView.renderResults(state.recipe);
		elements.searchLoader.style.display = 'none';
	}
	console.log(state);
}

elements.recipeForm.addEventListener('submit', e => {
	e.preventDefault();
	searchRecipe();
});
