function parseDeadfish(program) {
    return program.split('').reduce(
      (acc, command) => {
        switch (command) {
          case 'i':
            acc.value += 1;  
            break;
          case 'd':
            acc.value -= 1; 
            break;
          case 's':
            acc.value *= acc.value;
            break;
          case 'o':
            acc.output.push(acc.value);
            break;
        }
        return acc;
      },
      { value: 0, output: [] }
    ).output;
  }
  
  // Exemplos
  console.log(parseDeadfish("iiisdoso")); // [8, 64]
  console.log(parseDeadfish("iiisdosodddddiso")); // [8, 64, 3600]
  