function testWhile() {

    var lettre = "";
    while (lettre.indexOf('p') < 0) {
        lettre = prompt("Ecris un mot contenant la lettre p");
    }
    var cuicui = document.getElementById("hoho");
    cuicui.innerHTML = "ton mot est : " + lettre;
}