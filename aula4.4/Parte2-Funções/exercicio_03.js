//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor(array){
let menor = 0;
for (let index = 0; index < array.length; index+= 1) {
    if (array[menor] > array[index]){
     menor = index;
    }
}
return menor 
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));