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
  