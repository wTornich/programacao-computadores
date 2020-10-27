


class Veiculo {

    // método construtor - com parâmetros

    constructor(marca, modelo, ano, motor, velocidade){
        this.marca = marca // this representa o objeto sendo criado
        this.modelo = modelo
        this.ano = ano
        this.motor = motor
        this.velocidade = velocidade
    }

    mostra() {
        let status = (this.motor) ? "Ligado" : "Desligado"
        console.log(`Marca: ${this.marca}  Modelo: ${this.modelo}  Ano: ${this.ano}  Motor: ${status} Velocidade: ${this.velocidade}`) //this representa o objeto sendo criado
    }

    // ligar carro

    ligar = () => {
        this.motor = true
    }


    acelerar = (x) => {
        this.velocidade += x
    }

    frear = (x) => {
        this.velocidade = this.velocidade - x 
    }


}

// cria um objeto da classe Veiculo

let objeto1 = new Veiculo("GM", "Onyx", 2019, false, 0) // this representa o objeto1
objeto1.ligar()
objeto1.mostra()
objeto1.acelerar(50)
objeto1.mostra()

let objeto2 = new Veiculo("Fiat", "Palio", 2019, false, 0) // this representa o objeto2
objeto2.ligar()
objeto2.mostra()
objeto2.frear(50)
objeto2.mostra()


let objeto3 = new Veiculo("Volkswagen", "Voyage", 2019, false, 0)
objeto3.ligar()
objeto3.mostra()

