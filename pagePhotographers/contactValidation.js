/**
 * to create a class validation of contact
 */
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const message = document.getElementById('message');
const firstError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const form = document.querySelector('.contactPhotographe');
/**
  * @param {regex} Regex to validate inputs
  */   
const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~'#()`@]$/;
const mailInput = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;


let formValid = false;

/**validation of form entries and error message and its style */  

function validInputs(){
  
    /**
      *  if first.value is empty and is different regex(textInput),
      * or first.length is less than 2 characters => error message
      */
    if(textInput.exec(firstName.value) === null || firstName.length < 2) {
        firstError.textContent = 'Veuillez renseigner 2 caractères minimum pour le prénom';
        firstError.style.color = 'red';
        firstError.style.marginLeft = '30px';
        firstError.style.fontSize = '15px';
        firstName.style.borderColor = 'red';
        firstName.style.borderWidth = '2px';
        return formValid === false;
    }else {
        firstError.style.display = 'none';
        firstName.style = 'default';
    }

    /** 
      *  if last.value is empty and is different regex(textInput),
      *  or last.length is less than 2 characters => error message
      */
    if(textInput.exec(lastName.value) === null || lastName.length < 2) {
        lastError.textContent = 'Veuillez renseigner 2 caractères minimum pour le nom';
        lastError.style.color = 'red';
        lastError.style.marginLeft = '30px';
        lastError.style.fontSize = '15px';
        lastName.style.borderColor = 'red';
        lastName.style.borderWidth = '2px';
        return formValid === false;
    }else {
        lastError.style.display = 'none';
        lastName.style = 'default';
    }

    /**
      * if email doesn't correspond to regex => message error
      */
  
    if(mailInput.exec(email.value) === null) {
        emailError.textContent = 'Veuillez renseigner une adresse mail valide';
        emailError.style.color = 'red';
        emailError.style.marginLeft = '30px';
        emailError.style.fontSize = '15px';
        email.style.borderColor = 'red';
        email.style.borderWidth = '2px';
        return formValid === false;
    } else {
        emailError.style.display = 'none';
        email.style = 'default';
    }

    /**
        *   if message.value is empty and is different regex(textInput),
        *  or last.length is less than 2 characters => error message 
    */
    if(textInput.exec(message.value) === null || message.length < 2) {
        messageError.textContent = 'Veuillez renseigner 2 caractères minimum pour votre message';
        messageError.style.color = 'red';
        messageError.style.marginLeft = '30px';
        messageError.style.fontSize = '15px';
        message.style.borderColor = 'red';
        message.style.borderWidth = '2px';
        return formValid === false;
    }else {
        messageError.style.display = 'none';
        message.style = 'default';
    }
    return formValid = true;

}
// function called at form submit event
function validationContact(e){

    // default behavior of submit event is avoided
    e.preventDefault();
    // run checkInputs function instead
    validInputs();
  
    // all inputs must be true so the form can be submitted correctly
    // if so, confirmation message and red close button are displayed
    if(formValid === true) {
        form.style.display = 'none';
        console.log(lastName.value, firstName.value, email.value, message.value);
      
        return true;
    }
  
}

// listening submit event on form element so function validate is run
form.addEventListener('submit', validationContact);

