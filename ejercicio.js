        // Agregamos un escuchador de eventos al formulario cuando se envía
        document.getElementById("miFormulario").addEventListener("submit", function(event) {
            // Evitamos que el formulario se envíe y la página se recargue
            event.preventDefault();

            // Obtenemos el valor ingresado en el campo de entrada
            const nombreIngresado = document.getElementById("Nombre").value;

            // Verificamos si el valor es igual a "Jarison" y mostramos un mensaje
            if (nombreIngresado === "Jarison") {
                alert("Hola");
            } else {
                alert("MEEE");
            }
        });