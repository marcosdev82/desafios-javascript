// Livro de notas
// Complete a função para que ela encontre a média das três notas passadas a ela e retorne o valor da letra associado a essa nota.

// Pontuação Numérica	Nota da letra
// 90 <= pontuação <= 100	'UM'
// 80 <= pontuação < 90	'B'
// 70 <= pontuação < 80	'C'
// 60 <= pontuação < 70	'D'
// 0 <= pontuação < 60	'F'
// Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou maiores que 100.

function getGrade(s1, s2, s3) {
    const pontuacao = (s1 + s2 + s3) / 3
    let num = '';
    if (pontuacao >= 90 && pontuacao <= 100) {
        num = 'A'
    } else if (pontuacao >= 80 && pontuacao < 90) {
        num = 'B'
    } else if (pontuacao >= 70 && pontuacao < 80) {
        num = 'C'
    } else if (pontuacao >= 60 && pontuacao < 70) {
        num = 'D'
    } else if (pontuacao >= 0 && pontuacao < 60) {
        num = 'F'
    }
    return num
}

getGrade(95,90,93) // 'A'
getGrade(100,85,96) // 'A'
getGrade(92,93,94) // 'A'

getGrade(70,70,100) // 'B'
getGrade(82,85,87) // 'B'
getGrade(84,79,85) // 'B'
getGrade(89,89,90) // 'B' 

getGrade(70,70,70) // 'C'
getGrade(75,70,79) // 'C'
getGrade(60,82,76) // 'C'

getGrade(65,70,59) // 'D'
getGrade(66,62,68) // 'D'
getGrade(58,62,70) // 'D'

getGrade(44,55,52) // 'F'
getGrade(48,55,52) // 'F'
getGrade(58,59,60) // 'F'
