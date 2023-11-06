// const texto = prompt("Introduce un texto:");
// let posicionVocal = -1;


// if (texto !== null) {
//     for (let i = 0; i < texto.length; i++) {
//         const caracter = texto[i].toLowerCase();
//         if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
//             posicionVocal = i + 1;
//             break;
//         }
//     }

//     if (posicionVocal !== -1) {
//         document.write("La primera vocal " + caracter + "se encuentra en la posición: " + posicionVocal);
//     } else {
//         document.write("No se encontraron vocales en el texto ingresado.");
//     }
// }
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