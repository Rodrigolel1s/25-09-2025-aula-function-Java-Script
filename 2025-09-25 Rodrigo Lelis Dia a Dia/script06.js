// Escopo de variavel

// Escopo Global

let nome = "joão";
function imprimiNome() {
    console.log(nome);
}
imprimiNome(); // joão

// Escopo local
function imprimiOutroNome() {
    let nome2 = "Maria";
    console.log(nome);
}

imprimiOutroNome(); // Maria
//console.log("Escopo local: " + nome2); 

// Escopo de bloco
if (true) {
    let nome3 = "Pedro";
    console.log(nome3);
} // pedro
// console.log("Escopo de bloco: " + nome3);
