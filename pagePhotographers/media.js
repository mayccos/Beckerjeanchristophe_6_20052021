/**
 * creation of media's class
 */

export default class Media{
        /**
         * @param {string} title  media's title
         * @param {number} likes  like's number of media
         * @param {string} nameMedia  media's name
         * @param {string} video name of media video
         * @param {date}  Media's date
         * @param {string} altTxt alternatif text of image and video
         */
        constructor (title, nameMedia, likes, date, altTxt, photographerId){
            this.title = title
            this.nameMedia = nameMedia
            this.likes = likes
            this.date = date
            this.altTxt = altTxt
           this.photographerId = photographerId
        }        
        /**
        * creation of media 
        * @returns instance of media
        */
        mediaCreation() {

            let poster = this.nameMedia.slice(0, -4) +'.jpg';
            return`
            
            <img src="images/Sample_Photos/${this.photographerId}/${poster}" onclick="openLightbox();toSlide(1)" alt="${this.altTxt}">
            <div class="media__content">    
               <h2 class="media__title">${this.title}</h2>
               <div class="media__likes">
                   <p class="media__number">${this.likes}</p> 
                   <i class="fas fa-heart" aria-label="likes"></i>
                </div>
            </div>
            `
       
          
        }
        /**
         * create totals likes card
         * @returns html element on profil page
         */
        totalLikes(){
            return `${this.totalLikes} <i class="fas fa-heart"aria-label="likes"></i>`
        }

}
