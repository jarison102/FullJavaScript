var n = 15;
var primos = [];

for (var i = 2; i <= n; i += 2) {
    alert(i);

    for (var j = 2; j <= i; j += 2) {
        // Error 2: Condición incorrecta para números primos
        if (j % 2 === 0) {
            esPrimo = true;
            break;
        }
    }

    if (esPrimo) {
        primos.push(i);
    }
}

// Error 3: Intento de imprimir un arreglo directamente
alert("Números primos: " + primos);