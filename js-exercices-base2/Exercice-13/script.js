function calculateBMI() {

    var weight = Number(prompt('Quel est votre poids? (en Kg)'));
    var height = Number(prompt('Quelle est votre taille? (en mètres)'));

    var result = Number(weight) / (Math.pow(Number(height), 2));
    console.log(Number(result.toFixed(2)));
    alert('Votre IMC est' + Number(result.toFixed(2)));

    switch (true) {
        case (result < 16.5):
            alert('dénutrition ou famine');
            break;
        case (16.5 <= result < 18.5):
            alert('maigreur');
            break;
        case (18, 5 <= result < 25):
            alert('corpulence normale');
            break;
        case (25 <= result < 30):
            alert('surpoids');
            break;
        case (30 <= result < 35):
            alert('obésité modérée');
            break;
        case (35 <= result < 40):
            alert('obésité sévère');
            break;
        case (result > 40):
            alert('obésité morbide');
            break;
        default:
            alert('Vous avez probalement fait une erreur, réessayez');
    }

}