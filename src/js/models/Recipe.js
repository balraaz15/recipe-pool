import axios from 'axios';
import { apiKey, corsProxy } from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id
	};

	async getRecipe() {
		try {
			console.log('Fetching the recipe list ...');
			const recipe = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${apiKey}&includeNutrition=false`);
			return recipe.data;
			// return recipe.data.ingredients;
		} catch (error) {
			alert(error);
		}
	}

}