function nomeDaFuncao(parametros) {
    console.log("ola, javascript");
}

nomeDaFuncao();

function somar(a, b) {
    return a + b;
}
console.log("Soma: ", somar(5, 3));

function saudacaoNome(nome) {
    console.log("Olá, " + nome);
} 
saudacaoNome("Carlos");

function imc(peso, h) {
    return peso / (h ** 2);
}
console.log("O IMC é: ", imc(70, 1.75));

function par(n) {
    return n%2;
}
let numero = 54;
if (par(numero) === 0) {
    console.log("O número",numero,"é par");
}
else {
    console.log("O número",numero,"é ímpar");
}

console.log("******************* Função Nativas *******************");

let agora = new Date();
console.log(agora);
function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
}
mostrarDataHora();

function data() {
    let dataAtual = new Date();

    console.log(dataAtual.getHours()+":"+dataAtual.getMinutes()+":"+dataAtual.getSeconds(), dataAtual.getDate()+"/"+dataAtual.getMonth()+1+"/"+dataAtual.getFullYear());
}

data()

console.log("funções matematicas");
console.log(Math.PI);

function calcularoperacao(numeros) {
    console.log("raiz quadrada: ", Math.sqrt(numeros));
    console.log("arredondamento: ", Math.round(numeros));
    console.log("Para cima: ", Math.ceil(numeros));
    console.log("Para baixo: ", Math.floor(numeros));
    console.log("Valor absoluto: ", Math.abs(numeros));
    console.log("quadrado: ", Math.pow(numeros, 2));
}
calcularoperacao(7.8);

function analisarTexto(texto) {
    console.log("Tamanho do texto: ", texto.length);
    console.log("Texto em maiúsculas: ", texto.toUpperCase());
    console.log("Texto em minúsculas: ", texto.toLowerCase());
    console.log("Primeira letra: ", texto.charAt(0));
    console.log("Última letra: ", texto.charAt(texto.length - 1));
}
analisarTexto("javascript");

function oQueFazEssaFuncao(frase) {
    console.log(frase.includes("javascript"));
}
oQueFazEssaFuncao("Eu amo javascript");

function eEssaAqui(nome, curso) {
    return"Aluno: " + nome + ",| Curso: " + curso;
}
console.log(eEssaAqui("Carlos", "JavaScript"));