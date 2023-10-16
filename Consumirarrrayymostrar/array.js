const array = ['TITO', 'STIVED', 'DRAVEN', 'JAO', 'ANGEL', 'MATEO', 'ANDER', 'MAPACHE', 'SEBASTIAN', 'MAICOL'];
const mostrarDatosBtn = document.getElementById("mostrarDatos");
const datosContainer = document.getElementById("datosContainer");

mostrarDatosBtn.addEventListener("click", function () {
    // Limpia el contenedor antes de mostrar los datos
    datosContainer.innerHTML = "";

    array.forEach(element => {
        const p = document.createElement("p"); // Crea un elemento <p>
        p.textContent = element; // Establece el contenido del elemento <p>
        datosContainer.appendChild(p); // Agrega el elemento <p> al contenedor
    });

    // Deshabilita el botón después de mostrar los datos
    mostrarDatosBtn.disabled = true;
});
