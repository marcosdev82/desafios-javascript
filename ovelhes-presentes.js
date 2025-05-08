function countSheeps(sheep) {
  let presente = 0;
  for(value of sheep) {
    if (value === true){    
       presente+=1
    }
  
  }
  return presente || 0
}

// const tests = [
//     [[], 0],
//     [[undefined], 0],
//     [[null], 0],
//     [[false], 0],
//     [[true], 1],
//     [[undefined,null,false,true], 1],
//     [[undefined,null,false,true,true,false,null,undefined], 2],
//     [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
//   ];

 
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))
 