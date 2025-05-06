// Implemente a função que recebe um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto de exibição, conforme mostrado nos exemplos:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 othe

// Nota: Para 4 ou mais nomes, o número "and 2 others"simplesmente aumenta.

function likes(names) {
    if (names.length <= 0) {
        return "no one likes this";
    } else if (names.length == 1) {
        return names[0] + " likes this";
    } else if (names.length == 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (names.length == 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else if (names.length >= 4) {
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
    return names;
}