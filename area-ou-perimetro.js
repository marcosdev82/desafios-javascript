// Você recebe o comprimento e a largura de um polígono de 4 lados. O polígono pode ser um retângulo ou um quadrado.
// Se for um quadrado, retorne sua área.
// Se for um retângulo, retorne seu perímetro.

// Exemplo(Entrada1, Entrada2 --> Saída):

// 6, 10 --> 32
// 3, 3 --> 9
// Observação: para os fins deste kata, você deve assumir que é um quadrado se o comprimento e a largura forem iguais; caso contrário, é um retângulo.

const areaOrPerimeter = function(l, w) {
  return l === w ? l * w : 2 * (l + w);
}

console.log(areaOrPerimeter(3, 3))   // 9  → área do quadrado
console.log(areaOrPerimeter(6, 10))  // 32 → perímetro do retângulo
