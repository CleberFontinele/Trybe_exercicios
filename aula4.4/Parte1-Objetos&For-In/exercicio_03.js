//Faça um for/in que mostre todas as chaves do objeto.

//VALOR ESPERADO NO CONSOLE:
/*
personagem
origem
nota
recorrente
*/

let info = {
    personagem: ": Margarida",
    origem: ": Pato Donald",
    nota: ": Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: ": Sim"
};

for (let i in info){
    console.log(i);
}