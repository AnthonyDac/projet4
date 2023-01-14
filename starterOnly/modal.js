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
  let isValid = true;
  let name = document.getElementById('first');
  let lastname = document.getElementById('last');
  let email = document.getElementById('email');
  let date = document.getElementById('birthdate');
  let quantity = document.getElementById('quantity');
  let checkbox = document.getElementById('checkbox1');
  let consent1 = document.getElementById('consent1');
  let checkedRadio = document.querySelector("input[name='location']:checked");
  let warningRadio = document.getElementById('warningRadio');
  //let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!name.value || name.value < 2) {
    name.nextElementSibling.innerHTML = name.dataset.error;
    name.style.border ="2px solid #e54858";
    return false;
  } else {
    name.nextElementSibling.innerHTML = '';
    name.style.border ="2px solid transparent"; 
  }
  if(!lastname.value || lastname.value < 2) {
    lastname.nextElementSibling.innerHTML = lastname.dataset.error;
    lastname.style.border ="2px solid #e54858";
    return false;
  } else {
    lastname.nextElementSibling.innerHTML = '';
    lastname.style.border ="2px solid transparent"; 
  }
  if(!email.value) {
    email.nextElementSibling.innerHTML = email.dataset.error;
    email.style.border ="2px solid #e54858";
    return false;
  } else {
    email.nextElementSibling.innerHTML = '';
    email.style.border ="2px solid transparent"; 
  }
  if(!date.value) {
    date.nextElementSibling.innerHTML = date.dataset.error;
    date.style.border ="2px solid #e54858";
    return false;
  } else {
    date.nextElementSibling.innerHTML = '';
    date.style.border ="2px solid transparent"; 
  }
  if(!quantity.value) {
    quantity.nextElementSibling.innerHTML = quantity.dataset.error;
    quantity.style.border ="2px solid #e54858";
    return false;
  } else {
    quantity.nextElementSibling.innerHTML = '';
    quantity.style.border ="2px solid transparent"; 
  }
  if(!checkedRadio) {
    warningRadio.innerHTML = "Vous devez choisir une option.";
    return false;
  } else {
    warningRadio.innerHTML = '';
  }
  if(!checkbox.checked) {
    consent1.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  } else {
    consent1.innerHTML = '';
  }
  if(isValid) {
    alert('Merci ! Votre réservation a été reçue.');
    return true;
  }
}