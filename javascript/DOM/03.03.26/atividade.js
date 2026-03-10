let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let texto = document.querySelector(".texto");

botao1.addEventListener("click", function() {
    texto.style.color = "blue";
});

botao2.addEventListener("click", function() {
    texto.style.color ="red";
});

//Atividade 2

let botao = document.querySelector("#mudar");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function() {
    mensagem.classList.toggle("esconder");
});

//Atividade 3

let text = document.querySelector("#text");
let resultado = document.querySelector("#resultado");

text.addEventListener("keyup", function() {
    resultado.textContent = text.value.length;
});

//Atividade 4

let clique = document.querySelector("#clique");
let contador = document.querySelector("#contador");

let numeroCliques = 0;

clique.addEventListener("click", function() {
    numeroCliques ++;
    contador.textContent = numeroCliques;
});

//Atividade 5
let click = document.querySelector("#clique5");
let lista = document.querySelector("#lista");
let texto5 = document.querySelector("#texto5");

click.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = texto5.value;
    lista.appendChild(item);
})

//Atividade 6
let clique6 = document.querySelector("#clique6");
let list = document.querySelector("#list");
let texto6 = document.querySelector("#texto6");

clique6.addEventListener("click", function () {
    let elemento = document.createElement("li");
    elemento.textContent = texto6.value;
    list.appendChild(elemento);
})

elemento.addEventListener("click", function () {
    list.removeChild(elemento);
})
