const caracter = "#";
const count = 8;
let rows = [];
let result = "";

// Generar las filas de la pirámide
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// Convertir las filas en un resultado concatenado
for (const row of rows) {
    result += "\n" + row;
}

// Mostrar la pirámide en la consola y en la página
console.log(result);
document.getElementById("output").textContent = result;

// Función para crear una fila de la pirámide
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + caracter.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
