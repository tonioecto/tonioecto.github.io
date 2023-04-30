/*import CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/sha1.js";*/
var n=2; 	

let liste_clair_avec = ['Pauline Maigne','Jean-Etienne Maigne','Caroline Leroux','Cédric Leroux','Marie-Aline Maigne','Pierre Maigne',
'Catherine Houël','Louis Poissenot','Anne Maigne','Jean-François Maigne','Denise Portail','Albert Portail','Jean-François Ahr','Nathalie Portail',
'Catherine Ahr','Céline Bachelier','Alain Bachelier','Oriane Leroux','Nicolas Houël','Sandrine Houël','Christine Nedelec','Frédéric Nedelec',
'Sébastien Houël','Caroline Houël','Jean-Guillaume Houël','Sophie Houël','Gildas Houël','Estelle Houël','Antoine Houël','Diane Begard',
'Frédéric Maigne','Delphine Maigne','Olivier Maigne','Sophie Maigne','Clémentine Bachelier','Margaux Bachelier','Charles Bailly','Grégoire Bailly',
'Hugo Metteil','Jacques Vignaud','Frédérique Vignaud','François Vignaud','Alexandra Houël','Oriane Houël','Gabriel Nedelec','Yvan Nedelec',
'Anaïs Houël','Jean-Baptiste Membrado','Adrien Nivaggioli','Stanislas Barthélémy','Adrien Dumarquez','Antonin Berthon','Eduardo Vitral',
'Maxime Roméas','Sophie Duval','Aliénor Winum','Camille Tixier','Ons Hiver Tiss','Joannice Hiver Tiss','Alice Glémarec','Quentin Glémarec',
'Catherine Thévenet','Mathieu Fouquet','Baptiste Brossard','Michel Gabagnou','Catherine Gabagnou','Damien Colombo','Sophie Colombo',
'Amélie Raby','Fabienne Hausermann','Jean Hausermann','Stéphanie Gander'
 ] ;
let liste_clair_sans = ['Gaspard Maigne','Robert Maigne','Capucine Leroux','Jacqueline Leroux','Emmanuelle Maigne','Margot Ahr','Arthur Ahr',
'Maxime Bailly','Camille Metteil','Elisabeth Houël','Maximilien Houël','Valentine Houël','Lucas Nedelec','Angèle Nedelec','Ninon Houël',
'Avril Houël','Joseph Houël','Manon Houël','Robin Houël','Lily Houël','Léopoldine Houël','Léopoldine Maigne','Côme Maigne','Cyprien Maigne',
'Blanche Maigne','Amicie Maigne','Ferréol Maigne','Antoine Maigne','Joséphine Maigne','Adrien Maigne','Itri Vacchiani','Hugo Bazille',
'Paul-Emile Landrin','Lucas Journel','Sébastien Gomé','Louis Reboul','Félix Martel','Pablo Le Hénaff','Simon Msika','Alexandre Matton',
'Luka Selem','Sabine Gossellin','Céline Perrot','Henry de Catheu','Hugo Mlodecki','Victor Poyard','Julien Naty-Daufin','Loreline Faugier',
'Anne-Charlotte Gabagnou','Marie-Sophie Gabagnou','Victoire Gabagnou','Pierre Colombo','Julien Colombo','Carole Colombo','Josiane Cannioux'
] ;




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


