
function numeroprimo(){
            // Agregamos un escuchador de eventos al formulario cuando se envía
            document.getElementById("FormularioPrimo").addEventListener("submit", function(event) {
                // Evitamos que el formulario se envíe y la página se recargue
                event.preventDefault();
    
                // Obtenemos el valor ingresado en el campo de entrada
                const NumeroIngresado = document.getElementById("numero").value;
                // Verificamos si el valor es igual a "Jarison" y mostramos un mensaje
                if(NumeroIngresado % 2 == 0){
                    alert ("Tu numero es par");
                }else{
                    alert ("Tu numero es impar");
                }
            });
}
numeroprimo()