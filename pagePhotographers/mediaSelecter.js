let displaySelectOptions = () => {
	let select = document.querySelector('.filter__selection')
	let inputSelect = document.querySelector('.filter__selecter')
	select.addEventListener('click', () => {
		const option = document.querySelector('.filter__selection__menu')
		const arrow = document.querySelector('.filter__selection__arrow', 'before')
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
}

/**
 * Hide the duplicated option that is selected in the select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */
let hideSelectedOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		if (option.getAttribute('data-value') == filter) {
			option.classList.add('filter__selected')
			option.setAttribute('aria-selected', true)
		}
	})
}

/**
 * Remove the class from a duplicate option hidden in a select
 * @param {string} filter 
 * @param {NodeListOf<Element>} dom reach options of select
 */
let removeClassToHideDuplicateOptionInSelect = (filter, dom) => {
	dom.forEach(option => {
		if (option.getAttribute('data-value') != filter) {
			option.classList.remove('filter__selected')
			option.setAttribute('aria-selected', false)
		}
	})
}

export {displaySelectOptions, hideSelectedOptionInSelect, removeClassToHideDuplicateOptionInSelect}