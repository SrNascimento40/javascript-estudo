console.log("Olá mundo");



//comentário

/*
muitos comentários
muitos
muitos mesmo
*/
    
let numero = 123;
//atribui valor e é usado em escopo de bloco

const nome = "Cesar"
//apenas para leitura inalteravel

var variavel = true
//atribui valor, mas não é tão usado

//variavel não pode comecar com numero

//_ e $ bibliotecas e frameworks

//tipos de dados

//number
const numbero = 123
//string
var fiote = 'fala ' + "fiote!"
let conta = `${fiote} Sua conta ficou R$ ${57*12-11/2-(10*1.2)}`
console.log(conta);
//boolean
let verdade = true
const mentira = false
let comparacao = 1 =="1"
let comparacao2 = 1 ==="1"
//array
let vetor = [];
let teste = [1, 2, 3];
console.log(teste[2]);
teste[0] = 9000;
//null e undefinied
y = null
let x;
console.log(x);
//symbol
//não
//object = dado composto por outros tipos
let carro = {
    rodas: 4,
    portas: 2,
    nome: 'mercedes',
    vendendo: true
}
carro.portas = 4;
console.log(carro.portas);
carro["portas"] = 3
console.log(carro.portas);


//function => operações que serão executadas

function funcao(a, b) {
    console.log("Olá mundo");
    return resultado = a * b;
    console.log("depois do return, nada executa");
}
funcao(7,6)


//operadores
/*

+ mais
- menos
/ dividir
* multiplicar
double = ponto flutuante, 2 casas dps da virgula

== valor igual
===valor e tipo igual
!= diferente
!== valor e tipo diferente
<, <= menor e menor ou igual
>, => maior e maior ou igual
&& e (true se todos forem verdadeiro)
|| ou (retorna true se pelo menos 1 for falso)
! inverte o booleano (!true (retorna falso))
*/

function revisao(valor1, valor2, valor3){

    let outroValor = valor1 + 2;

    let maisUm = valor2 + valor3;



    let vetor = [valor3, valor1, maisUm, valor2, outroValor];



    console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);

}



revisao(2, "5", "zero");

//condicionais e escopo
