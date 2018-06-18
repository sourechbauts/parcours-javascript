var tab = [-2, 1, 4];

function soustrait(x) {
    if (x >= 0) {
        return x - 2;
    } else {
        return "Nombre négatif!";
    }

}

function affiche() {
    alert(soustrait(x = tab[0]));
    alert(soustrait(x = tab[tab.length - 1]))
}