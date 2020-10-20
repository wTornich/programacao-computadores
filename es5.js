

function test() {

var eleitos = [4, 6, 7, 9, 12, 13, 11]
var novoseleitos = eleitos.filter(filtro)
var soma = eleitos.reduce(somar)   
var resultado = eleitos.some(ver)
var maior = eleitos.reduce(maiorr)

conc = ""
novoseleitos.forEach(concatena)
alert(`Teste filtro\n${conc}`)

alert(`Teste soma\nSoma = ${soma}`)

alert(resultado)

alert(`Maior ${maior}`)

}

function maiorr(resultado, elemento) {
    return (resultado > elemento) ? resultado : elemento
}

function ver(elemento) {
    return elemento == 9
}

function somar(total, elemento) {
    return total + elemento
}

var conc = ""
function concatena(elemento) {
    conc = conc + " - " + elemento

}

function filtro(elemento){
    return elemento < 10
}


// diferença entre filter e map
// map não altera o tamanho do vetor, somente o valor do elemento
//

