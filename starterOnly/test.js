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
    let valid = true;      /*si la validation est vrai elle return vraie 
                            et affiche le resultat
                            sinon elle modifie le submit en rouge*/
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
  
  let prenom = document.getElementById('first').value;
  
  
  let nom = document.getElementById('last').value;
  
  let email = document.getElementById('email').value;
  
  let date = document.getElementById('birthdate').value;
  
  let quantite = document.getElementById('quantity').value;
  
  let submit = document.getElementsByName('btn-submit')
  
  
    
  
  
  
      modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
        .then(function (valid) {
          alert("Formulaire valider");
          return valid;
        })
        .catch(function (e) {
          alert("Formulaire non valide !");
          return e;
        })
  
  
  
      // launch modal form
      function launchModal() {
        modalbg.style.display = "block";
      }
  