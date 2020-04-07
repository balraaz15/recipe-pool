import uniqid from 'uniqid';

export default class ShoppingList {
	constructor() {
		this.items = [];
	}

	addItem(amount, unit, ingredient) {
		const item = {
			id: uniqid(),
			amount,
			unit,
			ingredient
		}
		this.items.push(item);
		return item;
	}

	removeItem(id) {
		const index = this.items.findIndex(item => item.id == id);
		this.items.splice(index, 1);
	}

	updateItem(id, newAmount) {
		this.items.find(i => i.id == id).amount = newAmount;
	}
}