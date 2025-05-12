// Crie uma função que responda à pergunta: "Você toca banjo?".
// Se o seu nome começa com a letra "R" ou "r" minúsculo, você toca banjo!

// A função recebe um nome como seu único argumento e retorna uma das seguintes strings:


// feita por mim
function areYouPlayingBanjo(name) {
    let str = name.substr(0, 1)

    if(str.toLowerCase() === "r"){
        return name + " plays banjo" 
    }  
    return name + " does not play banjo"
}

// Feita pelo copilot
function areYouPlayIngBanjo(name) {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));