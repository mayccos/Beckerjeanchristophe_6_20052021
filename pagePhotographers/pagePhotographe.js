import { parseDataFromJson, PhotographersDataById, MediaByPhotographerId} from "/homepage/app.js";
import Photographer from "/homepage/photographer.js"
import Media from "/pagePhotographers/media.js"
import {displayTotalLikes} from "/pagePhotographers/totalLikes.js"
import Modal from "/pagePhotographers/modal.js";
import {likesTotalLikesVariation} from "/pagePhotographers/likesvariation.js"
import {displaySelectOptions} from "/pagePhotographers/mediaSelector.js";
import {toSlide, changeSlide, closeLightbox, openLightbox} from "/pagePhotographe/lightbox.js"
 


//DOM elements


const photographeInfo = document.querySelector(".photographeInfo");
const gallery = document.querySelector(".gallery");
const likesTotalRemuneration = document.querySelector(".likesTotals_remuneration");
const lightboxContainer = document.querySelector('.lightbox-container');
const nameInTitleForm = document.querySelector(".nameInTitle");




const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramId = urlParams.get('id');
let photographe = "";
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
          div.classList.add("photographeInfo__content");
          let photographerInfo = photographer.photographerInfo();
          div.innerHTML = photographerInfo;
          photographeInfo.appendChild(div);
          /**
           * display remuneration next to likes totals on profil page
           * @returns HTML element on photographer's page
           */
          const p = document.createElement('p');
          p.classList.add("remuneration");
          let remuneration= photographer.photographerPrice();
          p.innerHTML = remuneration;
          likesTotalRemuneration.appendChild(p)
          
          /**
           * display title in contact photographe based on photographer's id
           * @returns HTML element on photographer's page
           */
          const h1 = document.createElement('h1')
          h1.classList.add("h1Contact")
          let nameContact = photographer.photographerNameTitleForm();
          h1.innerHTML=nameContact;
          nameInTitleForm.appendChild(h1);
      });
  })
  .catch(error => {
      console.log(error);
  })
}
/**
 * @param {string} title  media's title
 * @param {number} likes  like's number of media
 * @param {string} nameMedia  media's name
 * @param {string} video name of media video
 * @param {date}  Media's date
 * @param {string} altTxt alternatif text of image and video
 * @returns an array with medias based on photographer's id
 */

let media="";
const medias = MediaByPhotographerId(parseDataFromJson(), paramId)
 // console.log(medias);
displayMedias(medias); 

function displayMedias(medias) {
    
    medias.then(result => {
        media = result;
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
           
           const div = document.createElement('div');
           div.classList.add("media");
           let mediaGallery = sMedia.mediaCreation(index + 2);//position media in lightbox
           div.innerHTML = mediaGallery;
           gallery.appendChild(div);
           
           
           const div2 = document.createElement('div');
           div2.classList.add('lightbox-container__media');
           let mediaLightbox = sMedia.lightboxCreation();
           
           div2.innerHTML = mediaLightbox;
           lightboxContainer.appendChild(div2);
           
        })
        
    })
    
}

/**
 * display total number of photographer's likes next to remuneration
 * @return HTML element on profil page
 */
displayTotalLikes(MediaByPhotographerId(parseDataFromJson(), paramId));
// function called at form submit event


setTimeout(() => {
	Modal.modalMessageEvents()
    likesTotalLikesVariation()
    displaySelectOptions()
    toSlide()
    changeSlide()
    closeLightbox()
    openLightbox()
}, 1000)













