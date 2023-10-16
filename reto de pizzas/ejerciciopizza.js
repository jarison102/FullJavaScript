function ActualizarPizzas() {
  var NombreP = document.getElementById("NombreP").value;
  var PizzaSelect = document.getElementById("Pizza");

  // Eliminamos las opciones anteriores
  while (PizzaSelect.options.length > 0) {
    PizzaSelect.remove(0);
  }
  var PizzasVarias = obtenerPizzas(NombreP);
  // Creamos las opciones en el select
  for (var i = 0; i < PizzasVarias.length; i++) {
    var option = document.createElement("option");
    option.text = PizzasVarias[i];
    PizzaSelect.add(option);
  }
}

// Esta función simula la obtención de los departamentos del país ingresado.
// Puedes reemplazar esta función con una llamada AJAX a tu servidor para obtener los departamentos reales.
function obtenerPizzas(NombreP) {
    var Nuevos_Ingredientes = [];
    if (NombreP === "Vegetarianas") {
        Nuevos_Ingredientes = ["Pimiento", "tofu"];
    } else if (NombreP === "Carne") {
        Nuevos_Ingredientes = ["Peperoni", "Jamón ", "Salmón"];
    }// Agrega más ingredientes y sus departamentos según tus necesidades.

    return Nuevos_Ingredientes;
}

function activadordealertas(){
          // Agregamos un escuchador de eventos al formulario cuando se envía
          document.getElementById("Pizzas").addEventListener("submit", function(event) {
            // Evitamos que el formulario se envíe y la página se recargue
            event.preventDefault();

            // Obtenemos el valor ingresado en el campo de entrada
            const IngredienteIngresado = document.getElementById("NombreP").value;

            // Verificamos si el valor es igual a "Jarison" y mostramos un mensaje
            if (IngredienteIngresado === "Vegetarianas") {
                alert("Tu pizza es vegetariana");
            } else if(IngredienteIngresado === "Carne") {
                alert("Tu pizza es de carne");
            }
        });
}
activadordealertas()



