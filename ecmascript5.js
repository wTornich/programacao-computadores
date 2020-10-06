

function chefe() {

    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]

    vetor.forEach(mostrarpar)
    vetor.forEach(acumula)
    alert(conteudo)
}


// concatena os itens do vetor
var conteudo = ""
function acumula(elemento) {
    conteudo = conteudo + " - " + elemento
}

//mostra os elementos nas posições pares
function mostrarpar(elemento, posicao) {

    if (posicao%2 == 0){
        alert(`O elemento ${elemento} está na ${posicao}`)
    }
}

//função map (mapeia um vetor em um outro vetor)

var idades = [10, 13, 17, 18, 19, 20, 22, 26]

var novo = idades.map(multiplica)

console.log(novo)

function multiplica(elemento) {
    return elemento*2
}

var conc = ""
function concatena(elemento) {
    conc = conc + " - " + elemento
}




// EXERCICIO MAP ------------------------
// se par=0 se impar 1

function exer() {

    var numeros = [10, 13, 17, 18, 19, 20, 22, 26]
    var newvetor = numeros.map(parimpar)
    newvetor.forEach(concatena)
    let aux = `\n ${conc}` 
    conc = ""
    numeros.forEach(concatena)
    aux = aux + `\n ${conc}`

    alert(aux)

}

function parimpar(elemento) {
    if (elemento%2 == 0) {
        return 0
    }else{
        return 1
    }
}

var conc = ""
function concatena(elemento) {
    conc = conc + " - " + elemento
}

// ---------------------------------------

// VARIÁVEL DO TIPO FUNCAO

function tipofuncao() {

var x = function (){
    alert(`variáveis do tipo função`)
}

// a variável soma é uma função
var soma = function (a, b) {
    alert(a + b)
}

soma(3, 6)

// a variável subtração é uma função
var subtracao = function (a, b) {
    alert(a - b)
}

subtracao(6, 1)

// FILTER ---------------------


var vet = [1, 2, 3, 4, 5]

alert(vet.filter(maior))

function maior(elemento){
    return elemento >= 3
}



}


