// Neste kata, você deve simplesmente determinar se um determinado ano é bissexto ou não. Caso você não conheça as regras, aqui estão elas:

// Anos divisíveis por 4 são anos bissextos,
// mas anos divisíveis por 100 não são anos bissextos,
// mas anos divisíveis por 400 são anos bissextos.
// Os anos testados estão dentro do intervalo 1600 ≤ year ≤ 4000

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2015)) // false
console.log(isLeapYear(2020)) // true           
console.log(isLeapYear(2017)) // false