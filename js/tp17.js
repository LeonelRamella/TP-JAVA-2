const texto = prompt("Introduce un texto:");
let posicion = -1;

if (texto !== null) {
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i].toLowerCase();
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            posicion = i;
            break; //para detener el for cuando encuemtre la vocal
        }
    }

    if (posicion !== -1) {
        document.write("La vocal '" + texto + "' está en la posición " + posicion);
    } else {
        document.write("No se hay vocales en el texto.");
    }
}
