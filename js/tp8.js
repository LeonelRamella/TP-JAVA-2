let numero = parseInt(prompt("Indique el número que desea realizar la piramide (no mayor de 50)"));

while(numero > 50 || numero <= 0 || isNaN(numero)){
    if(confirm("Valor ingresado no valido. ¿Desea intentar nuevamente?")){
        numero = parseInt(prompt("Indique hasta que número desea realizar la piramide (no mayor de 50)"));
    } else {
        break;
    }
}

for(let i = 1; i <= numero; i++){
    for(let j = 1; j <= i; j++){
        document.write(j);
    }
    document.write(`<br>`)
}
