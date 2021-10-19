





/**
 * function to display the option of selector
 */
let displaySelectOptions = () => {
	let select = document.querySelector('.filter__selection')
	let inputSelect = document.querySelector('.filter__selector')
	select.addEventListener('click', () => {
		const option = document.querySelector('.filter__selection-menu')
		const arrow = document.querySelector('.filter__selection-arrow', 'before')
		// if the class is not present in the HTML Element then we add it
		if (!option.classList.contains('filter__show')) {
			option.classList.add('filter__show')
			arrow.style.transform = 'rotate(180deg)'
			inputSelect.setAttribute('aria-expanded', true)
		}
		// else we remove it 
		else {
			arrow.style.transform = 'rotate(0deg)'
			option.classList.remove('filter__show')
			inputSelect.setAttribute('aria-expanded', false)
		}
	})
	
};

export { displaySelectOptions}

