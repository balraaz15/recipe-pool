import { elements } from './base';

export const toggleFavIcon = currentState => {
	const favorite = document.querySelector('.favorite');
	const favorited = document.querySelector('.favorited');
	if (currentState === 'nofav') {
		favorite.style.display = 'none';
		favorited.style.display = 'block';
	} else {
		favorited.style.display = 'none';
		favorite.style.display = 'block';
	}
}

export const renderFavorite = favItem => {
	let favList;
	favList = document.createElement('li');
	favList.className = 'fav-item';
	favList.innerHTML = `
		<a href="#${favItem.id}" class="row">
			<div class="col-md-3">
				<img src="${favItem.image}" alt="Chicken" />
			</div>
			<h6 class="col-md-9">${favItem.title}</h6>
		</a>
	`;

	elements.favList.insertAdjacentElement('beforeend', favList);
}

export const removeFav = id => {
	const favItem = document.querySelector(`.fav-item a[href*=${id}]`).parentElement;
	if (favItem) favItem.parentElement.removeChild(favItem);
}
