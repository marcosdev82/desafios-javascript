// ; Descrição:
// ; Escreva uma função que receba um array de números e retorne a soma deles. Os números podem ser negativos ou não inteiros. Se o array não contiver nenhum número, você deverá retornar 0.

// ; Exemplos
// ; Entrada: [1, 5.2, 4, 0, -1]
// ; Saída:9.2

// ; Entrada: []
// ; Saída:0

// ; Entrada: [-2.398]
// ; Saída:-2.398

// ; Suposições
// ; Você pode assumir que só lhe são fornecidos números.
// ; Você não pode presumir o tamanho do array.
// ; Você pode assumir que obtém um array e, se o array estiver vazio, retorna 0.
// ; O que estamos testando
// ; Estamos testando loops básicos e operações matemáticas. Este tutorial é para iniciantes que estão aprendendo loops e operações matemáticas.
// ; Usuários avançados podem achar isso extremamente fácil e podem escrever facilmente em uma linha.



function sum (numbers) {
  let somaArr = 0
  for (let value of numbers) {
      somaArr = somaArr + value
  }
    return somaArr
}

// simplificado
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum([1, 5.2, 4, 0, -1])