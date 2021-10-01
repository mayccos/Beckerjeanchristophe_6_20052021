function editNav() {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
}
//DOM elements
const homePage = document.querySelector("homepage");
const photographers = document.getElementById("photographers");
const scroller = document.getElementById("scroller");


//scroller.style.display = "none"


//récupperation photographes json
let medias="";
let photographes = "";
fetch('FishEyeData.json')
.then(function(response) {
  if(response.ok) {
    response.json().then(function(result){
      let resultat = result;
      photographes=resultat.photographers;
      medias=resultat.media;
      console.log(photographes);
      console.log(medias);
      //affichage des données récuppérées
      
      for (let photographe of photographes){
        let creation = document.createElement("div");
        creation.className="photographer";
        let affichage = "";
        affichage +=   //lier image de chaque photographe à la page correspondante
                     ` <a href="#" onclick="photographeCharge(${photographe.id})">
                          <img src="images/photo_choisie_des_photographes/${photographe.portrait}" alt="">
                          <h2>${photographe.name}</h2>
                      </a>
                      <p class="countryCity">${photographe.city} , ${photographe.country}</p>
                      <p class="tagline">${photographe.tagline}</p>
                      <p class="price">${photographe.price}/jour</p>
                      
                      </div>
                     `;
        creation.innerHTML = affichage;
        let tags = photographe.tags;
        let ul = document.createElement("ul");
        for(tag of tags) {
          
          let li = document.createElement("li");
          li.classList.add("Tags")
          li.innerHTML = `<a href="" class="tags">#${tag}</a>`;
          ul.appendChild(li);
        }
        creation.appendChild(ul) ;        
        document.getElementById("photographers").appendChild(creation);
      }
      
      
      document.getElementById("photographers").style.display = "grid";
      document.getElementById("photographers").style.gridTemplateColumns = "30% 30% 30%";
      document.getElementById("photographers").style.gridColumnGap = "100px";
      document.getElementById("photographers").style.gridRowGap = "50px";
      
      


    });
  } else {
    console.log('Mauvaise réponse du réseau');
  }
})

.catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});//chargement et enregistrement des données de chaques photographes dans le stockage local du server
function photographeCharge(id) {
  var photographe = new Array();
  photographes.forEach(element => {
    if (element.id == id) {
      photographe = element;

    }
  });
  window.localStorage.setItem("photographe", JSON.stringify(photographe));
  //var newArray = photographes.filter(Object.values(photographes));
  console.log(photographe);  
  window.location = "pagePhotographe.html";
}

/*function mediaCharge(id) {
  console.log(id);

  var media = new Array();
  medias.forEach(element => {
    if (element.id == id) {
      media = element;
     
    }
  });
  window.localStorage.setItem("media", JSON.stringify(media));
  console.log(media);
  window.location = "pagePhotographe.html";
}*/
 
