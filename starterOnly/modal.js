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
  console.log("dataDate = " + dataDate);

  let regNum = new RegExp(/^[0-9]{4}[/-][0-9]{2}[/-][0-9]{2}$/);


  if (regNum.test(dataDate)) {
    let errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = "";
    console.log("if");
  }
  else if (dataDate != regNum.test) {
    errorDate.innerHTML = "Ce champs est requis";
    errorDate.style.color = "red";
    errorDate.style.fontSize = "20px";
    console.log("else if");
  }



  let formData = document.getElementsByClassName('checkbox-input');

  if (formData != true) {
    let errorCity = document.getElementById('errorCity');
    errorCity.innerHTML = "Choisissez une ville";
    errorCity.style.color = "red";
    errorCity.style.fontSize = "20px";
  }
  else if (formData == true) {
    errorCity.innerHTML = "";
  }

}


//j'écoute la méthode change dans le champ email et j'appelle la fonction




let quantite = document.getElementById('quantity').value;






modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

