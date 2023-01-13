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

function closeModal() {
  modalbg.style.display = "none";
  document.body.style.overflowY = "auto";
}

function validate() {
  let name = document.getElementById('first');
  let lastname = document.getElementById('last');
  let email = document.getElementById('email');
  let date = document.getElementById('birthdate');
  let quantity = document.getElementById('quantity');
  let checkbox = document.getElementById('checkbox1');
  let checkedRadio = document.querySelector("input[name='location']:checked");
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(name.value.length < 2) {alert('Veuillez entrer 2 caractères ou plus pour le champ du prénom.');return false;};
  if(lastname.value.length < 2) {alert('Veuillez entrer 2 caractères ou plus pour le champ du nom.');return false;};
  if(!email.value) {alert('Veuillez saisir une adresse mail.');return false;};
  if(!regex.test(String(email.value).toLowerCase())) {alert('Veuillez saisir une adresse mail valide.'); return false;};
  if(!date.value) {alert('Vous devez entrer votre date de naissance.');return false;};
  if(!quantity.value) {alert('Veuillez saisir un nombre de tournois.');return false;};
  if(!checkedRadio) {alert("Vous devez choisir une option de ville.");return false;}
  if(!checkbox.checked) {alert('Vous devez vérifier que vous acceptez les termes et conditions.');return false;};
  alert('Merci ! Votre réservation a été reçue.');
  return true;
}