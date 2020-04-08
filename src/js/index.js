import Search from './models/Search';
import Recipe from './models/Recipe';
import ShoppingList from './models/ShoppingList';
import Favorite from './models/Favorite';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as shoppingListView from './views/shoppingListView';
import * as favoritesView from './views/favoritesView';

/** 
 * Global state of the application
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipe object
 * - measurement preference
 */
const state = {
	showFavBox: false,
};

/** 
 * SEARCH CONTROLLER 
 */
const searchController = async () => {
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
	searchController();
});

elements.searchPages.addEventListener('click', e => {
	const btn = e.target.closest('.pag-btn');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResult();
		searchView.renderResults(state.recipes, goToPage);
	}
});

/** 
 * RECIPE CONTROLLER 
 */
const recipeController = async () => {
	const id = window.location.hash.replace('#', '');

	if (id) {
		const s = state.recipes.find(item => item.id == id);
		document.title = `Recipe Pool: ${s.title}`;
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

window.addEventListener('hashchange', recipeController);

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, recipeController));

/**
 * Shopping List controller
 */
const shoppingListController = () => {
	if (!state.list) state.list = new ShoppingList();
	state.recipeData.extendedIngredients.map(ingr => {
		const item = state.list.addItem(ingr.measures.us.amount, ingr.measures.us.unitShort, ingr.originalName);
		shoppingListView.renderList(item);
	});
}

/**
 * Favorite Controller
 */
const favoriteController = () => {
	if (!state.favorites) state.favorites = new Favorite();
	const currentRecipeId = state.recipeData.id;
	if (!state.favorites.isFavorited(currentRecipeId)) {
		let recipeImg = state.recipeData.image;
		recipeImg = recipeImg.split('-')[0] + "-90x90.jpg";
		const newFav = state.favorites.addFavorite(currentRecipeId, state.recipeData.title, recipeImg);
		favoritesView.toggleFavIcon('nofav');
		favoritesView.renderFavorite(newFav);
		console.log(state.favorites);
	} else {
		state.favorites.removeFavorite(currentRecipeId);
		favoritesView.toggleFavIcon('fav');
		favoritesView.removeFav(currentRecipeId);
		console.log(state.favorites);
	}
}

elements.recipeDesc.addEventListener('click', e => {
	if (e.target.matches('.btn-add-list, .btn-add-list *')) {
		shoppingListController();
	} else if (e.target.matches('.recipe-fav, .recipe-fav *')) {
		favoriteController();
	}
});

elements.shoppingList.addEventListener('click', e => {
	const id = e.target.closest('.shopping-item').dataset.itemid;

	if (e.target.matches('.l-remove, .l-remove *')) {
		state.list.removeItem(id);
		shoppingListView.removeItem(id);
	} else if (e.target.matches('.l-amount')) {
		const amt = parseFloat(e.target.value, 10);
		state.list.updateItem(id, amt);
		console.log(state.list);
	}
});

elements.searchBar.addEventListener('click', e => {
	if (e.target.matches('.favorites, .favorites *')) {
		if (state.favorites) {
			document.querySelector('.fav-msg').style.display = 'block';
			document.querySelector('.nofav-msg').style.display = 'none';
		} else {
			document.querySelector('.fav-msg').style.display = 'none';
			document.querySelector('.nofav-msg').style.display = 'block';
		}
		if (state.showFavBox) {
			elements.favBox.style.display = 'none';
			state.showFavBox = false;
			return;
		} else {
			elements.favBox.style.display = 'block';
			state.showFavBox = true;
			return;
		}
	}
});

/**
 * Page Title
*/
elements.title.setAttribute('href', window.origin);

/**
 * Load starter page if no search and link exists in URL
 * TODO :: use localstorage for better UX
 */
// window.addEventListener('load', function () {
// 	if (window.location.hash && !state.search) window.location = window.origin;
// });
