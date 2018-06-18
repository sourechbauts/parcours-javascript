function somme() {

    var sommeTotal = 0;
    for (var i = 0; i < 3; i++) {
        chiffre = prompt("Saissisez un nombre !");
        sommeTotal += Number(chiffre);
    }
    alert(sommeTotal);
}