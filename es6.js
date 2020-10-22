




function soma(x, y){

    console.log(x+y)

}
soma(2, 7)

let soma = function(x, y){
    console.log(x+y)
}
soma(2, 7)



// arrow function = funções com setaa =>
//antes da seta temos a implementação da função (x+y)
//depois da seta temos a implementação da função (consolo.log(x+y))
//aausencia da palavra function
// função anônima = função sem nome

let soma = (x, y) => alert(x+y)
soma(2, 7)

let vet = [2, 4, 7 ,9, 11]
let novo = vet.filter(elemento => elemento > 5)
console.log(novo)

