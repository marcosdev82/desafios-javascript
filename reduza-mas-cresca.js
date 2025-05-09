// Dado um array não vazio de inteiros, retorne o resultado da multiplicação dos valores em ordem. Exemplo:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// forma otimizada
grow = x => x.reduce((prev,curr) => prev * curr)

// forma longa
function grow(x){
  let product = x[0];
  for (i=1; i<x.length; i++){
    product *= x[i];
  }
  return product
}

console.log(grow([1, 2, 3, 4, 10]))