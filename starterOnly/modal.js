function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
closeModalBtn.forEach((element) => element.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.body.style.overflowY = "hidden";
}

//Permet de fermer le modal
function closeModal() {
  modalbg.style.display = "none";
  document.body.style.overflowY = "auto";
}

function validate() {
  isValid = true;
  //déclaration des éléments du DOM
  let name = document.querySelector('#first');
  let lastname = document.querySelector('#last');
  let email = document.querySelector('#email');
  let date = document.querySelector('#birthdate');
  let quantity = document.querySelector('#quantity');
  let checkbox = document.querySelector('#checkbox1');
  let consent1 = document.querySelector('#consent1');
  let checkedRadio = document.querySelector("input[name='location']:checked");
  let warningRadio = document.querySelector('#warningRadio');
  let form = document.querySelector('#form');
  let thanks = document.querySelector('#thanks');
  //Vérification si le prénom contient au moins 2 lettres
  if(!name.value || name.value.length < 2) {
    name.nextElementSibling.innerHTML = name.dataset.error;
    name.style.border ="2px solid #e54858";
    isValid = false;
  } else {
    name.nextElementSibling.innerHTML = '';
    name.style.border ="2px solid transparent"; 
  }
  //Vérification si le nom contient au moins 2 lettres
  if(!lastname.value || lastname.value < 2) {
    lastname.nextElementSibling.innerHTML = lastname.dataset.error;
    lastname.style.border ="2px solid #e54858";
    isValid = false;
  } else {
    lastname.nextElementSibling.innerHTML = '';
    lastname.style.border ="2px solid transparent"; 
  }
  //Vérification si un email est inséré
  if(!email.value) {
    email.nextElementSibling.innerHTML = email.dataset.error;
    email.style.border ="2px solid #e54858";
    isValid = false;
  } else {
    email.nextElementSibling.innerHTML = '';
    email.style.border ="2px solid transparent"; 
  }
  //Vérification si une date de naissance est envoyée
  if(!date.value) {
    date.nextElementSibling.innerHTML = date.dataset.error;
    date.style.border ="2px solid #e54858";
    isValid = false;
  } else {
    date.nextElementSibling.innerHTML = '';
    date.style.border ="2px solid transparent"; 
  }
  //Vérification si une donnée concernant le nombre de tournoi est envoyée
  if(!quantity.value) {
    quantity.nextElementSibling.innerHTML = quantity.dataset.error;
    quantity.style.border ="2px solid #e54858";
    isValid = false;
  } else {
    quantity.nextElementSibling.innerHTML = '';
    quantity.style.border ="2px solid transparent"; 
  }
  //Vérification si une ville est choisie
  if(!checkedRadio) {
    warningRadio.innerHTML = "Vous devez choisir une option.";
    isValid = false;
  } else {
    warningRadio.innerHTML = '';
  }
  //Vérification si le consentement est donné
  if(!checkbox.checked) {
    consent1.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  } else {
    consent1.innerHTML = '';
  }
  if(isValid) {
    //Affichage du message de remerciement
    form.style.display = "none";
    thanks.style.display = "flex";
  }
  return false;
}