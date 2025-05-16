// Complete a solução de modo que ela inverta a sequência passada para ela.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return [...str].reverse().join('')
}

// forma arcaica
function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');