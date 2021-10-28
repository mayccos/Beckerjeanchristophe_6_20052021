import { parseDataFromJson, PhotographersDataById, MediaByPhotographerId, filterTags} from '/homepage/app.js';
import Photographer from '/homepage/photographer.js';
import Media from './media.js';
import {displayTotalLikes} from './totalLikes.js';
import Modal from './modal.js';
import {likesTotalLikesVariation} from './likesvariation.js';
import {displaySelectOptions , choiceSelectOption} from './mediaSelector.js';
import  {changeSlide , closeLightbox }  from './lightbox.js';
import { validationContact } from './contactValidation.js';
 



//DOM elements


const photographeInfo = document.querySelector('.photographeInfo');
const gallery = document.querySelector('.gallery');
const likesTotalRemuneration = document.querySelector('.likesTotals_remuneration');
const lightboxContainer = document.querySelector('.lightbox-container');
const nameInTitleForm = document.querySelector('.nameInTitle');




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramId = urlParams.get('id');
let photographe = '';
const photographers = PhotographersDataById(parseDataFromJson(), paramId);
//console.log(photographers);
displayPhotographers(photographers);
function displayPhotographers(photographers) {
    photographers.then(resultat =>{
        photographe = resultat;
        //console.log(photographe);
        photographe.forEach(photographe => {
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
            div.classList.add('photographeInfo__content');
            let photographerInfo = photographer.photographerInfo();
            div.innerHTML = photographerInfo;
            photographeInfo.appendChild(div);
            /**
             * display remuneration next to likes totals on profil page
             * @returns HTML element on photographer's page
            */
            const p = document.createElement('p');
            p.classList.add('remuneration');
            let remuneration= photographer.photographerPrice();
            p.innerHTML = remuneration;
            likesTotalRemuneration.appendChild(p);
          
            /**
             * display title in contact photographe based on photographer's id
             * @returns HTML element on photographer's page
            */
            const h1 = document.createElement('h1');
            h1.classList.add('h1Contact');
            let nameContact = photographer.photographerNameTitleForm();
            h1.innerHTML=nameContact;
            nameInTitleForm.appendChild(h1);
        });
    })
        .catch(error => {
            console.log(error);
        });
}
function displayPhotographersByTags(tag) {
   
    
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

/**
 * @param {string} title  media's title
 * @param {number} likes  like's number of media
 * @param {string} nameMedia  media's name
 * @param {string} video name of media video
 * @param {date}  Media's date
 * @param {string} altTxt alternatif text of image and video
 * @returns an array with medias based on photographer's id
 */

let media='';
const medias = MediaByPhotographerId(parseDataFromJson(), paramId);
// console.log(medias);
displayMedias(medias, ''); 

function displayMedias(medias, filtre) {
    
    medias.then(result => {
        media = result;
        if (filtre != '') {
            //gallery.innerHTML = '';
            document.querySelectorAll('.media').forEach(el => el.remove());
            document.querySelectorAll('.lightbox-container__media').forEach(el=>{if(el.id!='media1') {el.remove();}});
            media = sortMediaByFilter(media, filtre);
        }
        
        media.forEach((media,index) => {
            let sMedia = new Media (
                media.title,
                media.nameMedia,
                media.likes,
                media.date,
                media.altTxt,
                media.photographerId
            );
            /**
             * display medias on photographer's page
             * and  medias in lightbox
             * @returns HTML elements on same page
             */
            //console.log('gallery');
            const div = document.createElement('div');
            div.classList.add('media');
            let mediaGallery = sMedia.mediaCreation(index + 2);//position media in lightbox
            div.innerHTML = mediaGallery;
            gallery.appendChild(div);
           
            //console.log('lightbox');
            const div2 = document.createElement('div');
            div2.classList.add('lightbox-container__media');
            let mediaLightbox = sMedia.lightboxCreation();
            div2.innerHTML = mediaLightbox;
            lightboxContainer.appendChild(div2);

            /*const div3 = document.getElementById('media1');
            let photographerInBox = sMedia.photographerInLightbox();
            div3.innerHTML = photographerInBox;
            //document.getElementById('media1').appendChild(div3);*/
        });
    });
}
let sortMediaByFilter = (media, filter) => {
    switch (filter) {
    case 'likes':
        return media.sort((a,b) => {
            return  b[filter] - a[filter];
        });
    case 'title':
        return media.sort((a,b) => {
            if(a[filter] < b[filter]) { return -1;}
            else  { return 1 ;}
        });
    case 'date':
        return media.sort((a,b) => {
            return new Date(b[filter]) - new Date(a[filter]);
        });
    default:
        break;
    }
};
/**
 * display medias based on option selector
 */
function triMedias(element) {
    console.log(element.innerText);
    if (element.innerText == 'Popularité') {
        displayMedias(medias, 'likes');
    }else if(element.innerText == 'Date') {
        displayMedias(medias, 'date');
    }else if(element.innerText == 'Titre') {
        displayMedias(medias, 'title');
    }
} 
window.triMedias = triMedias;

/**
 * switch option in selector
 */
function swapOption(elem){
    elem.parentNode.insertBefore(elem,elem.parentNode.firstChild);
}console.log('lightbox');
window.swapOption = swapOption;
//document.querySelectorAll('.filter__selection-option').addEventListener(['click' , 'keypress'] , swapOption());

/**
 * display total number of photographer's likes next to remuneration
 * @return HTML element on profil page
 */
displayTotalLikes(MediaByPhotographerId(parseDataFromJson(), paramId));
// function called at form submit event

function sendMessage() {
    document.querySelector('.btn-submit').addEventListener(['click', 'keypress'], () => {
        validationContact();
    });
}

function lightboxInit() {
   
    document.querySelector('.lightbox-container__close').addEventListener('click' , () => {
        closeLightbox();
    });
    document.querySelector('.lightbox-container__preview').addEventListener('click' , () => {
        changeSlide(-1);
    });
    
    document.querySelector('.lightbox-container__next').addEventListener('click' , () => {
        changeSlide(1);
    });
    
}
window.addEventListener('keydown', function (e){
    if(e.keyCode == 37) {
        e.preventDefault();
        changeSlide(-1);
    }
    else if(e.keyCode == 39) {
        e.preventDefault();
        changeSlide(1);
    }
    else if(e.keyCode == 27) {
        closeLightbox();
    }
    console.log(e);
});


//window.lightboxInit = lightboxInit;

setTimeout(() => {
    Modal.modalMessageEvents();
    likesTotalLikesVariation();
    displaySelectOptions();
    choiceSelectOption();
    sendMessage();
    lightboxInit();
}, 1000);













