var pila = [4, 5, 6];

function addStack() {
    number = Number(document.getElementById('inputStack').value);
    if (isNaN(number)) {
        console.log("No se ha podido añadir ya que no es un número");
    } else if (number.length == null) {
        alert("Añade un elemento en el input")
    } else {
        pila.unshift(number);
        console.log("Contenido pila tras añadir elemento: ", pila);
    }
}

function removeStack() {
    if (pila.length == 0) {
        console.log("No se puede eliminar más elementos");
    } else {
        pila.shift();
        console.log("Contenido pila tras eliminar elemento: ", pila);
    }
}

console.log("Contenido inicial pila: ", pila);