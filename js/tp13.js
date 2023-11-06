let texto = prompt("Introduce un texto");
if(isNaN(texto)){
    let textoRes = texto.toUpperCase();
    document.write("El texto en mayusculas es: " + textoRes);
} else{
     alert("Solo texto por favor")
}
