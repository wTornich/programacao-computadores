


function chefe() {

    let bibicreta = []

    do {

        opcao = Number(prompt(`Cadastrar bicicleta[1]\nBusca por bike com código[2]\nCalcula soma valores bike em estoque[3]\nMostra as bike de uma marca informada pelo usuário[4]\nSoma ao valor 3 em todos os aros das bikes[5]\nMostra bike mais velha[6]\nSair[7]`))

        switch(opcao) {
            case 1: cadastra(bibicreta)
                break
            case 2: busca(bibicreta)
                break
            case 3: 

                let soma = bicicreta.reduce(somar)  
                alert(soma) 

                break
            case 4: 

                var marca = prompt('Informe marca')
                //retorna todos que encrontra
                novas = bibicreta.filter(mostra)

                break
            case 5:

                let vet = bicicreta.map(soma3)
                

                break 
            case 6: mostravelha(bibicreta)
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
        ano: (prompt(`Digite o sexo\nPessoa ${cont}`)),
        })     
    
}

function busca(bicicreta) {

    var ccod = Number(prompt(`Informe o código para buscar a bike`))

    let b = bicicreta.some(ver)

    var b = function ver(bicicreta) {
        return (resultado > elemento) ? resultado
    }
    
}

function somar(total, bibicreta) {
    return total + bibicreta.valor
}

function mostra(bibicreta) {
    return marca == bibicreta.marca
}

function soma3(bibicreta) {
    bibicreta.aro = bibicreta.aro + 3
    return bibicreta
}

/* Nom cabei ;-; Tem q arruma umas parada */