import axios from 'axios';
import { apiKey, corsProxy } from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getRecipes() {
		try {
			console.log('Getting the recipes.');
			const result = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${this.query}&number=50`);
			const recipes = result.data.results;
			// console.log('Recipe extracted: ', recipes);
			return recipes;
		} catch (error) {
			alert(error);
		}
	}
}