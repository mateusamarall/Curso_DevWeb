//string
var nome = "mateus";
//int
var idade = 18;
//float
var altura = 1.75;
//booleans
var sexo_masculino = true;
var sexo_feminino = false;
//lista
var lista = [nome, idade, altura, sexo_masculino, sexo_feminino];
//objetos
var objAluno = {
  nome: lista[0],
  idade: lista[1],
  sexo_masculino: lista[3],
};
console.log(objAluno.nome);

//operadores matemáticos
var x = 10;
var y = 5;
var soma = x + y;
var subtracao = x - y;
var mult = x * y;
var divisao = x / y;
var resto = x % y;

console.log("resultado soma: ", soma);
console.log("resultado subtração: ", subtracao);
console.log("resultado multiplicação: ", mult);
console.log("resultado divisão: ", divisao);
console.log("resultado resto: ", resto);
console.log("resultado: ", x);

//funções
function calcularResto(num1, num2) {
  return num1 % num2;
}
console.log(calcularResto(50, 5));

function somaTres(a, b, c) {
  return a + b + c;
}
function divide(a, b) {
  return a / b;
}
var result = 2;
result *= somaTres(1, 5, 3);
console.log(divide(result, 3));
