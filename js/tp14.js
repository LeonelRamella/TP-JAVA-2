const texto = prompt("Introduce el texto:");
let textoConSignos = "";

if (texto !== null) {
    for (let i = 0; i < texto.length; i++) {
        textoConSignos += texto[i];
        if (i < texto.length - 1) {
            textoConSignos += "-";
        }
    }
    document.write("Texto con giones: " + textoConSignos);
}