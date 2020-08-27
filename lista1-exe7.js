
function exe7() {

    var vet=[]
    exe7_entrada(vet)
    exe7_media(vet)

}

function exe7_entrada(vetor) {

    var n = Number(prompt(`Digite um número inteiro positivo`))
    
    while (n >= 0) {
        vetor.push(n)
        n = Number(prompt(`Digite um número inteiro positivo`))
    }

}

function exe7_media(vetor) {

  if (vetor.length > 0) {

        var soma=0
        for (var cont=0;cont<vetor.length;cont++) {
            soma += vetor[cont]
        }
        alert(soma/vetor.length)

    }else{
        alert(`Nenhum valor lido`)
    }
    
}