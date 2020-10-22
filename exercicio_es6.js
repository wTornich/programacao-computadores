

chefe()

function chefe() {

    let bicicreta = []

    do {

        opcao = Number(prompt(`Cadastrar bicicleta[1]\nBusca por bike com código[2]\nCalcula soma valores bike em estoque[3]\nMostra as bike de uma marca informada pelo usuário[4]\nSoma ao valor 3 em todos os aros das bikes[5]\nMostra bike mais velha[6]\nSair[7]`))

        switch(opcao) {
            case 1: cadastra(bicicreta)
                break
            case 2: 
                busca(bicicreta)
                break
            case 3:
                 let soma = bicicreta.reduce( (total, bicicreta) => { return total + bicicreta.valor}, 0) // ,0) inicia a soma com 0
                 //console.log(`Soma = ${soma}`)
                 console.log(soma)
                break
            case 4: 
                mostra(bicicreta) 
                break
            case 5:
                let a = bicicreta.map( (bicicreta) => {bicicreta.aro = bicicreta.aro + 3})
                console.log(a)
                break 
            case 6: 
                let maisv = (bicicreta) => {
                let achou = bicicreta[0].ano
                bicicreta.forEach( (bicicreta) => {
                    if (bicicreta.ano < achou) {
                        achou = bicicreta.ano
                    }
                })
                console.log(achou)
                }

                break
            case 7: console.log(`Flw`)
                break    
            default: console.log(`Tente novamente ...`)
        }
    }while (opcao != 7)

}

function cadastra(bicicreta) {

    bicicreta.push({
        cod: Number(prompt(`Informe o código`)),
        aro: Number(prompt(`Informe aro`)), 
        modelo: prompt(`Informe modelo`),
        marca: prompt(`Informe marca`),
        valor: Number(prompt(`Informe valor`)),
        ano: (prompt(`Digite o ano de fabeicação`)),
        })     
    
}


function busca(bicicreta) {

    var ccod = Number(prompt(`Informe o código para buscar a bike`))
    
    let bike = bicicreta.find( (bicicreta) => { return bicicreta.cod == ccod})
    
    console.log(bike)

}

function mostra(bicicreta) {

    let mm = prompt(`Informe a marca para buscar a bike`)
    
    let bike = bicicreta.filter( (bicicreta) => { bicicreta.marca == mm})
    
    console.log(bike)    

}
