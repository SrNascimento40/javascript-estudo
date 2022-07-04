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
let carron = {
    rodas: 4,
    portas: 2,
    nome: 'mercedes',
    vendendo: true
}
carron.portas = 4;
console.log(carron.portas);
carron["portas"] = 3
console.log(carron.portas);


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

//if só executa quando a condição for verdadeira
//else if executa quando a condição anterior for falsa mas a imposta nesse caso for verdadeira
//else executa quando a condição for falsa
const numeroMenor = 7;
//definido global
var numeroMaior = 354;
if (numeroMenor == numeroMaior) {
    console.log("Ambos números são iguais");
} else if ( numeroMenor > numeroMaior) {
    console.log(`${numeroMenor} é maior que ${numeroMaior}`);
} else {
    console.log(`${numeroMaior} é maior que ${numeroMenor}`);
    let banana = "fruit"
    //definida dentro do escopo de if else
    var numeroMaior = 30144;

     
}
try {
    console.log(banana);
} catch { console.log("Como a variavel só existe dentro do escopo, ela não retorna nada fora dele");}
//como foi definida dentro do escopo, fora dele a propriedade banana não foi definida
console.log(numeroMaior);

//switch
//alternativa ao if else

switch (numeroMaior) {
    case 15:
        //case = "caso esta seja a verdade"
        console.log("O número é 15");
        break;
        //break quebra

    case 30144:
        console.log("O número é 30144");
        break;
    
    default:
        //se todos cases forem falsos, default vai ser rodado
        console.log("Eu não sei qual o número");
        break;
}


//exercicio de condicional
// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;   
                return "Alteracao concluida"; 
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            if(novoValor > 0){
                carro.portas = novoValor; 
                return "Alteracao concluida";   
            }
            else{
                return "Minimo de portas precisa ser 1";
            }
            break;
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
        case "cor":
            if(novoValor == "cinza"){
                carro.cor = novoValor;   
                return "Alteracao concluida"; 
            }
            else if(novoValor == "preto"){
                carro.cor = novoValor;   
                return "Alteracao concluida"; 
            }
            else if(novoValor == "vermelho"){
                carro.cor = novoValor;
                return "Alteracao concluida";
                
            }
            else{
                return "Cor invalida";
            }
            break;
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
        
        case "ano":
            carro.ano = novoValor;
            if(novoValor == 2019){
                carro.estado = "novo";    
                return "Alteracao concluida";
            }
            else{
                carro.estado = "usado";    
                return "Alteracao concluida";
            }
            break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        default:
            return "Propriedade invalida";
            // retornar a fraase "Propriedade invalida";
    }
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
}

//**** LOOPS ****//

//for

for (let i=0; i<10; i++){
    // i é designado para falar quantas vezes vai repetir e para usar no loop
    //i<10 impõe uma quantidade maxima de repetições no loop
    // 1++ faz o i aumentar 1 a cada repetição, para que ele repita aumentando até atingir o limite imposto
    console.log(i);
}

//for of
// loop para iterar elementos de uma lista

let dias = ["segunda", "terca", "quarta", "quinta", "sexta"]

for (let dia of dias) {
    console.log(dia);
}
//permite trabalhar com item por item

//while
//quando uma condição for verdadeira ele vai continuar executando
var numbe = 0
while (numbe < 10) {
    var numbe = numbe + 1
    console.log(numbe);
}

//se não definir uma forma do loop acabar ele será infinito

//do while
//executa e testa

let namero = 1

do {
    console.log(namero);
    namero++;
}
while (namero<5);
//mesma coisa, só usa o que ficar mais fácil de entender

while (1<6) {
    console.log("infinito");
    break
}

for (let dia of dias) {
    if (dia=="quinta") {
        continue
        //esse continue faz o loop pular o resto e ir direto pra próxima repetição
    }
    console.log(dia);
}



function calcularVetor(vetor, numeron){
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 5) {
            vetor[i]=vetor[i]*numeron;
        }
    }
    console.log(vetor);
    return vetor;//Seu código aqui
}
    
calcularVetor([1,2,10], 2);
