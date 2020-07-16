//Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let asteristico = "*";
let linha = 0;
let coluna = 0;
let frase = " ";
let espaço = " ";
let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let posição = n;

for (let linha=meio; linha<=n; linha+=1) {
    for (coluna=1; coluna<=n; coluna+=1) {
        if (coluna<=ladoEsquerdo && coluna>=ladoDireito) {
            frase += asteristico;
        } else {
            frase += espaço;
        }
    }
    console.log(frase);
    frase = " ";
    ladoEsquerdo += 1;
    ladoDireito -= 1;
}