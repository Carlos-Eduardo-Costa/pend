console.log("ola, javascript");

let a=10;
let b=3;
console.log( "adição: " , a+b);
console.log(" subtração: " , a-b);
console.log( "multiplicação: " , a*b);
console.log(" divisão: " , a/b);
console.log(" resto da divisão: " , a%b);

let contador=5;
contador++;
console.log(contador);

let c= 10;
let d= 7;
let e=14;

console.log((c + d + e) / 3);
console.log(e % c);

let x= 10;
let y= '10';

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

let idade=20;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}   
let numero1=4;
let numero2=8;
if (numero1 > numero2) {
    console.log("Número 1 é maior");
} else if (numero1 < numero2) {
    console.log("Número 2 é maior");
}
else {
    console.log("Números são iguais");
}

let idade2 = 20;
let temCarteiraDeMotorista = true;

console.log(idade >= 18 && temCarteiraDeMotorista);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado);//true

let frequencia= 73;
let nota= 8;
console.log(frequencia >= 75 && nota >= 7);

let senha= "senha123";
let token= true;

if (senha === "senha123" || token === true) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}