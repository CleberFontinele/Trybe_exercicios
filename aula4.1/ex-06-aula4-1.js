//EXERCICIO 6
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto 
// com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let pecaDeXadrez = "cavalo"
switch (pecaDeXadrez.toLowerCase()){
    case "rei":
        console.log("Rei -> uma casa frente");
        break;
    case "peao":
        console.log("Peao -> uma casa lado esquerdo");
        break;
    case "rainha":
        console.log("Rainha -> duas casas frente");
        break;
    case "bispo":
        console.log("Bispo -> duas casa lado direito");
        break;
    case "cavalo":
        console.log("Cavalo -> 'L' tres casas frente duas lado esquerdo");
        break;
    default:
        console.log("Erro, peça invalida");
        break;
    }
