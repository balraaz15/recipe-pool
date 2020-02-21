// Spoonacular API Key : f17a5a50930a46ee878e7608b9f48fe8
// URL : [GET] https://api.spoonacular.com/recipes/search

import Search from './models/Search';

const search = new Search('pizza');

search.getRecipes();
