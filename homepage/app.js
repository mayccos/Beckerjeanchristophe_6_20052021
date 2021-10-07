import Media from '../pagePhotographers/media.js'
import Photographer from './photographer.js'
/*function editNav() {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
}




/**
 * function to recover data from a URL and parsed as Json Format
 * @returns parsed data as Json format
 */
let parseDataFromJson = async () => {
  const url = './FishEyeData.json'
  const response = await fetch(url)
  if (response.ok) {
      return response.json()
  }else{
      console.error(response.status)
  }
}

/**
 * function pending  parsed Data as Json Format from url
 * and  creation of new Photographer class for each photographer with a loop
 * @param {object} jsonData parsed data as json format
 * @returns   Photographer class created in an array
 */
let PhotographersData = async(jsonData) => {
  const data = await jsonData
  const photographers = data.photographers
  let photographersArray = []
  photographers.map(data => {
      photographersArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
  })
  return photographersArray
}

/**
 * function pending  parsed Data as Json Format from url
 * and  creation of new Photographer class for each photographer with a loop
 * @param {object} jsonData parsed data as json format
 * @param {number} id  Photographer'id from URL's parameter
 * @returns   Photographer class created in an array
 */
 let PhotographersDataById = async(jsonData, id) => {
  const data = await jsonData
  const photographers = data.photographers
  let photographerArray = []
  photographers.map(data => {
  //if Id in URL's parameter = photographer's Id => creation a photographer's instance
      if(id == data.id)  
          photographerArray.push(new Photographer(data.name, data.city, data.country, data.tags, data.tagline, data.price, data.portrait, data.id))
  })
  return photographerArray
}
let filterTags = async(data, filter) =>  {
  console.log(data);
  return data.filter(function (el) {
    return el.tags.indexOf(filter)!== -1;
    
  });
      
}



/**
 * function pending  parsed Data as Json Format from url
 * and  creation of new Photographer class for each photographer with a loop
 * @param {object} jsonData parsed data as json format
 * @param {number} id  Photographer'id from URL's parameter
 * @param {string} filter photographer's informations to post on pagePhotographe.html
 * @returns   Media class created in an array
 */
let MediaByPhotographerId = async(jsonData, id, filter) => {
    const data = await jsonData
    const media = data.media
    let mediaArray = []
    media.map(media => {
        //if Id in URL's parameter = media's id => creation a media's instance
        if (id == media.photographerId) {
            mediaArray.push(new Media( media.title, media ['image']? media.image : media.video, media.likes, media.date/*, media['image'] ? 'image' : 'video'*/))
        }
    })
    sortFilteredMedia(mediaArray, filter)
    return mediaArray
}
/**
 * Sorts in a array based on parameter
 * @param {object}  Array of media class
 * @param {string} filter media based on photographer's informations to post on pagePhotographe.html
 * @returns filter's objects sorted in a array
*/
let sortFilteredMedia = (media, filter) => {
    switch (filter) {
        case 'likes':
          return media.sort((a,b) => {
              return  b[filter] - a[filter]
          }) 
        case 'title':
          return media.sort((a,b) => {
            if(a[filter] < b[filter]) { return -1 }
            if(a[filter] > b[filter]) { return 1 }
            return 0
          }) 
        case 'date':
          return media.sort((a,b) => {
            return new Date(b[filter]) - new Date(a[filter])
          }) 
        default:
          break
    }
}
export {filterTags, parseDataFromJson, PhotographersData, PhotographersDataById, MediaByPhotographerId}   
