// Categorizar Novo Membro

// O Western Suburbs Croquet Club tem duas categorias de membros: Sênior e Aberto. Eles gostariam da sua ajuda com um formulário de inscrição que informará aos possíveis membros em qual categoria eles serão classificados.

// Para ser sênior, o membro deve ter pelo menos 55 anos e ter um handicap maior que 7. Neste clube de croquet, os handicaps variam de -2 a +26; quanto melhor o jogador, menor o handicap.

// Entrada
// A entrada consistirá em uma lista de pares. Cada par contém informações sobre um único membro em potencial. As informações consistem em um número inteiro para a idade da pessoa e um número inteiro para a deficiência da pessoa.

// Saída
// A saída consistirá em uma lista de valores de string (em Haskell e C: Openou Senior) informando se o respectivo membro deve ser colocado na categoria sênior ou aberta.

// Exemplo
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

let input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function openOrSenior(data){
  let result = []
  for (value in data){
    if (data[value][0] >= 55 && data[value][1] >= 7){
       result.push("Senior")
    }  else {
        result.push("Open")
    }      
  }
  return result;
}

// Melhor prática: usar for...of com destructuring para tornar mais legível:

function openOrSenior(data){
  let result = []
  for (const [age, handicap] of data){
    result.push(age >= 55 && handicap >= 7 ? "Senior" : "Open")
  }
  return result
}


console.log( openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) // ['Open', 'Senior', 'Open', 'Senior']
console.log( openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])) // ['Open', 'Open', 'Open', 'Open']
console.log( openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])) // ['Senior', 'Open', 'Open', 'Open']