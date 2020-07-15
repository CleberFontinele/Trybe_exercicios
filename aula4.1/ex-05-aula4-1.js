//EXERCICIO 5
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let angulo1 = 80;
let angulo2 = 65;
let angulo3 = 60;
let soma = angulo1+angulo2+angulo3;

if (soma === 180){
    console.log(true);
}else{
    console.log(false);
}