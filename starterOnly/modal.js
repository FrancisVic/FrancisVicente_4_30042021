function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function valid() {
  let valid = true;
  let e = false;
  if (valid === true) {
    return true;
  }
  else {
    return false;
  }
}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
let validForm = document.getElementById('submitV');
validForm.addEventListener("click", validFormulaire);


/*validation du nom et prenom*/
function validateNameAndLastName() {
  let prenom = document.getElementById('first').value;
  let nom = document.getElementById('last').value;

  let regName = new RegExp("^([a-zA-Z]){2,}$");
  if (prenom.length > 2) {
    error.innerHTML = "";
  }
  if (nom.length > 2) {
    errorName.innerHTML = "";
  }
  if (regName.test(nom)) {
    errorName.innerHTML = "";
  }
  else {
    errorName.innerHTML = "Nom invalide";
    errorName.style.color = "red";
    errorName.style.fontSize = "20px";
    return false;
  }
  if (regName.test(prenom)) {
    error.innerHTML = "";
  }
  else {
    error.innerHTML = "Prénom invalide";
    error.style.color = "red";
    error.style.fontSize = "20px";
    return false;
  }
  if (prenom.length < 2) {
    let error = document.getElementById('error');
    error.innerHTML = "Prénom invalide";
    error.style.color = "red";
    error.style.fontSize = "20px";
    return false;
  }
  if (nom.length < 2) {
    let errorName = document.getElementById('errorName');
    errorName.innerHTML = "Nom invalide";
    errorName.style.color = "red";
    errorName.style.fontSize = "20px";
    return false;
  }
  return true;
}

/*validation de l'adresse mail*/
function validateMail() {
  let email = document.getElementById('email').value;
  let reg = new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$"); //Expression régulière est un pattern de validation
  if (reg.test(email)) {
    errorEmail.innerHTML = "Adresse confirmer";
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "20px";
    return true;
  }
  else {
    errorEmail.innerHTML = "Il manque des caractères spéciaux";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "20px";
    return false;
  }
}

/*validation de la date*/
function validateDate() {
  let dataDate = document.getElementById('birthdate').value;
  let regNum = new RegExp(/^[0-9]{4}[/-][0-9]{2}[/-][0-9]{2}$/);

  if (regNum.test(dataDate)) {
    let errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = "";
    return true;
  }
  else {
    errorDate.innerHTML = "Ce champs est requis";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "20px";
    return false;
  }
}

/*validation de la quantité*/
function validateQuantity() {
  let quantity = parseInt(document.getElementById('quantity').value);
  if (!(quantity >= 0 && quantity <= 99)) {
    let quantError = document.getElementById('quantError');
    quantError.innerHTML = "entrer un nombre";
    quantError.style.color = "red";
    quantError.style.fontSize = "20px";
    return false;
  }
  else
    quantError.innerHTML = "";
  return true;
}

/*validation de la ville*/
function validateLocation() {
  let len = document.getElementsByClassName('location').length;
  let checkbox = [];

  for (i = 1; i <= len; i++) {
    let str = "location" + i;
    let elem = document.getElementById(str);
    checkbox.push(elem);
  }
  let verify = false;
  for (i = 0; i < len; i++) {
    if (checkbox[i] && checkbox[i].checked === true) {
      let errorCity = document.getElementById('errorCity');
      errorCity.innerHTML = "";
      verify = true;
      break;
    }
  }
  if (verify == false) {
    errorCity.innerHTML = "Choisissez une ville";
    errorCity.style.color = "red";
    errorCity.style.fontSize = "20px";
    return false;
  }
  else
    return true;
}

/*validation des conditions*/
function validateCheckbox() {
  let condition = document.getElementById('checkbox1');
  if (condition.checked === true) {
    let errorValidationCondition = document.getElementById('errorValidationCondition');
    errorValidationCondition.innerHTML = "";
    return true;
  }
  else {
    errorValidationCondition.innerHTML = "Veuillez accepter les conditions d'utilisation";
    errorValidationCondition.style.color = "red";
    errorValidationCondition.style.fontSize = "20px";
    return false;
  }
}

function validFormulaire(e) {
  e.preventDefault();
  let err = true;

  let validateNameAndLastNamex = validateNameAndLastName();
  let validateMailx = validateMail();
  let validateDatex = validateDate();
  let validateQuantityx = validateQuantity();
  let validateLocationx = validateLocation();
  let validateCheckboxx = validateCheckbox();

  console.log("validateNameAndLastName = " + validateNameAndLastNamex);
  console.log("validateMail = " + validateMailx);
  console.log("validateDate = " + validateDatex);
  console.log("validateQuantity = " + validateQuantityx);
  console.log("validateLocation = " + validateLocationx);
  console.log("validateCheckbox = " + validateCheckboxx);

  if (validateNameAndLastNamex && validateMailx && validateDatex && validateQuantityx && validateLocationx && validateCheckboxx)
    err = false;

  if (err == false) {
    let list = document.getElementById('formulaire');
    let parentNode = list.parentNode;
    let newP = document.createElement('p');
    newP.id = "messageSucces";
    newP.style.marginBottom = "600px";
    newP.style.textAlign = "center";
    newP.textContent = "Formulaire validé ! Merci";
    let newButton = document.createElement('input');
    newButton.classList.add("btn-submit");
    newButton.setAttribute("value", "close");
    newButton.setAttribute("type", "submit");
    newButton.addEventListener('click', closeModal);
    parentNode.appendChild(newButton);
    parentNode.replaceChild(newP, list);
  }
}


function closeModal() {
  let content = document.getElementsByClassName('content')[0];
  let bg = document.getElementsByClassName('bground')[0];
  console.log(bg);
  let bg2 = document.getElementsByClassName('bground');
  console.log(bg2);
  content.style.display = 'none';
  bg.style.zIndex = 0;
  bg.style.backgroundColor = 'rgba(26, 39, 156, 0)';
  document.location.reload();
}



//j'écoute la méthode change dans le champ email et j'appelle la fonction

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  let content = document.getElementsByClassName('content')[0];
  let bg = document.getElementsByClassName('bground')[0];
  content.style.removeProperty('display');
  bg.style.zIndex = 1;
  let iconClose = document.getElementsByClassName('close')[0];
  iconClose.addEventListener("click", closeModal);
}