// Timmy e Sarah acham que estão apaixonados, mas perto de onde moram, só saberão quando colherem uma flor cada. 
// Se uma das flores tiver um número par de pétalas e a outra um número ímpar, significa que estão apaixonados.

// Escreva uma função que receberá o número de pétalas de cada flor e retornará true se elas 
// estiverem apaixonadas e false se não estiverem.


// o que eu fiz
function lovefunc(flower1, flower2){
    if ((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower1 % 2 == 1 && flower2 % 2 == 0)){
    return true;
    }  

    return false;
}

// simplificado
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 == 1;
}

console.log(lovefunc(1,4)) // true
console.log(lovefunc(2,2)) // false
console.log(lovefunc(0,1)) // true
console.log(lovefunc(0,0)) // false