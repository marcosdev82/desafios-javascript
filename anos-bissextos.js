// Neste kata, você deve simplesmente determinar se um determinado ano é bissexto ou não. Caso você não conheça as regras, aqui estão elas:

// Anos divisíveis por 4 são anos bissextos,
// mas anos divisíveis por 100 não são anos bissextos,
// mas anos divisíveis por 400 são anos bissextos.
// Os anos testados estão dentro do intervalo 1600 ≤ year ≤ 4000

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

// INTERPRETAÇÃO:

// Anos como 1600, 2000, 2400 são bissextos.

// Anos como 1700, 1800, 1900, 2100 não são bissextos.

// A maioria dos anos múltiplos de 4 (como 2024, 2028, etc.) são bissextos, exceto quando também são múltiplos de 100, a menos que também sejam de 400.

console.log(isLeapYear(2015)) // false
console.log(isLeapYear(2020)) // true           
console.log(isLeapYear(2017)) // false