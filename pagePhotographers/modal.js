
export default class Modal {
    DOM = {
        closeBtn : document.querySelector(".close"),
        modalBtn : document.querySelectorAll(".modal-btn"),
        contact : document.querySelector(".contactPhotographe"),
        
    }
    /**
     * to init modal message event
     */
    modalMessageEvents = () => {
        modalBtn.addEventListener('click', () => {this.launchModal()})
        closeBtn.addEventListener('click', () => {this.closModal()})
        document.addEventListener('keyup', this.closeKeyup.bind(this))
    }
    /**
     * @param {keyboardEvent} e
     */
    closeKeyup (e) {
        if (e.key === 'Escape') this.closModal ()
    }
    /**
     * launch modal message form and first is focus
     */
    launchModal = () => {
        contact.style.display = 'block'
    }
    /**
     * close modal message form
     */
    closeModal = () => {
        contact.style.display = 'none'
        document.removeEventListener('keyup', this.closeKeyup)
        
    }
}