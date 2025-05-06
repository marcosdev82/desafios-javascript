// Instruções
// Escreva uma função que receba uma única string não vazia composta apenas de letras ASCII maiúsculas e minúsculas (chamada word) como argumento. A função deve retornar uma lista ordenada contendo os índices de todas as letras maiúsculas na string.

// Exemplo (Entrada --> Saída)

var capitals = function (word) {
  return word.split('').reduce((indices, letter, index) => {
    if (letter === letter.toUpperCase()) {
      indices.push(index);
    }
    return indices;
  }, []);
};

// outra forma de fazer

var capitals = function (word) {
  let arr = []
  word.split('').forEach(function(value, indice){
    if (value === value.toUpperCase()) {
      arr.push(indice)
    }
  })
  return arr;
};
  
console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]