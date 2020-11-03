


class Rio {

    constructor(nome, nivel, poluido){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    chover = (x) => {
        this.nivel += x
    }

    ensolarar = (x) => {
        this.nivel -= x
        if (this.nivel - x >= 0){
            this.nivel -= x
        }else{
            console.log("Não é possível deixar o nível do rio abaixo de 0")
        }
    }

    limpar = () => {
        this.poluido = false
    }

    sujar = () => {
        this.poluido = true
    }

    mostra = () => {
        let aux = this.poluido ? "Sujo" : "Limpo"
        console.log(`Nome: ${this.nome} Nível: ${this.nivel} está ${aux}`)
    }
}

let rio1 = new Rio("Rio brabo", 20, false)
rio1.chover(3)
rio1.sujar()
rio1.mostra()