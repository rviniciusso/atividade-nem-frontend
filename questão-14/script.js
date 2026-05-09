let contador = 0
let display = document.getElementById("display");

function clearDisplay() {
    contador = 0
    atualizarTela()
}

function somar() {
    contador += 1
    atualizarTela()
}

function subtrair() {
    contador = contador - 1
    atualizarTela()
}

function atualizarTela() {
    display.innerHTML = contador
}