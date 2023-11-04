let textoCadena = "";

do{
    let texto = prompt(`Ingrese una cadena de texto: `);

    if (textoCadena !== "") {
        textoCadena = texto + " - " + textoCadena;
    } else {
        textoCadena = texto;
    }

}while(confirm("¿Desea seguir ingresando texto?"));

document.write(textoCadena);