window.onload = () => {


	const $ = document;
	const newItemInput = $.querySelector('input#new-list-item');
	const addItemBttn = $.querySelector('button#append-list-item');
	const shoppingList = $.querySelector('ul#shopping-list');

	addItemBttn.addEventListener('click', (e) => {
		e.preventDefault(); // Prevent default behavior of button click event

		const newItemValue = newItemInput.value;

		if(newItemValue.length >= 4) {
			const newListItem = $.createElement('li');
			newListItem.textContent = newItemValue;

			// Add a delete button to each new list item
			const deleteBttn = $.createElement('button');
			deleteBttn.innerText = 'Delete -'
			deleteBttn.onclick = (e) => {
				e.preventDefault();
				shoppingList.removeChild(newListItem);
			};
			newListItem.appendChild(deleteBttn);
			shoppingList.appendChild(newListItem);
		} else {
			alert('Error: item should contain at least four (4) characters; try again.');
			return;
		}
	});

};