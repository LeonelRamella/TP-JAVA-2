let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt("Introduce el nombre " + (i + 1) + ":");
  let edad = parseInt(prompt("Introduce la edad de " + nombre + ":"));
  if (!isNaN(edad)) {
    nombres.push(nombre);
    edades.push(edad);
} else {
    alert("La edad ingresada para " + nombre + " no es válida. Ingrese una edad numérica.");
    i--;
  }
}

let maxEdad = -1;
let maxIdx = -1;

for (let i = 0; i < edades.length; i++) {
  if (edades[i] > maxEdad) {
    maxEdad = edades[i];
    maxIdx = i;
  }
}
document.write(
  "La persona de mayor edad es " +
    nombres[maxIdx] +
    " con " +
    maxEdad +
    " años."
);
