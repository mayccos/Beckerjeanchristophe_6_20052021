import { parseDataFromJson, PhotographersDataById, MediaByPhotographerId, filterTags} from "/homepage/app.js";
import Photographer from "/homepage/photographer.js"
import Media from "/pagePhotographers/media.js"
import {displayTotalLikes} from "/pagePhotographers/totalLikes.js"
import Modal from "/pagePhotographers/modal.js";


//DOM elements


const photographeInfo = document.querySelector(".photographeInfo");
const gallery = document.querySelector(".gallery");
const likesTotalRemuneration = document.querySelector(".likesTotals_remuneration")
const modalBg = document.querySelector(".contactPhotographe");
const closeBtn = document.querySelector(".close");
const modalBtn = document.querySelector(".modal-btn");
const nameInTitleForm = document.querySelector(".nameInTitle");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxOpen = document.querySelectorAll(".lightbox__container__photo");
const lightbox = document.querySelector(".lightbox");




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
           * @returns HTML element on profil page
           */
          const p = document.createElement('p');
          p.classList.add("remuneration");
          let remuneration= photographer.photographerPrice();
          p.innerHTML = remuneration;
          likesTotalRemuneration.appendChild(p)
          
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

let media="";
const medias = MediaByPhotographerId(parseDataFromJson(), paramId)
 // console.log(medias);
displayMedias(medias); 

  function displayMedias(medias) {
    
    medias.then(result => {
        media = result;
        media.forEach(media => {
           let sMedia = new Media (
              media.title,
              media.typeMedia,
              media.likes,
              media.date,
              media.altTxt,
              media.photographerId
           );console.log(sMedia);

           const div = document.createElement('div');
           div.classList.add("media");
           let mediaGallery = sMedia.mediaCreation();
           div.innerHTML = mediaGallery;
           gallery.appendChild(div);
           
        })
        
    })
  }


/**
 * display total number of photographer's likes next to remuneration
 * @return HTML element on profil page
 */
displayTotalLikes(MediaByPhotographerId(parseDataFromJson(), paramId));

/*
// launch modal message event
document.querySelector(".modal-btn").forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal message form
function launchModal() {
 modalBg.style.display = "block";
 
}

// close modal message event
closeBtn.addEventListener("click", closeModal);
// close modal message form
function closeModal() {
  modalBg.style.display = "none";
  
}*/
setTimeout(() => {
	Modal.modalMessageEvents()
	/*Lightbox.init()
	increaseOrDecreaseLikesAndTotalLikes()
	displaySelectOptions()*/
}, 1000)













