alert("¡Gracias por visualizar mi Proyecto!");

document.getElementById('boton').onclick = function () {
    console.log("Funciona");
    document.getElementById('boton').innerHTML = "Tema Claro";
    document.getElementById('color').style="background:#D94A38";
}
