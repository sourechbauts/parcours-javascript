function jourDeLaSemaine() {

    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break;
        case 2:
            day = "Mardi";
            break;
        case 3:
            day = "Mercredi";
            break;
        case 4:
            day = "jeudi";
            break;
        case 5:
            day = "Vendredi";
            break;
        case 6:
            day = "Samedi";
    }
    document.getElementById("hoho").innerHTML = "Nous sommes " + day;
}