

/* Crie uma classe em JS chamada Aluno contendo as variáveis numeroAluno, nome , idade, p1 e p2,     
Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - , e mostra() - que retorna os
 valores de numeroAluno, nome e idade.    Faça a instanciação da classe Aluno (atribuição das variáveis de 
    instância com quaisquer valores e chamada dos métodos notaFinal() e mostra()).     Adicionar o método passou()
     à classe Aluno a fim de verificar se o aluno passou. Chame o método passou() a fim de testa-lo.
 */

class Aluno {

    constructor(naluno, nome, idade, p1, p2){
        this.naluno = naluno 
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notafinal = () => {
        return (this.p1 + this.p2)/2
    }

    mostra = () => {
        console.log(`Números ${this.naluno} Nome: ${this.nome} Idade: ${this.idade} Nota Final: ${this.notafinal()}`)
    }

    passou = () => {
        if (this.notafinal() >= 6){
            return `${this.nome} foi aprovado`
        }else{
            return `${this.nome} foi reprovado`
        }
    }

}

let aluno1 = new Aluno(1, 'Matheus', 18, 10, 5)
console.log(`Nota final do aluno 1 = ${aluno1.notafinal()}`)
aluno1.mostra()
console.log(aluno1.passou())

let num = Number(prompt('Informe o número do aluno'))
let nom = prompt('Informe o nome do aluno')
let idd = Number(prompt('Informe a idade do aluno'))
let p = Number(prompt('Informe a nota1 do aluno'))
let pp = Number(prompt('Informe a nota2 do aluno'))
let aluno2 = new Aluno(num, nom, idd, p ,pp)
console.log(`Nota final do aluno 2 = ${aluno2.notafinal()}`)
aluno2.mostra()
console.log(aluno2.passou())