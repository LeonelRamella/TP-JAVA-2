const edad = parseInt(prompt("Indique su edad:"))
if(edad>=18){
    document.write("tiene edad para conducir")
}
else if(edad < 18){
    document.write("no tienes edad para conducir")
}
else{
    document.write("Tiene que ingresar numeros")
}