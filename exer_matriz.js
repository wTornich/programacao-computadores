

function chefe() {

    let matriz = []
    let vetor = []

    cadastra(matriz, vetor)
    consultaMediaAlunos(matriz, vetor)
    calculaMediaProvas(matriz)
    calculaMaiorNotaProva(matriz, vetor)
}

function calculaMaiorNotaProva(mat, vet) {

    for (let j=0;j<4;J++) {
        let maiorNota = mat[0][j]
        let nomaMaiorNota = vet[i].nome
        for (let i=0;i<3;i++) {
            if (mat[i][j] > maiorNota){
                maiorNota = mat[i][j]
                nomeMaiorNota = vet[i].nome
            }
        }
        console.log(`A prova ${j+1} tem a maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)

    }
}


function cadastra(mat, vet) {
    for (let i=0;i<3;i++) {
        let objeto = new Object()
        objeto.nome = prompt(`Informe nome`)
        objeto.rg = prompt(`Informe RG`)
        objeto.media = 0

        vet.push(objeto)
        mat[i] = []
        alert(`Informe 4 notas do aluno ${objeto.nome}`)
        for (let j=0;j<4;j++) {
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat, vet) {

    

    for (let i=0;i<3;i++) {
        for (let j=0;j<4;j++) {
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media/4
    }

    console.log(vet)
}

function calculaMediaProvas(mat) {

    for (let j=0;j<4;j++) {
        let media=0
        for (let i=0;i<3;i++) {
            media = media + mat[i][j]
        }
        console.log(`A media da prova ${j+1} é ${media/3}`)
    }

}