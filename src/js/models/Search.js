import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getRecipes() {
		const apiKey = 'f17a5a50930a46ee878e7608b9f48fe8';
		const corsProxy = 'https://cors-anywhere.herokuapp.com/';

		try {
			console.log('Getting the recipes.');
			const result = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${this.query}&number=10`);
			const recipes = result.data.results;
			// console.log('Recipe extracted: ', recipes);
			return recipes;
		} catch (error) {
			alert(error);
		}
	}
}