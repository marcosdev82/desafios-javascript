
// Descrição:
// Neste kata, você criará uma função que recebe uma lista de inteiros não negativos e strings e retorna uma nova lista com as strings filtradas.

// Exemplo
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

filter_list([1,2,'aasf','1','123',123])