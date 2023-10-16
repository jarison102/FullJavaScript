function contarLetraRepetida() {
    // Agregamos un escuchador de eventos al formulario cuando se envía
    document.getElementById("Formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

        // Obtenemos el valor ingresado en el campo de frase y letra
        const fraseIngresada = document.getElementById("Frase").value;
        const letraIngresada = document.getElementById("Letra").value;

        // Convierte la frase y la letra a minúsculas para que la búsqueda sea insensible a mayúsculas
        const fraseEnMinusculas = fraseIngresada.toLowerCase();
        const letraEnMinusculas = letraIngresada.toLowerCase();

        let contador = 0; // Inicializa un contador para contar la letra repetida

        // Itera a través de la frase en minúsculas
        for (let i = 0; i < fraseEnMinusculas.length; i++) {
            if (fraseEnMinusculas[i] === letraEnMinusculas) {
                contador++; // Incrementa el contador si se encuentra la letra
            }
        }

        // Muestra una alerta con el resultado
        alert(`La letra "${letraIngresada}" se repite ${contador} veces en la frase.`);
    });
}

contarLetraRepetida(); // Llama a la función para activar el escuchador de eventos
