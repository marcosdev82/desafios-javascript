// Descrição:
// Pegue um array e remova cada segundo elemento dele. Mantenha sempre o primeiro elemento e comece a remover a partir do próximo.

// Exemplo:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

// Nenhuma das matrizes estará vazia, então você não precisa se preocupar com isso!

// minha script
function removeEveryOther(arr){
    const newArr = []
    for(let k in arr) {
      if (k % 2 == 0) {
        newArr.push(arr[k])
      }
    }
    return newArr;
}

// script resumido
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) // ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [1, 3, 5, 7, 9]
console.log(removeEveryOther([[1, 2]])) // [[1, 2]]
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])) // [['Goodbye']]