const nota = prompt("Ingrese nota");
if(nota >=0 && nota <=10){
    switch(nota){
        case '0':
        case '1':
        case '2':
            document.write("muy deficiente")
            break;
        case '3':
        case '4':
            document.write("insuficiente")
            break;
        case '5':
        case '6':
            document.write("suficiente")
            break;
        case '7':
            document.write("Bien")
            break;
        case '8':
        case '9':
            document.write("Notable")
            break;
        case '10':
            document.write("Sobresaliente")
            break;
    }
}
else if(nota <0 || nota >10){
    document.write("Numero invalido")
}
else{
    document.write("Solo numeros por favor")
}