export default class Favorite {
	constructor() {
		this.favorites = [];
	}

	addFavorite(id, title, image) {
		const fav = {
			id,
			title,
			image
		};
		this.favorites.push(fav);
		return fav;
	}

	removeFavorite(id) {
		const index = this.favorites.findIndex(el => el.id == id);
		this.favorites.splice(index, 1);
	}

	isFavorited(id) {
		return this.favorites.findIndex(el => el.id == id) !== -1;
	}

	getNumFavorite() {
		return this.favorites.length;
	}
}