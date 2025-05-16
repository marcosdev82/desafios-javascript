// Descrição:
// Nesta tarefa simples, você recebe um número e precisa torná-lo negativo. Mas talvez o número já seja negativo?

// Exemplos
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notas
// O número já pode ser negativo, caso em que nenhuma alteração é necessária.
// Zero (0) não é verificado para nenhum sinal específico. Zeros negativos não fazem sentido matemático.

// forma errada
function makeNegative(num) {
    return  -Math.abs(num);
}

// forma simplificada
function makeNegative(num) {
    return num > 0 ? -num : num;
}

console.log(makeNegative(0))
console.log(makeNegative(2))
console.log(makeNegative(-2))