function verificar() {
let idade = document.getElementById("idade").value
let texto = document.getElementById("texto")

if (idade >= 18){
    texto.innerHTML = `Você tem %{idade} e é maior de idade`
} else {
    texto.innerHTML = `Você tem %{idade} e é menor de idade`
}
}