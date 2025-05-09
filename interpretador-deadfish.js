// A função parse(program) interpreta uma string de comandos e executa uma sequência de operações sobre uma variável value, retornando os resultados acumulados em um array output. Aqui está o que cada comando faz:

// 'i': incrementa value em 1.

// 'd': decrementa value em 1.

// 's': eleva value ao quadrado (value = value * value).

// 'o': adiciona o valor atual de value ao array output.

// Qualquer outro caractere é ignorado.

function parse(program) {
    let value = 0; 
    const output = []; 
  
    for (let command of program) {
      switch (command) {
        case 'i':
          value++; 
          break;
        case 'd':
          value--;
          break;
        case 's':
          value *= value;
          break;
        case 'o':
          output.push(value);
          break;
      }
    }
  
    return output;
  }
  console.log(parse("iiisxxxdoso"))
  