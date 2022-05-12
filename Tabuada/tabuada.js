/**
 * Js - Aula 7 - Tabuada
 * @author Fábio Eloy Passos
 */

var n;

var n = prompt("Digite um número: ");
document.write("           <h1>Tabuada do " + n +"</h1>" );
for (i = 0; i < 11; i++) {

    document.write(n + " x " + i + " = " + i * n + "<br>");

}