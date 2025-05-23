// Crie uma função com dois argumentos que retornará uma matriz dos primeiros nmúltiplos de x.

// Suponha que tanto o número fornecido quanto o número de vezes a serem contados serão números positivos maiores que 0.

// Retorna os resultados como uma matriz ou lista (dependendo do idioma).

// Exemplos
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(i * x)
    }  
    return z;
}

// OUTRA FORMA

function countBy(x, n) {
  return Array.from({length:n}, (_,i) => x * (i + 1));
}

console.log(countBy(1,10))
console.log(countBy(2,5))