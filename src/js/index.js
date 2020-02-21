// Spoonacular API Key : f17a5a50930a46ee878e7608b9f48fe8
// URL : [GET] https://api.spoonacular.com/recipes/search

import axios from 'axios';

async function getResults(query) {
	const apiKey = 'f17a5a50930a46ee878e7608b9f48fe8';
	const corsProxy = 'https://cors-anywhere.herokuapp.com/';
	try {
		// const result = await axios.get(`${corsProxy}https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&number=2`);
		// console.log(result.data.results);
	} catch (error) {
		alert(error);
	}
}

getResults('cheese');
