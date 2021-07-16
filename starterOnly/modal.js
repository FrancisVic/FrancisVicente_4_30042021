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

  let err = 0;

  let prenom = document.getElementById('first').value;
  let nom = document.getElementById('last').value;
  if (prenom.length <= 2) {
    err = 1;
    let error = document.getElementById('error');
    error.innerHTML = "Prénom invalide";
    error.style.color = "red";
    error.style.fontSize = "20px";
  }

  if (nom.length <= 2) {
    err = 1;
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
  else {
    err = 1;
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
  else {
    err = 1;
    errorDate.innerHTML = "Ce champs est requis";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "20px";
  }


  let quantity = parseInt(document.getElementById('quantity').value);

  if (!(quantity >= 0 && quantity <= 99)) {
    console.log("if regex");
    let quantError = document.getElementById('quantError');
    err = 1;
    quantError.innerHTML = "entrer un nombre";
    quantError.style.color = "red";
    quantError.style.fontSize = "20px";
  }


  let len = document.getElementsByClassName('location').length;
  let checkbox = [];

  for (i = 1; i <= len; i++) {
    let str = "location" + i;
    let elem = document.getElementById(str);
    checkbox.push(elem);
  }

  err = 1;
  for (i = 0; i < len; i++) {
    if (checkbox[i] && checkbox[i].checked === true) {
      let errorCity = document.getElementById('errorCity');
      errorCity.innerHTML = "";
      err = 0;
    }
  }
  if (err == 1) {
    errorCity.innerHTML = "Choisissez une ville";
    errorCity.style.color = "red";
    errorCity.style.fontSize = "20px";
    console.log("erreur")
  }
  else
    console.log("pas erreur");

  let condition = document.getElementById('checkbox1');
  if (condition.checked === true) {
    let errorValidationCondition = document.getElementById('errorValidationCondition');
    errorValidationCondition.innerHTML = "";
  }
  else {
    console.log("else");
    errorValidationCondition.innerHTML = "Veuillez accepter les conditions d'utilisation";
    errorValidationCondition.style.color = "red";
    errorValidationCondition.style.fontSize = "20px";
    err = 1;
  }
  console.log("err = " + err);
  if (err == 0) {
    console.log("je rentre dans la condition");
    let list = document.getElementById('formulaire');
    let parentNode = list.parentNode;
    let newP = document.createElement('p');
    newP.style.marginBottom = "600px";
    newP.style.textAlign = "center";
    newP.textContent = "Formulaire validé ! Merci";
    console.log(newP);
    let newButton = document.createElement('input');
    console.log(newButton);
    newButton.classList.add("btn-submit");
    newButton.setAttribute("value", "close");
    newButton.setAttribute("type", "submit");
    newButton.addEventListener('click',closeModal);
  
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
}