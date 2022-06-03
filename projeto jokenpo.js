const prompt = require ("prompt-sync")(); 
console.clear(); 


console.log(" JOGO JOKENPÔ ");
console.log();
console.log();
console.log();
let iniciar = prompt("Deseja jogar? ").toLowerCase();

if (iniciar != "sim"){
    console.clear();
    console.log("Jogo encerrado!");
}Jogo: while (iniciar == "sim"){
console.clear();
let vezesjogadas = +prompt("Quantas vezes deseja jogar? "); 
console.log();
console.log();

let empate = [];
let vitoria = [];
let derrota = [];

if (vezesjogadas > 0){
        
for (i = 0; i < vezesjogadas; i++ ) {
    var pergunta = prompt(`Escolha entre: "PEDRA", "PAPEL" e "TESOURA": `).toLowerCase();
    let aleatorio = Math.floor(Math.random() * 3);
    var resposta = aleatorio + 0

    if (pergunta == "pedra"){
        
        if (resposta == 0) {
            console.log();
            console.log (`PEDRA ------ EMPATE!`);
            console.log();
            empate.push(pergunta)
        } else if (resposta == 1){
           console.log();
           console.log (`PAPEL ------ VOCÊ PERDEU!`);
           console.log();
           derrota.push(pergunta) 
        } else {
            console.log();
            console.log (`TESOURA ------ VOCÊ GANHOU!`);
            console.log();
            vitoria.push(pergunta)
        }

    } if (pergunta == "papel"){
        if (resposta == 0) {
            console.log();
            console.log (`PEDRA ------ VOCÊ GANHOU!`);
            console.log();
            vitoria.push(pergunta)
        } else if (resposta == 1){
           console.log();
           console.log (`PAPEL ------ EMPATE!`);
           console.log(); 
           empate.push(pergunta)
        } else {
            console.log();
            console.log (`TESOURA ------ VOCÊ PERDEU!`);
            console.log();
            derrota.push(pergunta)
        }
    } if (pergunta == "tesoura"){
        if (resposta == 0) {
            console.log();
            console.log (`PEDRA ------ VOCÊ PERDEU!`);
            console.log();
            derrota.push(pergunta)
        } else if (resposta == 1){
           console.log();
           console.log (`PAPEL ------ VOCÊ GANHOU!`);
           console.log();
           vitoria.push(pergunta)
        } else {
            console.log();
            console.log (`TESOURA ------ EMPATE!`);
            console.log();
            empate.push(pergunta)
        }

    }
}
}
else {
    console.clear();
    console.log ("Jogo encerrado!")
}

if (vezesjogadas > 0){
console.log ();
console.log ();
console.log (`--------------PLACAR--------------
você ganhou ${vitoria.length} vez(es)
você empatou ${empate.length} vez(es)
você perdeu ${derrota.length} vez(es)`);
console.log ();
console.log ();
console.log ();

var jogarnovamente = prompt("Deseja jogar novamente? ").toLowerCase();
if (jogarnovamente != "sim"){
    console.clear();
    console.log("Jogo encerrado!")
    break
    };
}
}


        








