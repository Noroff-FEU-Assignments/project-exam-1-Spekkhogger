const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#label-name");
const emailInput = document.querySelector("#label-email");
const subjectInput = document.querySelector("#label-subject");
const textInput = document.querySelector("#label-text");

const send = document.querySelector("#send");

const nameError = document.querySelector(".nameerror");
const emailError = document.querySelector(".emailerror");
const subjectError = document.querySelector(".subjecterror");
const textError = document.querySelector(".texterror");

let confirmCounter = 0; 


function validateEmail(emailToValidate) {
    const regExEmail = /\S+@\S+\.\S+/; 
    const matchPattern = regExEmail.test(emailToValidate);
    return matchPattern;
}

function validateLength(input, reqLen) {
    return String(input).trim().length > reqLen;
}

function showConfirmation (input, error, number) {
    if (validateLength(input.value, number)){
        confirmCounter +=1;
        error.innerHTML = ``;
    } else {
        confirmCounter = 0;
        error.innerHTML = `<p>Must be at least ${number} long</p>`; 
    }
}

function formValidation(event){
    event.preventDefault();

    showConfirmation(nameInput, nameError, 5);
    showConfirmation(subjectInput, subjectError, 15);
    showConfirmation(textInput, textError, 25);

    if (validateEmail(emailInput.value)) {
        confirmCounter += 1;
        emailError.innerHTML = ``;
    } else {
        confirmCounter = 0;
        emailError.innerHTML = `<p>Please enter a valid e-mail</p>`;
    }

    if (confirmCounter >= 4) {
        form.innerHTML = "<p>Your message has been sent! Thank you</p>";
    }

}

form.addEventListener("submit", formValidation); 