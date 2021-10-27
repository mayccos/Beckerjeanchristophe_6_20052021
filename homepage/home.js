import { parseDataFromJson, PhotographersData, filterTags} from '/app.js';
import Photographer from '/photographer.js';
const DOM = {
    photographersContainer : document.querySelector('.photographers'),
    navigationFilter : document.querySelector('header-navigation__filter')
};
/**
 * 
 */

let photographes = '';
const photographers = PhotographersData(parseDataFromJson());
console.log(photographers);
displayPhotographers(photographers);

function displayPhotographers(photographers) {
    photographers.then(resultat =>{
        photographes = resultat;
        
        //console.log(photographes);
        photographes.forEach(photographe => {
        //console.log(photographe.tags);
            let photographer = new Photographer(
                photographe.name ,
                photographe.city ,
                photographe.country ,
                photographe.tags ,
                photographe.tagline, 
                photographe.price ,
                photographe.portrait,
                photographe.id 
            );
            const div = document.createElement('div');
            let photographerCard = photographer.photographerCard();
            div.innerHTML = photographerCard;
            DOM.photographersContainer.appendChild(div);
        });
    })
        .catch(error => {
            console.log(error);
        });
}

function displayPhotographersByTags(tag) {
    DOM.photographersContainer.innerHTML = '';
    
    console.log(tag.innerText);
    let filtre = tag.innerText.slice(1, tag.innerText.length);
    console.log(filtre);
    photographers.then(resultat => {
        let photographersFiltered = filterTags(resultat, filtre);
        console.log(photographersFiltered);
        displayPhotographers(photographersFiltered);
    
    }).catch(error => {
        console.log(error);
    });

}
window.displayPhotographersByTags = displayPhotographersByTags;

// display "passer le contenu" link on scroll
const scroller = document.querySelector('.scroller');
window.addEventListener('scroll', () => {
    //display scroller based on screen's width > 1023px
    if (document.documentElement.clientWidth > 1023) {
        scroller.style.display = 'block';
        scroller.style.textalign = 'center';
        scroller.style.position = 'sticky';
    }
});