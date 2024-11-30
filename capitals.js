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
  
  console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
  