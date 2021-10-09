/**
 * creation of media's class
 */

export default class Media{
        /**
         * @param {string} title  media's title
         * @param {number} likes  like's number of media
         * @param {string} image name of  media image
         * @param {string} video name of media video
         * @param {date}  Media's date
         * @param {string} altTxt alternatif text of image and video
         */
        constructor (title, typeMedia, likes, date, altTxt, photographerId){
            this.title= title
            this.typeMedia = typeMedia
            this.likes = likes
            this.date = date
            this.altTxt = altTxt
           this.photographerId = photographerId
        }        
        /**
        * creation of media based on its type (image or video)
        * @returns instance of image or video
        */
        mediaCreation() {
           switch (this.typeMedia) {
               case 'image':
                   return new Image(this.title, this.likes, this.altTxt,this.photographerId).imageCreation
               
               case 'video':
                   return new Video(this.title, this.likes, this.altTxt, this.photographerId).videoCreation
                   
           
               default:
                   break;
           }
        }
        /**
         * create totals likes card
         * @returns html element on profil page
         */
        totalLikes(){
            return `${this.totalLikes} <i class="fas fa-heart"aria-label="likes"></i>`
        }

}
/**
* create  a subclass Image of the class Media
*/
class Image extends Media {
       /**
        * @param {string} title  media's title
        * @param {number} likes  like's number of media
        * @param {string} image name of  media image
        * @param {string} altTxt alternatif textor the image
        * 
        */
       constructor(title, likes, image, altTxt, photographerId) {
           super(title, likes, image, altTxt, photographerId)
       }

       /**
        * construction of an image's DOM element
        * @returns {string} with image's DOM element
        */
       imageCreation() {
           return`
            
               <a href="images/Sample_Photos/${this.photographerId}/lightboxImages/${this.image}"><img src="images/Sample_Photos/${this.photographerId}/${this.Image}" alt="${this.altTxt}"></a>
               <div class="images-likes">
                   <p class="nomImage">${this.title}</p>
                   <p class="likesNumber">${this.likes} <i class="fas fa-heart"aria-label="likes"></i></p>
               </div>
             `
       }
}
/**
* create  a subclass Video of the class Media
*/
class Video extends Media {
   /**
        * @param {string} title  media's title
        * @param {number} likes  like's number of media
        * @param {string} video name of  media video
        * @param {string} altTxt alternatif text of video
        */
    constructor(title, likes, video, altTxt, photographerId) {
       super(title, likes, video, altTxt, photographerId)
   }

   /**
    * construction of an video's DOM element
    * @returns {string} with video's DOM element
    */
   videoCreation() {
       let poster = this.video.slice(-3, this.video.length) +'jpg';
       return`
            
               <a href="images/Sample_Photos/${this.photographerId}/lightboxImages/${this.video}"><video src="images/Sample_Photos/${this.photographerId}/${this.video}" autobuffer controls poster="images/Sample_Photos/${this.photographerId}/${poster}" alt="${this.altTxt} ></a>
               <div class="images-likes">
                   <p class="nomImage">${this.title}</p>
                   <p class="likesNumber">${this.likes} <i class="fas fa-heart"aria-label="likes"></i></p>
                </div>
            
       `
   }


}
