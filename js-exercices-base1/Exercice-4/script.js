var Nom = prompt("Votre Nom");
var Prenom = prompt("Votre Prénom");
var Ville = prompt("Votre Ville");
if( Nom == null || Prenom == null || Ville == null){
  alert("Vous avez cliqué sur Annuler");
}else {
  alert("Nom : " + Nom +"\nPrenom : " + Prenom +"\nVille : " + Ville);
}
