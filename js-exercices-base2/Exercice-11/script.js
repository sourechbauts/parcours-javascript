function calculMoyenne() {
    var nombre;
    var total = 0;
    var nb_entree = 0;
    var moyenne = 0;


    do {
        nombre = "";
        while (!Number.isInteger(nombre)) {

            nombre = Number(prompt("Entrez un nombre entier"));
            if (!Number.isInteger(nombre)) {
                alert("Erreur, ce n'est pas un nombre entier");
            }
        }

        if (nombre >= 0) {
            total += nombre;
            nb_entree++;
            console.log(nombre);

        } else {

            var moyenne = (total / nb_entree);
        }

    }
    while (nombre >= 0)

    alert("Vous avez encodé " + nb_entree + " nombre(s)");
    alert("la moyenne est " + moyenne);
}