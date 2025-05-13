// Dada uma sequência de dígitos, você deve substituir qualquer dígito abaixo de 5 por '0' 
// e qualquer dígito de 5 ou mais por '1'. Retorne a sequência resultante.

// Nota: a entrada nunca será uma string vazia

// Feito por mim
function fakeBin(x){
    let bin = ''
    for (let value of x) {
       if (value >= 5) { 
           bin = bin + "1";            
       } else {
           bin = bin + "0";   
       }

    }
    return bin;
}

// forma otimizada de fazer a mesma coisa
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');