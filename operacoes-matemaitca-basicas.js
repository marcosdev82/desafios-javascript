// Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.

// A função deve receber três argumentos — operação (string/caractere), valor1 (número), valor2 (número).
// A função deve retornar o resultado da operação escolhida aplicada aos dois números.

// Exemplos (Operador, valor1, valor2) → resultado

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


function basicOp(operation, value1, value2){

    switch(operation){
    //Code
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;  
    }
  }

console.log(basicOp("+", 4, 7)) // 11, "4 + 7 = 11"
console.log(basicOp("-", 15, 18)) // -3, "15 - 18 = -3"
console.log(basicOp("*", 5, 5)) // 25, "5 * 5 = 25"
console.log(basicOp("/", 49, 7)) // 7, "49 / 7 = 7"