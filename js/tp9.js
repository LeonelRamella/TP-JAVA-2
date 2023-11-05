let numero = 1;
// si pongo que el numero vale 0, me aparece que es Múltiplo de 4
while(numero <= 500){
    document.write(numero);
    if(numero % 4 === 0){
        document.write(` (Múltiplo de 4)`)
    } else if(numero % 9 === 0){
        document.write(` (Múltiplo de 9)`)
    }
    if(numero % 5 == 0 ){
        document.write(`<br>`);
        document.write(`--------------------`);
    }

    document.write(`<br>`);
    numero++;
}