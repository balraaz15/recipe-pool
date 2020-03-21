import axios from 'axios';
import { apiKey, corsProxy } from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id
	};

	async getRecipe() {
		try {
			const recipe = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/${this.id}/ingredientWidget.json?apiKey=${apiKey}`);
			return recipe.data.ingredients;
		} catch (error) {
			alert(error);
		}
	}

}