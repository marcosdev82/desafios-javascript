// Verifique se uma string tem a mesma quantidade de "x" e "o". O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer caractere.

// Exemplos de entrada/saída:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str = "") {
//     const array = ["o", "x"];
//     let strArr =  str.toLocaleLowerCase().split("");
//     let valor = [];
//     array.forEach((arr, i) => {
//         let count = strArr.filter(x => x === arr).length;
//         if (count % 2 === 0 && count != 0) {
//            valor[arr] = count;
//         } else {
//            valor[arr] = count;
//         }
//     }); 
//     return  (valor['o'] == valor['x']);
// }


// function XO(str = "") {
//     let letter = str.toLowerCase()
//     let x = 0;
//     let o = 0;
//     for (value of letter) {
//         if (value === "x") {
//             x++;
//         } else {
//             o++;
//         }
//     }
//     return (x == o);
// }

function XO(str = "") {
    str = str.toLowerCase().split('');
    return str.filter(c => c === 'x').length === str.filter(c => c === 'o').length;
}
  

console.log(XO("ooxx")) // true
console.log(XO("xxOo")) // false        
console.log(XO("xxxm")) // false        