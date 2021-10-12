/**
 * creation of a class photographer
 */

export default class Photographer {
    /**
     * @param {string} name photographer's name
     * @param {string} city photographer's city
     * @param {string} country photographer's country
     * @param {string[]} tags photographer's tags in an array 
     * @param {string} tagline photographer's tagline
     * @param {number} price price of photographer's work
     * @param {string} portrait photographer's portrait
     * @param {string} id photographer's id
     */
    constructor(name, city, country, tags, tagline, price, portrait, id) {
        this.name = name
        this.city = city
        this.country = country
        this.tags = tags
        this.tagline = tagline
        this.price = price
        this.portrait = portrait
        this.id = id
    }
    Dom = {
        photographers : document.querySelector('.photographers'),
        photographer : document.querySelector('.photographer'),
        nameInContactForm : document.querySelector('.h1Contact')
    }
    
    /**
     * construction of Dom element => photographer's price on page photographer
     * @returns string => the Dom element => the price
     */
    photographerPrice = () => {
        return`
            ${this.price}€ / jour
        `
    }
    
    /**
     * construction of photographer's tags on home page(index.html)
     * @returns string => Dom element for each tags
     */
    photographersCardsTags = () => {
        let liTags =""
        for (let i = 0; i < this.tags.length; i++) {
            liTags += `<li class="Tags"><a href="./index.html?tag=${this.tags[i]}" onclick="displayPhotographersByTags(this)" class="tags">#${this.tags[i]}</a></li>`
            
        }
        return liTags
    }
    /**
     * construction photographer's card on home page(index.html)
     * @returns string => Dom element for photographer's card on home page(index.html)
     */
    photographerCard() {
        return `
        <div class="photographer">
            <a href="pagePhotographe.html?id=${this.id}">
                <img src="images/Sample_Photos/Photographers_ID_Photos/${this.portrait}" alt="">
                <h2>${this.name}</h2>
            </a>
            <p class="countryCity">${this.city} , ${this.country}</p>
            <p class="tagline">${this.tagline}</p>
            <p class="price">${this.price}/jour</p>
            <ul class="photographer__tags">`+ this.photographersCardsTags() +`</ul>                
        </div>
        `
    } 
    /**
     * construction of photographer's tags on  page photographer
     * @returns string => Dom element for each tags
     */
    photographerInfoTags = () => {
        let liTags =""
        for (let i = 0; i < this.tags.length; i++) {
            liTags += `<li class="Tags"><a href="./index.html?tag=${this.tags[i]}" onclick="displayPhotographersByTags(this)" class="tags">#${this.tags[i]}</a></li>`
            
        }
        return liTags
    }
    /**
     * construction of a card of photographer's info on pagePhotographe
     *@returns string => Dom element for photographer's card on  pagePhotographe
     */
    photographerInfo(){
        return `
        
            <div class="photographeInfo__details">
                <h1>${this.name}</h1>
                <p class="countryCity">${this.city},${this.country}</p>
                <p class="tagline">${this.tagline}</p>
                <ul class="photographerInfoTags">`+ this.photographerInfoTags() +`</ul>
            </div>
            <button class="modal-btn">Contactez-moi</button>
            <img  class="portrait" src="images/Sample_Photos/Photographers_ID_Photos/${this.portrait}" alt="${this.name}">
         `
    }

    /**
     * display photographer's name on contact form
     * @return string => Dom element with photographer's name 
     */
    photographerNameTitleForm(){
        return `
                Contactez-moi </br> ${this.name}
        `
    }
    
};