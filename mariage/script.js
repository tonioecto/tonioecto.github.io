var n=2; 	

let invite_sans_acc = ['Toto', 'Titi'];
let invite_avec_acc = ['Riri','Fifi'];

function reset_onload() {
document.getElementById("zone_affichage").value='';
document.getElementById("name").value='' ; 
}

function Redirectionformseul(){
  document.location.href="https://docs.google.com/forms/d/e/1FAIpQLScfcervTTaWB6bxPgJmOKlksTDz1D8_9lafktPYn5ZyxaB_xg/viewform?usp=pp_url"; 
}

function Redirectionformcouple(){
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
  var acc = invite_avec_acc.includes(nom);
var seul = invite_sans_acc.includes(nom);
if(acc) {
   Redirectionformcouple();
} else { 
   if (seul) {
	   Redirectionformseul() ;
   }
   else {
	   effacer();
	   document.getElementById("zone_affichage").value = 'Veuillez réessayer de renseigner votre nom en faisant bien attention au format demandé' ;
   }
}
}
