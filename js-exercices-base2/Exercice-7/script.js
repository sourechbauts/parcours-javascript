function faireChoix() {

    switch (prompt("1, 2, ou 3?")) {
        case "1":
            alert("1. Merci");
            break;
        case "2":
            alert("2. Bonjour");
            break;
        case "3":
            alert("3. Au revoir");
            break;
        default:
            alert("Pardon, que voulez-vous ?");
    }
}