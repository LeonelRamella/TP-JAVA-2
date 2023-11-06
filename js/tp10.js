let filas = parseInt(prompt("Ingrese la cantidad de filas"));
let columnas = parseInt(prompt("Ingrese la cantidad de columnas"));
let celdasTotales = filas * columnas;

document.write("<table><tbody>");
for(let arranqueFilas = 0; arranqueFilas < filas; arranqueFilas++){
    document.write("<tr>");
    for(let arranqueColumnas = 0; arranqueColumnas < columnas; arranqueColumnas++){
        document.write("<td>" +celdasTotales + "</td>");
        celdasTotales--;
    }
    document.write("</tr>");
}
document.write("</tbody></table>");