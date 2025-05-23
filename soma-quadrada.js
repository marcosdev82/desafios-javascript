
// Complete a função de soma quadrada para que ela eleve ao quadrado cada número passado a ela e então some os resultados.

function squareSum(numbers){
    return numbers.reduce((acc, curr) => (curr * curr) + acc , 0);
}

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]));