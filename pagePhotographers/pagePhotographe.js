import { parseDataFromJson, PhotographersDataById, MediaByPhotographerId, filterTags} from "/homepage/app.js";
import Photographer from "/homepage/photographer.js"
import Media from "/pagePhotographers/media.js"
import Modal from "/pagePhotographers/modal.js";


//DOM elements

const main = document.querySelector(".main");
const photographeInfo = document.querySelector(".photographeInfo");
const gallery = document.querySelector(".gallery");
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
  console.log(medias);
displayMedias(medias); 

  function displayMedias(medias) {
    medias.then(result => {
        media = result;
       //console.log(media);
        media.forEach(media => {
           let sMedia = new Media (
              media.title,
              media.typeMedia,
              media.likes,
              media.date
           );
           const div = document.createElement('div');
           div.classList.add("gallery__content");
           let mediaGallery = sMedia.mediaCreation;
           div.innerHTML = mediaGallery;
           gallery.appendChild(div);
        })
    })
  }
 /*let displayMedia = (id, filter) => { gallery.innerHTML = ""
  media.then(media =>
    media.map(media => {
       gallery.innerHTML += media.mediaCreation()
    })
  ) 
}*/


/*let pMedia = "";
const medias = MediaByPhotographerId(parseDataFromJson(), paramId);
console.log(medias);
displayPMedias(medias);
function displayPMedias(medias) {
    medias.then(result => {
      pMedia = result;
      console.log(pMedia);
      pMedia.forEach(pMedia => {
          let media = new Media(
            //id, photographerId, title, image, video, tags, likes, date, price
            
            pMedia.title,
            pMedia.image,
            pMedia.video,
            
            pMedia.likes,
            pMedia.date,
            
            pMedia.typeMedia
          );console.log(media);
          const div = document.createElement('div');
          div.classList.add("gallery__content");
          let photographerInfo = media.mediaCreation();
          div.innerHTML = photographerInfo;
          gallery.appendChild(div);
      })
    })
}*/
/*function displayPhotographersByTags(tag) {
  DOM.photographersContainer.innerHTML = "";
  
  console.log(tag.innerText);
  let filtre = tag.innerText.slice(1, tag.innerText.length);
  console.log(filtre);
  photographers.then(resultat => {
  let photographersFiltered = filterTags(resultat, filtre);
  console.log(photographersFiltered);
  displayPhotographers(photographersFiltered);
  
}).catch(error => {
  console.log(error);
})

}
window.displayPhotographersByTags = displayPhotographersByTags;*/
/*
// launch modal message event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

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

/*
//filtration des données de photographes en fonction du photographe choisi
var photographe = JSON.parse(window.localStorage.getItem("photographe"));
console.log(photographe);
var media = JSON.parse(window.localStorage.getItem("media"));
console.log(media);

//chargement des données du photographe choisi sur la page
document.getElementsByTagName("h1")[0].innerHTML = photographe.name;
document.getElementsByClassName("portrait")[0].setAttribute("src", "images/photo_choisie_des_photographes/" + photographe.portrait);
document.getElementsByClassName("countryCity")[0].innerHTML = photographe.city + ',' + photographe.country;
document.getElementsByClassName("tagline")[0].innerHTML = photographe.tagline;
let tags = photographe.tags;
for(tag of tags) {
  let li = document.createElement("li");
  li.innerHTML = `<a href="" class=tags>#${tag}</a>`;
  document.getElementById("Tags").appendChild(li)
}



const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('photographerId');
console.log(photographerId);

//affichage dynamique du titre du modal de contact







//launch lightboxmodal event
lightboxOpen.forEach((a) => a.addEventListener("click", launchLightbox)) ;

//launch lightboxModal form
function launchLightbox() {
  
  lightbox.style.display = "block";
}

//close lightboxModal event
lightboxClose.addEventListener("click", closeLightbox);

//close lightboxModal form
function closeLightbox() {
  lightbox.style.display = "none";
}

//query parameter à chercher +photographerid du json
//affichage des données du photographe en fonction du choix(click image photographe homepage)




  

/**
 * 
 */
/*//récupperation photographe json

fetch('FishEyeData.json')
.then(function(response) {
  if(response.ok) {
    response.json().then(function(result){
      let resultat = result;
      medias=resultat.media;
      photographes=resultat.photographers;
      console.log(medias);
      console.log(photographes);
     
      //affichage des données récuppérées photographes
      
      for (let photographe of photographes){
        let creation = document.createElement("div");
        creation.classList.add("photographeInfo__details");
        let affichage = "";
        affichage += `
                        <h1>${photographe.name}</h1>
                        <p class="countryCity">${photographe.city},${photographe.country}</p>
                        <p class=tagline>${photographe.tagline}</p>
                        
                      </div>
                    `;

        creation.innerHTML = affichage;
        let tags = photographe.tags;
        let ul = document.createElement("ul");
        for(tag of tags) {
            console.log(tag);
            let li = document.createElement("li");
            li.innerHTML = `<a href="" class=tags>#${tag}</a>`;
            ul.appendChild(li);
        } 
        creation.appendChild(ul) ;        
        document.getElementById("photographeInfo").appendChild(creation);           
      }
      for(let media of medias){
        let creation2 = document.createElement("div");
        creation2.className= "photos";
        let affichage2="";
        affichage2 += `
                        <div class="photo" id="photo${media.id}">
                          <a href=""><img src="images/Sample_Photos/${media.photographerId}/${media.image}" alt=""></a>
                          <div class="images-likes">
                          <p class="nomImage">${media.title}</p>
                          <p class="likesNumber">${media.likes} <i class="fas fa-heart"aria-label=likes></i></p>
                        </div>
                      </div>
                      `
        creation2.innerHTML = affichage2; 
        document.getElementById("main").appendChild(creation2)
      }             
    });
  };

});*/
