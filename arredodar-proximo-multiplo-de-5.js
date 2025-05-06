// Arredonde para o próximo múltiplo de 5
// Dado um número inteiro como entrada, você pode arredondá-lo para o próximo múltiplo de 5 (ou seja, "maior ou igual a")?

// Exemplos:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// A entrada pode ser qualquer número inteiro positivo ou negativo (incluindo 0).

// Você pode assumir que todas as entradas são números inteiros válidos.

// function roundToNext5(numero) {
//     if (numero > 0) {
//       return Math.ceil(numero / 5) * 5;
//     } else if (numero === 0) {
//         return 0;
//     } else {
//       const arredondado = Math.ceil(numero / 5) * 5;
//         return arredondado > 0 ? 0 : arredondado;
//     }
// }

// versão simplificada
function roundToNext5(numero) {
  return Math.ceil(numero / 5) * 5;
}
