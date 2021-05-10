function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function valid() {
  console.log("Bonjour");
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
    console.log(error);
    error.innerHTML = "prénom invalide";
    error.style.color = "red";
    error.style.fontSize = "20px";
  }
  if (nom.length <= 2) {
    let errorName = document.getElementById('errorName');
    errorName.innerHTML = "Le nom est invalide";
    errorName.style.color = "red";
    errorName.style.fontSize = "20px";
    console.log("ça marche bien");
  }

  if (prenom.length > 2)
   {
    error.innerHTML = "";
  }
  if(nom.length > 2)
  {
    errorName.innerHTML = "";
  }
}





let email = document.getElementById('email');
email.addEventListener('change', validateEmail);

function validateEmail(email) {
  let emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
  let valid = emailReg.test(email);

  if (!valid) {
    return false;
  } else {
    return true;
  }
}

let dataDate = document.getElementById('birthdate').value;

let quantite = document.getElementById('quantity').value;






modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

