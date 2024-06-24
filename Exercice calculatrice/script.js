function calcul() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;
    
        if (isNaN(number1) || isNaN(number2)) {
            result = "Veuillez entrer des nombres valides.";
        } else {
            switch (operation) {
                case 'addition':
                    result = number1 + number2;
                    break;
                case 'soustraction':
                    result = number1 - number2;
                    break;
                case 'multiplication':
                    result = number1 * number2;
                    break;
                case 'division':
                    if (number2 === 0) {
                        result = "La division par zéro n'est pas possible.";
                    } else {
                        result = number1 / number2;
                    }
                    break;
                default:
                    result = "Opération non valide.";
            }
        }

        document.getElementById('result').innerText = "Résultat: " + result;
    }
