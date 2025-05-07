// Escreva uma função bmi que calcule o índice de massa corporal (imc = peso / altura²).
// Se imc <= 18.5, retorne "Abaixo do peso".
// Se imc <= 25.0, retorne "Normal".
// Se imc <= 30.0, retorne "Sobrepeso".
// Se imc > 30, retorne "Obeso".

function bmi(weight, height) {
    // bmi = weight / height2
    const imc = weight / (height * height);

    if (imc <= 18.5) {
        return "Underweight";
    } else if (imc <= 25.0) {
        return "Normal";
    } else if (imc <= 30.0) {
        return "Overweight";
    }
    else if (imc > 30) {
        return "Obese";
    }   
}

console.log(bmi(50, 1.80)) // "Abaixo do peso", "Para peso = 50 e altura = 1.80";
console.log(bmi(80, 1.80)) // "Normal", "Para peso = 80 e altura = 1.80";
console.log(bmi(90, 1.80))// "Sobrepeso", "Para peso = 90 e altura = 1.80";
console.log(bmi(100, 1.80)) // "Obeso", "Para peso = 100 e altura = 1.80";