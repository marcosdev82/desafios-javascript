// Complete a solução de modo que ela inverta a sequência passada para ela.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return [...str].reverse().join('')
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');