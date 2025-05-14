// Este kata consiste em multiplicar um número dado por oito se for par e por nove caso contrário.

function simpleMultiplication(number) {
  
  if(number % 2 == 0) {
    return number * 8
  } else {
    return number * 9
  }
  
}

// forma simplificada
function simpleMultiplication(n) {
    return number * (number % 2 ? 9 : 8);
}

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(5))
