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
  const name = document.querySelector('#first');
  const lastname = document.querySelector('#last');
  const email = document.querySelector('#email');
  const date = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const checkbox = document.querySelector('#checkbox1');
  const consent1 = document.querySelector('#consent1');
  const checkedRadio = document.querySelector("input[name='location']:checked");
  const warningRadio = document.querySelector('#warningRadio');
  const form = document.querySelector('#form');
  const thanks = document.querySelector('#thanks');
  const borderReset = "2px solid transparent";
  const borderError = "2px solid #e54858";
  const identity = [name,lastname];
  const informations = [date,quantity]
  //Vérification si les nom et prénoms contiennent au moins 2 caractères
  identity.forEach(element => {
    if(element.value < 2) {
      element.nextElementSibling.innerHTML = element.dataset.error;
      element.style.border = borderError;
      isValid = false;
    } else {
      element.nextElementSibling.innerHTML = '';
      element.style.border = borderReset;
    }
  });
  //Vérification si la date de naissance et la quantity sont corrects
  informations.forEach(element => {
    if(!element.value) {
      element.nextElementSibling.innerHTML = element.dataset.error;
      element.style.border = borderError;
      isValid = false;
    } else {
      element.nextElementSibling.innerHTML = '';
      element.style.border = borderReset;
    }
  });
  //Vérification si un email est inséré
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!emailRegex.test(email)) {
    email.nextElementSibling.innerHTML = email.dataset.error;
    email.style.border = borderError;
    isValid = false;
  } else {
    email.nextElementSibling.innerHTML = '';
    email.style.border = borderReset; 
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