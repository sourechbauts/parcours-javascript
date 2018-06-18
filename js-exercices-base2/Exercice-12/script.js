function temperatureConverter() {

    var choice = prompt('0. End of the programme' +
        '\n' + '1.From Celsius to Fahrenheit' +
        '\n' + '2.From Celsius to Kelvin' +
        '\n' + '3.From Farenheit to Celsius' +
        '\n' + '4.From Farenheit to Kelvin' +
        '\n' + '5.From Kelvin to Celsius' +
        '\n' + '6.From Kelvin to Farenheit');

    if (Number(choice) !== 0) {

        var temperature = Number(prompt('Which temperature do you want to convert to?'));
        console.log(temperature);


        switch (Number(choice)) {
            case 0:
                alert((temperature * (9 / 5)) + 32);
                break;
            case 1:
                alert(temperature + 273, 15);
                break;
            case 2:
                alert((temperature - 32) / (9 / 5));
                break;
            case 3:
                alert(((temperature - 32) * (5 / 9)) + 273, 15);
                break;
            case 4:
                alert(temperature - 273, 15);
                break;
            case 5:
                alert((temperature * 9 / 5) - 459, 67);
                break;
            default:
                alert('Sorry, it\'s not a temperature');
        }
    }

}