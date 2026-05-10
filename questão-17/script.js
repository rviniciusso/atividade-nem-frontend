function calcularMedia() {
    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const divResultado = document.getElementById('resultado');
    const displayMedia = document.getElementById('texto-media');
    const displayStatus = document.getElementById('texto-status');

    const n1 = parseFloat(inputNota1.value);
    const n2 = parseFloat(inputNota2.value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, preencha as duas notas.");
        return;
    }

    const media = (n1 + n2) / 2;

    displayMedia.innerHTML = `Média: <strong>${media.toFixed(1)}</strong>`;

    if (media >= 7) {
        displayStatus.innerHTML = "Situação: APROVADO!";
        displayStatus.className = "aprovado";
    } else {
        displayStatus.innerHTML = "Situação: REPROVADO.";
        displayStatus.className = "reprovado";
    }

    divResultado.classList.remove('hidden');
}