// Pegue um número e some seus dígitos elevados às potências consecutivas e ....¡Eureka!!

// ### Tarefa  
// Precisamos de uma função para coletar esses números, que possa receber dois inteiros,  
// `a` e `b`, que definem o intervalo `[a, b]` (inclusive) e gerar uma lista dos números dentro do intervalo que atendem à propriedade descrita acima.  

// ### Exemplos  
// Vejamos alguns casos (entrada -> saída):  
// - `1, 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9]`  
// - `1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]`  

// Se não houver números desse tipo no intervalo `[a, b]`, a função deve retornar uma lista vazia.  

// - `90, 100 --> []`

function sumDigPow(a, b) {
    const result = [];
  
    for (let num = a; num <= b; num++) {
      const digits = String(num).split('').map(Number);
      const sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);
  
      if (sum === num) {
        result.push(num);
      }
    }
  
    return result;
  }
  