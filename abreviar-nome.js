// Escreva uma função para converter um nome em iniciais. Este kata aceita, estritamente, duas palavras com um espaço entre elas.

// A saída deve ser duas letras maiúsculas com um ponto separando-as.

// Deveria ficar assim:

// Sam Harris=>S.H

// patrick feeney=>P.F

// function abbrevName(name){
//   let  nomes = name.split(' ')
//   return `${nomes[0][0].toUpperCase()}.${nomes[1][0].toUpperCase()}` 
// }

// // forma simplificada
// const abbrevName = name =>
//   name
//     .split(' ')
//     .map(n => n[0].toUpperCase())
//     .join('.');

// saídas:

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feenan"));
// console.log(abbrevName("Evan Cole"));
// console.log(abbrevName("P Favuzzi"));
// console.log(abbrevName("David Mendieta"));

const abbrevName  = (nome) => {
    return  nome.split(' ').map((p) => p[0].toUpperCase()).join('.')
} 

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));