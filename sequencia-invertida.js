// Crie uma função que retorne uma matriz de inteiros de n a 1 onde n>0.

// Exemplo: n=5-->[5,4,3,2,1]

const reverseSeq = n => {
   let arr = [];
   for (let i=1; i<= n; i++){
     arr.push(i)
   }
   return arr.reverse();
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]