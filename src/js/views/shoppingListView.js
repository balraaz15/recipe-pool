import { elements } from './base';

export const renderList = item => {
	let listItem;
	listItem = document.createElement('li');
	listItem.className = 'shopping-item';
	listItem.classList.add('animated');
	listItem.classList.add('bounceIn');
	listItem.setAttribute('data-itemid', `${item.id}`);
	listItem.innerHTML = `
		<div class="row d-flex justify-content-between">
			<div class="col-md-4">
				<div class="input-group mb-2">
					<input
						type="number"
						class="form-control form-control-sm l-amount"
						value="${item.amount}"
						step="${item.amount}"
						min="0"
					/>
					<div class="input-group-prepend">
						<div class="input-group-text l-unit">
							${item.unit}
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 l-ingredient">
				${item.ingredient}
			</div>
			<div class="l-remove text-danger col-md-1">
				<i class="fas fa-trash"></i>
			</div>
		</div>
	`;

	elements.shoppingList.insertAdjacentElement('beforeend', listItem);
};

export const removeItem = id => {
	const item = document.querySelector(`[data-itemid="${id}"]`);
	if (item) item.parentElement.removeChild(item);
}