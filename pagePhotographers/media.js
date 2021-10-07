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
         */
        constructor (title, typeMedia, likes, date){
            
            this.title= title
            this.typeMedia = typeMedia
            
            this.likes = likes
            this.date = date
            
        }        
        /**
        * creation of media based on its type (image or video)
        * @returns instance of image or video
        */
        mediaCreation() {
           switch (this.typeMedia) {
               case 'image':
                   return new Image(this.title, this.likes).createImage
               
               case 'video':
                   return new Video(this.title, this.likes).createVideo
                   
           
               default:
                   break;
           }
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
        * @param {string} photographerId of media
        * 
        */
       constructor(title, likes, image) {
           super(title, likes, image)
       }

       /**
        * construction of an image's DOM element
        * @returns {string} with image's DOM element
        */
       createImage() {
           return`
           <div class="photo">
               <a href="images/Sample_Photos/${this.photographerId}/lightboxImages/${this.image}"><img src="images/Sample_Photos/${this.photographerId}/${this.Image}" alt=""></a>
               <div class="images-likes">
                   <p class="nomImage">${this.title}</p>
                   <p class="likesNumber">${this.likes} <i class="fas fa-heart"aria-label="likes"></i></p>
               </div>
           </div>`
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
        * @apram {string} photographerId of media
        */
    constructor(title, likes, video) {
       super(title, likes, video)
   }

   /**
    * construction of an video's DOM element
    * @returns {string} with video's DOM element
    */
   createVideo() {
       let poster = this.video.slice(-3, this.video.length) +'jpg';
       return`
       <div class="photo">
           <a href="images/Sample_Photos/${this.photographerId}/lightboxImages/${this.video}"><video src="images/Sample_Photos/${this.photographerId}/${this.video}" autobuffer controls poster="images/Sample_Photos/${this.photographerId}/${poster}" ></a>
           <div class="images-likes">
               <p class="nomImage">${this.title}</p>
               <p class="likesNumber">${this.likes} <i class="fas fa-heart"aria-label="likes"></i></p>
           </div>
       </div>`
   }


}
