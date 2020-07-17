//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let asteristicos = 5;

for (let index = 0; index < asteristicos; index +=1){
    let linha = "";
    for (let coluna = 0; coluna < asteristicos; coluna +=1){
        linha = linha + "*";
    }
    console.log(linha);
}
