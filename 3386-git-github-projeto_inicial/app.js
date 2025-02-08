alert('Seja bem vindo ao nosso site :D');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 0 e 10');


if (chute == numeroSecreto){
    alert(`'Isso aí! Você descobriu o número secreto ${numeroSecreto}.`);
} else {
    if(numeroSecreto > chute) {
        alert(`o número secreto é maior que ${chute}`);
    } else {
        alert(`o número secreto é menor que ${chute}`);
        }
}










