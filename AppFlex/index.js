/**
 * Js - Aula 5: Calculadora Flex
 * @author Fábio Eloy Passos
 * 
 */


var Etanol, Gasolina;

function calcular() {
    Etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    Gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));
    if (Etanol < 0.7 * Gasolina) {
        document.getElementById("status").src = "img/etanol.png"
    } else {
        document.getElementById("status").src = "img/gasolina.png"
    }

}

function resetar(){
    document.getElementById("status").src = "img/neutro.png"



}