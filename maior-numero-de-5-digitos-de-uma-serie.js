// Maior número de 5 dígitos de uma série

// No seguinte número de 6 dígitos:  283910

// 91 é a maior sequência de 2 dígitos consecutivos.

// No seguinte número de 10 dígitos: 1234567890

// 67890 é a maior sequência de 5 dígitos consecutivos.

// Complete a solução de modo que retorne a maior sequência de cinco dígitos consecutivos encontrada no número fornecido. 
// O número será passado como uma sequência de apenas dígitos. Deve retornar um número inteiro de cinco dígitos. O número passado pode ter até 1000 dígitos.

// Adaptado de ProjectEuler.net
function solution(digits) {
    let maxNumber = 0;
    
    // Percorra a string e extraia cada sequência de 5 dígitos consecutivos
    for (let i = 0; i <= digits.length - 5; i++) {
        // Pegue a sequência atual de 5 dígitos
        const currentNumber = parseInt(digits.substr(i, 5), 10);
        
        // Atualize o maior número, se necessário
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }
    
    return maxNumber;
}
console.log(solution('1234567898765'))