//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, 
//em seguida, imprima o objeto no console.

//VALOR ESPERADO NO CONSOLE:
/*
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  */

let info = {
    personagem: ": Margarida",
    origem: ": Pato Donald",
    nota: ": Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: ": Sim"
};

for (let i in info) {
    console.log(i, info[i])
}