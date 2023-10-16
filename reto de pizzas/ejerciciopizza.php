<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="ejerciciopizza.php" method="post"  name= "Pizzas" id="Pizzas" enctype="multipart/form-data">
        <label for="NombreP">Que pizza quieres?</label>
        <br>
        <input type="text" name="NombreP" id="NombreP" value="" oninput="ActualizarPizzas()">
        <br>
        <label for="Pizzas">Pizzas</label>
        <select name="Pizza" id="Pizza">

        </select>
        <select name="Extras" id="Extras">
            <option value="">mozzarella</option>
            <option value="">tomate</option>
        </select>
        <button type="submit">Mostar ingredientes</button>
    </form>
    <script src="ejerciciopizza.js"></script>
</body>

</html>