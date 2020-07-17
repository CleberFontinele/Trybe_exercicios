// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

let palavra = "arara";
let palindromo = "";
function Palindromo(palavra) {
    for (let index = palavra.length - 1; index >= 0; index--) {
        palindromo += palavra[index]
    }

    if (palavra === palindromo) {
        console.log(true);
    } else {
        console.log(false);
    }
}
Palindromo(palavra);