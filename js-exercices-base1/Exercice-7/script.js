var pointure = prompt("Quel est ta pointure ?");
var dateAn = prompt("Quel est ton année de naissance ?");

function total(){
  var resultat = (pointure *=2) +5;
  resultat*= 50;
  resultat-= dateAn;
  resultat+= 1766;

  return  resultat;
};
