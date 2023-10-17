document.getElementById("FNumeros").addEventListener("submit", function(event) {
    // Evitamos que el formulario se envíe y la página se recargue
    event.preventDefault();

    // Obtenemos el valor ingresado en el campo de entrada
    const dividendo  = parseInt(document.getElementById("primer").value);
    const divisor  = parseInt(document.getElementById("segundo").value);

    let cociente = 0;
    
    if(divisor !== 0){
        let resto = dividendo;
        
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
    } 
    alert (" Resultado es " + cociente);
});;