   
    
export default class Modal {
    
    /** 
     * to init modal message event
     */
    static modalMessageEvents () {
        document.querySelector('.modal-btn').addEventListener('click', () => {this.launchModal();});
        document.querySelector('.close').addEventListener('click', () => {this.closeModal();});
        document.addEventListener('keyup', this.closeKeyup.bind(this));
    }
    /**
     * @param {keyboardEvent} e
     */
    static closeKeyup (e) {
        if (e.key === 'Escape') this.closeModal ();
    }
    /**
     * launch modal message form and first is focus
     */
    static launchModal () {
        document.querySelector('.contactPhotographe').style.display = 'block';
        document.querySelector('.pagePhotographe').style.overflow = 'hidden';
    }
    /**
     * close modal message form
     */
    static closeModal () {
        document.querySelector('.contactPhotographe').style.display = 'none';
        document.removeEventListener('keyup', this.closeKeyup);
        document.querySelector('.pagePhotographe').style.overflow = '';
    }
}