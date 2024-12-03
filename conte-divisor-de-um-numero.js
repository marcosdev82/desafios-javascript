// Conte os divisores de um número

// Conte o número de divisores de um inteiro positivo n.

// Os testes aleatórios vão até n = 500.000, mas os testes fixos vão mais alto.

// Exemplos (entrada -> saída)
// 4 --> 3 // temos 3 divisores - 1, 2 e 4
// 5 --> 2 // temos 2 divisores - 1 e 5
// 12 --> 6 // temos 6 divisores - 1, 2, 3, 4, 6 e 12
// 30 --> 8 // temos 8 divisores - 1, 2, 3, 5, 6, 10, 15 e 30

function getDivisorsCnt(n) {
    let count = 0;

    // Verificar divisores de 1 até a raiz quadrada de n
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count += 1; // Contar o divisor `i`

            if (i !== n / i) {
                count += 1; // Contar o divisor correspondente `n / i` (se for diferente)
            }
        }
    }

    return count;
}

console.log(getDivisorsCnt(1));  // 1
console.log(getDivisorsCnt(4));  // 3
console.log(getDivisorsCnt(5));  // 2
console.log(getDivisorsCnt(12)); // 6
console.log(getDivisorsCnt(30)); // 8
