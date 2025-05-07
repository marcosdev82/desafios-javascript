// Dado um conjunto de números inteiros.

// Retorna uma matriz, onde o primeiro elemento é a contagem de números positivos e o segundo elemento é a soma de números negativos. 0 não é positivo nem negativo.

// Se a entrada for uma matriz vazia ou nula, retorne uma matriz vazia.

// Exemplo
// Para entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], você deve retornar [10, -65].

// function countPositivesSumNegatives(input) {
//     let n1 = 0
//     let n2 = 0
//     for(value of input){
//         console.log(value)
//          if (value > 0) {
//            n1++;
//         } else if (value < 0) {
//            n2 += value;
//         }  
//     }
//     return [n1, n2];
// }

// CON O REDUCE
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) return [];

    return input.reduce(
        ([count, sum], val) => {
            if (val > 0) return [count + 1, sum];
            if (val < 0) return [count, sum + val];
            return [count, sum];
        },
        [0, 0]
    );
}


// EXEMPLOS 1
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// EXEMPLOS 2
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));