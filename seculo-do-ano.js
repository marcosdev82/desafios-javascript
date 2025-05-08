// Introdução
// O primeiro século abrange do ano 1 até (inclusive) o ano 100, o segundo século — do ano 101 até (inclusive) o ano 200, e assim por diante.

// Tarefa
// Dado um ano, retorne o século ao qual ele pertence.

// Exemplos
// 1705 → 18
// 1900 → 19
// 1601 → 17
// 2000 → 20
// 2742 → 28

// Nota: Este kata utiliza uma construção estrita, conforme mostrado na descrição e nos exemplos. Você pode ler mais sobre isso [aqui].

function century(year) {
    return Math.ceil(year / 100);
}

console.log(century(1705)) // 18, 'Testing for year 1705'
console.log(century(1900)) // 19, 'Testing for year 1900'
console.log(century(1601)) // 17, 'Testing for year 1601'
console.log(century(2000)) // 20, 'Testing for year 2000'
console.log(century(89)) // 1, 'Testing for year 89'