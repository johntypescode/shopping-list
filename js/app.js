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

			// Add a checkbox to mark item off of the list
			const itemCheckbox = $.createElement('input');
			itemCheckbox.setAttribute('type', 'checkbox');
			itemCheckbox.setAttribute('class', 'delete-item');
			itemCheckbox.onclick = () => {
				newListItem.classList.toggle('done');
			};
			newListItem.textContent = newItemValue;

			// Add a delete button to each new list item
			const deleteBttn = $.createElement('button');
			deleteBttn.innerText = 'Delete -'
			deleteBttn.onclick = (e) => {
				e.preventDefault();
				shoppingList.removeChild(newListItem);

				// List item count should also be updated upon deletion
				let totalListItems = $.querySelectorAll('li').length;
				$.querySelector('h3#list-count-summary').textContent = `${totalListItems} items on your list.`;	
			};
			newListItem.appendChild(itemCheckbox);
			newListItem.appendChild(deleteBttn);
			shoppingList.appendChild(newListItem);

			// Update the number of items on the list
			let totalItems = $.querySelectorAll('li').length;
			const listSummary = $.querySelector('h3#list-count-summary');
			listSummary.textContent = `${totalItems} items on your list.`;

			// Clear the value and refocus input
			newItemInput.value = '';
			newItemInput.focus();
		} else {
			alert('Error: item should contain at least four (4) characters; try again.');
			return;
		}
	});

};