const shorten = (name) => {
	let shorted = name.split(" ");
	shorted = `${shorted[0]} ${shorted[1]}`;

	return shorted;
};

const isAdded = (state, id) => {
	const result = !!state.selectedItem.find((item) => item.id === id);
	return result;
};

const quantityCount = (state, id) => {
	const index = state.selectedItem.findIndex((item) => item.id === id);
	if (index === -1) {
		return false;
	} else {
		return state.selectedItem[index].quantity;
	}
};

export { shorten, isAdded, quantityCount };
