document.getElementById("Formulario").addEventListener("submit", function(event) {
    // Evitamos que el formulario se envíe y la página se recargue
    event.preventDefault();

    // Obtenemos el valor ingresado en el campo de entrada
    const NumeroIngresado = document.getElementById("Entero").value;
    if(NumeroIngresado % 2 === 0){
        alert("Entero positivo " + NumeroIngresado);
        for($i = NumeroIngresado; $i <= 10; $i++){
            alert ("Todos los numeros impares y pares desde el 1 " + $i);
        }
    }
});