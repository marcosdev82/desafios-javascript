// Nathan adora andar de bicicleta.

// Como Nathan sabe que é importante se manter hidratado, ele bebe 0,5 litro de água por hora de ciclismo.

// Você recebe o tempo em horas e precisa retornar o número de litros que Nathan beberá, arredondado para baixo .

// Por exemplo:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor((time * 0.5))
}

console.log(litres(1.4))
console.log(litres(12.3)) 
console.log(litres(0.82)) 
console.log(litres(11.8))
console.log(litres(1787))