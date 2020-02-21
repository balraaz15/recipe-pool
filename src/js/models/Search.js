import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getRecipes() {
		console.log(`Searching for recipes of ${this.query.uppercase()}`);
		const apiKey = 'f17a5a50930a46ee878e7608b9f48fe8';
		const corsProxy = 'https://cors-anywhere.herokuapp.com/';

		try {
			// result = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${this.query}&number=2`);
			// this.result = result.data.results;
			// console.log(this.result);
		} catch (error) {
			alert(error);
		}
	}
}