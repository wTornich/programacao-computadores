



function exe3_chefe(){

    let vetor = []

    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: exe3_entrada(vetor)
                break
            case 2: exe3_calcmedia(vetor)
                break
            case 3: exe3_calcmaioridade(vetor)
                break
            case 4: exe3_calcqquantidade(vetor)
                break
            case 5: exe3_calcpercentual(vetor)
                break
            case 6: alert(`Obrigado por utilizar nosso programa`)
                break
            default: console.log(`Opção inválida, tente novamente`)
        }
    
    }
    while (opcao != 6)
}

function exe3_entrada(vet){
    
    alert(`Entrou na função entrada`)

    let objeto = new Object()
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase()
    objeto.altura = prompt(`Digite a altura`)
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.corolho = Number(prompt(`Informe a cor dos olhos`)).toUpperCase()

    vet.push(objeto)
    alert(`Habitente inserido com sucesso`)
}

function exe3_calcmedia(vet){

    alert(`Entrou na função calcular média`)
    let soma = 0
    let qtde = 0
    for (let i=0;i<vet.length;i++) {
        if ((vet[i].corolho == `C`) && (vet[i].altura > 1.60)) {
            soma = soma + vet[i].idade
            qtde++
        }
    }

    alert(`A média da idade é ${soma/qtde}`)

}

function exe3_calcmaioridade(vet){

    alert(`Entrou na função calcular maior idade`)

    let maioridade = vet[0].idade
    for (let i=1;i<vet.length;i++) {
        if (vet[i].idade > maioridade) {
            maioridade = vet[i].idade
        }
    }
    alert(`Maior idade é ${maioridade}`)
}

function exe3_calcqquantidade(vet){

    alert(`Entrou na função calcular quantidade`)

    let quant=0
    for (let i=0;i<vet.length;i++) {
        if (((vet[i].sexo == `F`) && ((vet[i].idade >= 20) && (vet[i].idade <= 45)))
        || ((vet[i].corolho == `V`) && (vet[i].altura < 1.70))) {
            quant++
        }
    }
    alert(`A quantidade é ${quant}`)

}

function exe3_calcpercentual(vet){

    alert(`Entrou na função calcular percentual`)

    let conta = 0

    for (let i=0;i<vet.length;i++) {
        if (vet[i].sexo == `M`) {
            conta++
        }
    }

    alert(`O percentual de homens é de ${(conta/vet.length)*100}`)

}