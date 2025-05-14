// Escreva uma função que aceite um inteiro não negativo ne uma string scomo parâmetros e retorne uma string de vezes sexatas repetidas n.

// Exemplos (entrada -> saída)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let str = ''

  for(let i = 1; i <= n; i++){
     str = str + s    
  }

  return str;
}


console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
console.log(repeatStr(0, ""));
console.log(repeatStr(0, "I"));
console.log(repeatStr(5, ""));
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));