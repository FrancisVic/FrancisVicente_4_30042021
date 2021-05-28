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


function validFormulaire(e) {
  e.preventDefault();
  let prenom = document.getElementById('first').value;
  let nom = document.getElementById('last').value;
  if (prenom.length <= 2) {
    let error = document.getElementById('error');
    error.innerHTML = "Prénom invalide";
    error.style.color = "red";
    error.style.fontSize = "20px";
  }
  if (nom.length <= 2) {
    let errorName = document.getElementById('errorName');
    errorName.innerHTML = "Nom invalide";
    errorName.style.color = "red";
    errorName.style.fontSize = "20px";
  }

  if (prenom.length > 2) {
    error.innerHTML = "";
  }
  if (nom.length > 2) {
    errorName.innerHTML = "";
  }

  let email = document.getElementById('email').value;
  let reg = new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$");

  if (reg.test(email)) {
    errorEmail.innerHTML = "Adresse confirmer";
    errorEmail.style.color = "green";
    errorEmail.style.fontSize = "20px";
  }
  else if (reg.test != email) {
    errorEmail.innerHTML = "Il manque des caractères spéciaux";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "20px";
  }

  let dataDate = document.getElementById('birthdate').value;
  let regNum = new RegExp(/^[0-9]{4}[/-][0-9]{2}[/-][0-9]{2}$/);

  if (regNum.test(dataDate)) {
    let errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = "";
  }
  else if (dataDate != regNum.test) {
    errorDate.innerHTML = "Ce champs est requis";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "20px";
  }


  let quantity = document.getElementById('quantity').value;
  let regQuant = new RegExp(/^[0-9]{1,2}$/)

  if (quantity != regQuant.test) {
    let quantError = document.getElementById('quantError');
    quantError.innerHTML = "entrer un nombre";
    quantError.style.color = "red";
    quantError.style.fontSize = "20px";
  }
  if (regQuant.test(quantity)) {
    quantError.innerHTML = "";

    if (quantity <= 99) {
      return true;
    }
    else {
      return false;
    }
  }


  let len = document.getElementsByClassName('location').length;
  let checkbox = [];

  for (i = 1; i <= len; i++) {
    let str = "location" + i;
    let elem = document.getElementById(str);
    checkbox.push(elem);
  }

  for (i = 0; i < len; i++) {
    if (checkbox[i] && checkbox[i].checked === true) {
      let errorCity = document.getElementById('errorCity');
      errorCity.innerHTML = "";
      break;
    }
    else {
      errorCity.innerHTML = "Choisissez une ville";
      errorCity.style.color = "red";
      errorCity.style.fontSize = "20px";

    }
  }
}



//j'écoute la méthode change dans le champ email et j'appelle la fonction




modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

