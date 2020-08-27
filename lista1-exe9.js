
function exe9() {

    var n = Number(prompt(`Digite um número inteiro positivo`))
    while (n <= 0) {
        alert(`Número negativo ou 0!`)
        n = Number(prompt(`Digite um número inteiro positivo`))
    }
    exe9_1(n)
}

function exe9_1(n) {

    for (var cont=n;cont>=1;cont--) {

        if (n % n == 0) {
            soma += n + cont
        }

    }
}