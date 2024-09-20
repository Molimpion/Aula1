const prompt =  require("prompt-sync")();
console.log('Olá, me chamo nano! uma tecnologia feita para ajudar em algumas atividades? antes de tudo gostaria de te conhecer um pouco!');
//Questão1
console.log('como você se chama?');
const nome = prompt("");
const idade = parseInt(prompt("qual sua idade?"));
console.log(`Olá, ${nome} então você tem ${idade} anos`);
//Questão2
console.log('me fale mais sobre você! de onde você é?');
let cidade = prompt("");
console.log(`Então voce mora na cidade de ${cidade}! Sinto que estou começando a te conhecer melhor!`);
//Questão3
console.log('Uma de minhas funções é ajudar com cálculos matemáticos! vou te mostrar algumas dessas funções!');
let num1 = parseInt(prompt('digite um numero inteiro:'));
let num2 = parseInt(prompt('digite outro numero inteiro:'));
const soma = num1+num2;
const subi = num1-num2;
const multi =(num1*num2);
const divi = (num1/num2);
console.log(`Somando os numeros : ${num1} e ${num2} temos o número ${soma}`);
console.log(`Subtraindo os numeros : ${num1} e ${num2} temos o número ${subi}`);
console.log(`Multiplicando os numeros : ${num1} e ${num2} temos o número ${multi}`);
console.log(`Dividindo os numeros : ${num1} e ${num2} temos o número ${divi}`);
//Questão4
console.log("tambem sou boa em cálculos geometricos! vamos descobrir a área de um triangulo juntos.");
let base = parseInt(prompt("digite um valor para a base de um triangulo:"));
let altura = parseInt(prompt("digite um valor para a altura do triangulo:"));
const area = ((base*altura)/2).toFixed(2)
console.log(`A área do Triangulo é : ${area}, (com base ${base} e altura ${altura})`);
//Questão5
console.log("agora que tal descobrimos a media de notas de um aluno hipotético?");
let nota1 = parseInt(prompt("insira a nota 1:"));
let nota2 = parseInt(prompt("insira a nota 2:"));
let nota3 = parseInt(prompt("insira a nota 3:"));
let media = ((nota1+nota2+nota3)/3).toFixed();
console.log(media);
//Questão6
console.log("Tambem sou otima em calculos de desconto!");
let produto = parseInt(prompt("me de o valor de um produto:"));
let desconto = parseInt(prompt("agora diga o desconto que esse produro ira receber:"));
let porcentagem = desconto/100; 
const proddescont = produto * porcentagem;
console.log(`O valor do desconto é R$${proddescont} e o valor final do produto é R$${produto-proddescont}`);
//Questão7
const salario = prompt('Me diga o valor do seu salário: ');
let IR = 0;
if (salario <= 2259.21){
    console.log('Você está isento de impostos');
}
else if (salario > 2260.00 &&salario < 2830.00){
    IR = (salario*0.075)
    console.log('Você deve ${IR} de imposto')
}
else if (salario > 2831.00 &&salario < 3752.00){
    IR = (salario*0.15)
    console.log('Você deve ${IR} de imposto')
}
else if (salario > 3753.00 &&salario < 4665.00){
    IR = (salario*0.225)
    console.log('Você deve ${IR} de imposto')
}
else if (salario => 4666.00){
    IR = (salario*0.275)
    console.log('Você deve ${IR} de imposto')
}
//Questão8
console.log("olha outra coisa muito util e legal! Tenho uma função de converter moedas!")
let valorDolar = parseInt(prompt("Digite o valor em dólar : "));
let cotacao = 5.25;
let valorReal = (valorDolar * cotacao).toFixed(2);
console.log(`O valor em dólar é $${valorDolar} e convertendo para real temos R$${valorReal}`);
//Questão9
console.log("sou integrada com uma tecnologia que consegue converter os graus celsius para Fahrenheit");
let celsius = parseInt(prompt("digite o valor da temperatura em graus celsius:"));
let fahrenheit = ((celsius * 9/5) + 32);
console.log(`O valor da temperatura em fahrenheit é de ${fahrenheit}`);
//Questão10
console.log('Minha ultima função é a de calcular seu IMC! Vamos em frente')
let kg = parseInt(prompt('digite seu peso:'));
let altura2 = parseInt(prompt('digite sua altura2:'));
let imc = (kg/(altura2*altura2)).toFixed(2);
console.log(`O seu IMC é ${imc}`);
