//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:

let n = 7;
let asteristico = "*";
let linha = 0;
let coluna = 0;
let frase = "";
let espaço = " ";
let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let posição = n;

for (let linha = meio; linha <= n; linha += 1) {
    for (coluna = 1; coluna <= n; coluna += 1) {
        if (coluna === ladoEsquerdo || coluna === ladoDireito) {
            frase += asteristico;
        } else {
            frase += espaço;
        }
    }
    if (linha === n) {
        frase = "";
        for (let cont = 1; cont <= n; cont += 1) {
            frase += asteristico;
        }
    }
    console.log(frase);
    frase = "";
    ladoEsquerdo += 1;
    ladoDireito -= 1;
}