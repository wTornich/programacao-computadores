

function chefe() {

    let matriz = []

    matriz[0] = []
    matriz[1] = []
    matriz[2] = []
    cadastra(matriz)
    consultaMediaAlunos(matriz)

}

function cadastra(mat) {
    for (let i=0;i<3;i++) {
        alert(`Informe 4 notas do aluno ${i+1}`)
        for (let j=0;j<4;j++) {
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat) {

    let vetor =[]

    for (let i=0;i<3;i++) {
        let soma=0
        for (let j=0;j<4;j++) {
            soma = soma + mat[i][j]
        }
        vetor.push(soma/4)
    }

    let medias=``
    for (let i=0;i<vetor.length;i++) {
        medias += `Média ${i+1} = ${vetor[i]}\n`
    }

    alert(medias)
}