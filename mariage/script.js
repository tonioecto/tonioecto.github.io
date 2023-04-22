/*import CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/sha1.js";*/
var n=2; 	

let invite_sans_acc = ['Toto', 'Titi'];
let invite_avec_acc = ['d9c5ce191ad566e4751c3fadb7cd27a0dbf4910d','dec450a0be56389a6a68d114eed5714f1ff2c222'];

function reset_onload() {
document.getElementById("zone_affichage").value='';
document.getElementById("name").value='' ; 
}

function Redirectionformcouple(){
  document.location.href="https://docs.google.com/forms/d/e/1FAIpQLScfcervTTaWB6bxPgJmOKlksTDz1D8_9lafktPYn5ZyxaB_xg/viewform?usp=pp_url"; 
}

function Redirectionformseul(){
  document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSenynHwbTvGGwPcCdmYhuPZ8qQe_PJhG5vKHWgDMNhJMGTsaw/viewform?usp=pp_url"; 
}

function effacer(form)
{
  document.getElementById("name").value="";
}	

function verif()
{
document.getElementById("zone_affichage").value='';
var nom = document.getElementById("name").value ;
var hashnom = CryptoJS.SHA1(nom).toString(CryptoJS.enc.Hex);
var acc = invite_avec_acc.includes(hashnom);
var seul = invite_sans_acc.includes(hashnom);
if(acc) {
   Redirectionformcouple();
} else { 
   if (seul) {
	   Redirectionformseul() ;
   }
   else {
	   effacer();
	   document.getElementById("zone_affichage").value = hashnom /* 'Veuillez réessayer de renseigner votre nom en faisant bien attention au format demandé'*/ ;
   }
}
}

/*
window.onload=( function() {
document.addEventListener("keydown", name, false);
function name(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    document.getElementById("zone_affichage").value"You hit the enter key.";
  } else {
    document.getElementById("zone_affichage").value="Oh no you didn't.";
  }
}
    }); */

 

function flisten(e) {
	if (e.keyCode == 13) {
		document.removeEventListener('keydown', flisten) ;
		effacer();
        document.getElementById("zone_affichage").value="Appuyez sur le bouton pour valider la réponse, pas sur Entrée :p";
    }
} 


var name = document.getElementById('name');
document.addEventListener('keydown', flisten) ;


