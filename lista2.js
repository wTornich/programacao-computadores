



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

// EXERCICIO 1

function exe1_chefe() {

    let vendedores = []
    let vendas =[]
    let opcao
    do {

        opcao = Number(prompt(`Cadastrar Vendedor[1]\nCadastrar Venda[2]\nConsultar venda mes[3]\nConsultar vendas[4]\nCnsultarVendadorMes[5]\nConsultar mes mais venda[6]\nSair[7]`))

        switch(opcao) {
            case 1: cadastraVendedores(vendedores)
                break
            case 2: cadastraVendas(vendas, vendedores)
                break
            case 3: consultarVendasFmes(vendas)
                break
            case 4: consultarVendasF(vendas)
                break
            case 5: consultarVendedorMes(vendas)
                break 
            case 6: consultarMesmaisvenda(vendas)
                break    
            case 7: console.log(`Tchau`)
                break
            default: console.log(`Tente novamente ...`)
        }
    }while (opcao != 7)
}


function consultarMesmaisvenda(venda) {

    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]

    for (let i=0;i<venda.length;i++) {

        let posicao = venda[i].mes
        meses[posicao] = meses[posicao] + venda[i].valor
    }

    let maiorvalor = meses[0]
    for (let i=1;i<meses.length;i++) {
        if (meses[i] > maiorvalor) {
            maiorvalor = meses[i]
        }
    }

    let posicao = meses.indexOf(maiorvalor)

}


function consultarVendedorMes(venda) {

    let mes = Number(prompt(`Informe o mês`))
    let maiorVenda = 0
    let vendedormaisvendeu = 0

    for (let i=0;i<venda.length;i++) {
        if (venda[i].mes == mes) {
            if (venda[i].valor > maiorVenda) {
                maiorVenda = venda[i].valor
                vendedormaisvendeu = venda[i].vendedor
            }
        }
    }

}

function consultarVendasF(venda){

    let cod = Number(prompt(`Informe o código do vendedor`))
    
    let soma=0
    for (let i=0;i<venda.length;i++) {
        if (venda[i].vendedor == cod) {
            soma = soma + vdas
        }
    }
    alert(`A soma das vendas é ${soma}`)
}

function consultarVendasFmes(venda){

    let cod = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))

    for (let i=0;i<venda.length;i++) {
        if ((venda[i].vendedor == cod) && (venda[i].mes == mes)) {

            alert(`Valor da venda ${venda[i].valor}`)
            return
        }
    }
}


function cadastraVendedores(vended) {
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)

    //verificar existenca de vendedor
    for (let i=0;i<vended.length;i++){
        if (vended[i].codigo == objeto.codigo){
            alert(`Cadastro cancelado, pois ja existe vendedor`)
            return 0
        }
    }
    
    // insere objeto no vetor vendedores
    vended.push(objeto)

}

function cadastraVendas(venda, vendedores) {

    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe mês da venda`))
    objeto.valor = Number(prompt(`Informe valor da venda`))

    for (let i=0;i<vendedores.length;i++) {

        if (objeto.vendedor == vendedores[i].codigo) {
            
            for (let i=0;i<venda.length;i++) {
                if ((objeto.mes == venda[i].mes) && (objeto.vendedor == venda[i].vendedor)) {
                    console.log(`Não podemos registrar a venda`)
                    return 0
                }
            }
            
            venda.push(objeto)
            console.log(`Venda registrada`)
        }
    }
    alert(`Vendedor não existe`)
}
