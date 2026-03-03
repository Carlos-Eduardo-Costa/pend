let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let texto = document.querySelector("#texto");

botao1.addEventListener("click", function() {
    texto.style.color = "blue";
});

botao2.addEventListener("click", function() {
    texto.style.color = "red";
});