//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: indice 4.

let array = [2, 3, 6, 7, 10, 1];
let maiorIndic = 0;
let maiorNumero = 0;
function maiorIndice(array){
    for (let index = 0; index < array.length; index+= 1) {
       if (array[index] > maiorNumero){
        maiorNumero = array[index];
           maiorIndic = index;
       }
    }
    return maiorIndic;
}
console.log(maiorIndice(array));


