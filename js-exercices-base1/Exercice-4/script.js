var reponse1 = prompt("Votre Nom");
var reponse2 = prompt("Votre Prénom");
var reponse3 = prompt("Votre Ville");
if( reponse1 == null || reponse2 == null || reponse3 == null){
    alert("Vous avez cliqué sur Annuler");
}
else {
alert("Nom : " + reponse1 +"\nPrénom : " + reponse2 +"\nVille : " + reponse3);
}
