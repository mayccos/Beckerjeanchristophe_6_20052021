   
    
export default class Modal {
    static element = {
     closeBtn : document.querySelector(".close"),
     modalBtn : document.querySelector(".modal-btn"),
     contact : document.querySelector(".contactPhotographe")
    }    
    /** 
     * to init modal message event
     */
    static modalMessageEvents = () => {
        document.querySelector(".modal-btn").addEventListener('click', () => {this.launchModal()})
        document.querySelector(".close").addEventListener('click', () => {this.closeModal()})
        document.addEventListener('keyup', this.closeKeyup.bind(this))
    }
    /**
     * @param {keyboardEvent} e
     */
    static closeKeyup (e) {
        if (e.key === 'Escape') this.closeModal ()
    }
    /**
     * launch modal message form and first is focus
     */
    static launchModal = () => {
        contact.style.display = 'block';
    }
    /**
     * close modal message form
     */
    static closeModal = () => {
        contact.style.display = 'none'
        document.removeEventListener('keyup', this.closeKeyup)
        
    }
}