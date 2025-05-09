// Somatório
// Escreva um programa que encontre a soma de todos os números de 1 a num (ambos inclusive). 
// O número será sempre um inteiro positivo maior que 0. Sua função precisa retornar apenas o resultado. 
// O que está entre parênteses no exemplo abaixo é como você chega a esse resultado, e não faz parte dele. Veja os testes de exemplo.

// Por exemplo (Entrada -> Saída) :

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {
    let result = 0;
    for(i=1; i <= num; i++) {
      result+=i;
    }  
    return result;
}

// let summation = (n) => n * (n + 1) / 2;

console.log(summation(1)) //  1
console.log(summation(2)) //  3
console.log(summation(8)) // 36