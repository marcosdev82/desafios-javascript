// Dado um conjunto de inteiros, sua solução deve encontrar o menor inteiro.

// Por exemplo:

// Dada [34, 15, 88, 2]a sua solução retornará2
// Dada [34, -345, -1, 100]a sua solução retornará-345
// Você pode assumir, para o propósito deste kata, que o array fornecido não estará vazio.

function findSmallestInt(arr) {
   return arr.sort((a, b) => a - b)[0]
}

// Feita por terceiros
// function findSmallestInt(arr) {
  
//   return Math.min(...arr);
// }

console.log(findSmallestInt([78,56,232,12,8])) // 8 
console.log(findSmallestInt([78,56,232,12,18])) //12 
console.log(findSmallestInt([78,56,232,412,228])) // 56 
console.log(findSmallestInt([78,56,232,12,0])) // 0 
console.log(findSmallestInt([1,56,232,12,8])) // 1 

// exemplo do teste
console.log(findSmallestInt([34, -345, -1, 100])) // 2
