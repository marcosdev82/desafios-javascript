// Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de 5 por '0' 
// e qualquer dígito de 5 ou mais por '1'. Retorne a sequência resultante.

// Nota: a entrada nunca será uma string vazia

// Feito por mim - exercício mental 
// function fakeBin(x){ //45385593107843568
//     let bin = ''  // 01011110001100111
//     for (let value of x) { // 4,5,3,8,5,5,9,3,1,0,7,8,4,3,5,6,8
//        if (value >= 5) { 
//            bin = bin + 1;            
//        } else {
//            bin = bin + 0;   
//        }
//     }
//     return bin;
// }

// forma otimizada de fazer a mesma coisa

function fakeBin(x) { //53855931078435684
    return x.split('').map(n => n < 5 ? 0 : 1).join(''); //4,5,8
}

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747')); 
console.log(fakeBin('366058562030849490134388085'));