





/**
 * function to display the option of selector
 */
const displaySelectOptions = () => {
    const select = document.querySelector('.filter__selection');
    select.addEventListener('click', () => {
        const option = document.querySelector('.filter__selection-menu');
        const arrow = document.querySelector('.filter__selection-arrow', 'before');
        // if the class is not present in the HTML Element then we add it
        if (!option.classList.contains('filter__show')) {
            option.classList.add('filter__show');
            arrow.style.transform = 'rotate(180deg)';
        }
        // else we remove it 
        else {
            arrow.style.transform = 'rotate(0deg)';
            option.classList.remove('filter__show');
        }
    });
    select.addEventListener('keypress', () => {
        const option = document.querySelector('.filter__selection-menu');
        const arrow = document.querySelector('.filter__selection-arrow', 'before');
        // if the class is not present in the HTML Element then we add it
        if (!option.classList.contains('filter__show')) {
            option.classList.add('filter__show');
            arrow.style.transform = 'rotate(180deg)';
        }
        // else we remove it 
        else {
            arrow.style.transform = 'rotate(0deg)';
            option.classList.remove('filter__show');
        }
    });
};
let choiceSelectOption = () => {
    let selectOption = document.querySelectorAll('.filter__selection-option');
    selectOption.forEach(option => {
        option.addEventListener('click', () => {
            if(option.id == 'popularity') {
                document.querySelector('.filter__selector').value = 'Popularité';
			
            }else if(option.id == 'date') {
                document.querySelector('.filter__selector').value = 'Date';
            }else {
                document.querySelector('.filter__selector').value = 'Titre';
            }
        });
        option.addEventListener('keypress', () => {
            if(option.id == 'popularity') {
                document.querySelector('.filter__selector').value = 'Popularité';
            }else if(option.id == 'date') {
                document.querySelector('.filter__selector').value = 'Date';
            }else {
                document.querySelector('.filter__selector').value = 'Titre';
            }
        });
    });
};

export { displaySelectOptions , choiceSelectOption};

