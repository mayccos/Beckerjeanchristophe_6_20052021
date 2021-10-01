//DOM elements
const pagePhotographe = document.querySelector(".pagePhotographe");
const modalBg = document.querySelector(".contactPhotographe");
const closeBtn = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxOpen = document.querySelectorAll(".lightbox__container__photo");
const lightbox =document.querySelector(".lightbox");
const photographeInfo = document.querySelector(".photgrapheInfo");

// launch modal message event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal message form
function launchModal() {
  modalBg.style.display = "block";
  /*// if mobile screen, heroSection doesn't appear
  if(mediaQueryMobile.matches){
    heroSection.style.display = "none";
  }*/
}

// close modal message event
closeBtn.addEventListener("click", closeModal);
// close modal message form
function closeModal() {
  modalBg.style.display = "none";
  /*if(mediaQueryMobile.matches){
    heroSection.style.display = "block";
  }*/
}


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

document.getElementsByClassName("h1Contact")[0].innerHTML = 'Contactez-moi'  + "<br>" +  photographe.name;





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
