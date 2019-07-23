var item = [1, 2, 3];

function addQueue() {
    number = Number(document.getElementById('inputQueue').value);
    if (isNaN(number)) {
        console.log("No se ha podido añadir ya que no es un número");
    } else if (number.length == null) {
        alert("Añade un elemento en el input")
    } else {
        item.unshift(number);
        console.log("Contenido cola tras añadir elemento: ", item);
    }
}

function removeQueue() {
    if (item.length == 0) {
        console.log("No se puede eliminar más elementos");
    } else {
        item.pop();
        console.log("Contenido cola tras eliminar elemento: ", item);
    }
}

console.log("Contenido inicial cola: ", item);