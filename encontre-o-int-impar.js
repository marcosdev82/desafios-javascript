// Dado um conjunto de números inteiros, encontre aquele que aparece um número ímpar de vezes.

// Sempre haverá apenas um número inteiro que aparece um número ímpar de vezes.

// Exemplos
// [7]deve retornar 7, porque ocorre 1 vez (o que é ímpar).
// [0]deve retornar 0, porque ocorre 1 vez (o que é ímpar).
// [1,1,2]deve retornar 2, porque ocorre 1 vez (o que é ímpar).
// [0,1,0,1,0]deve retornar 0, porque ocorre 3 vezes (o que é ímpar).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]deve retornar 4, porque aparece 1 vez (o que é ímpar).

// function findOdd(arr) {
//   const contagem = {};

//   for (let num of arr) {
//     contagem[num] = (contagem[num] || 0) + 1;
//   }

//   for (let num in contagem) {
//     if (contagem[num] % 2 !== 0) {
//       return Number(num);
//     }
//   }
// }

// // outra formas 
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// // outra formas 
// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

function findOdd(arr){
  return arr.find((item, index) => {
    arr.filter((num) => {
      return (num === item).length % 2
    })
  })
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))