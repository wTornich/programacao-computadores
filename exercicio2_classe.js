

/*

Implemente em JS uma classe chamada Produto contendo as variáveis id , descrição , qtde  e preco . 
Essa classe deve possuir o método construtor e ainda os métodos:
 •	comprar(int x): que compra um produto aumentando em x a quantidade em estoque; 
 •	vender(int x): que vende um produto diminuindo em x a quantidade em estoque; 
 •	aumentar(float x): que aumenta o preço do produto em x unidades; 
 •	diminuir(float x): que diminui o preço do produto em x unidades; 
 •	mostra(): que mostra todas as informações do produto   Finalmente que cria dois Produtos  e teste os métodos criados. */


 class Produto {

    constructor(id, descricao, qtde, preco){
        this.id = id 
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }

    comprar = (x) => {
        this.qtde += x
    }

    vender = (x) => {
        if ((this.qtde - x) >= 0){
           this.qtde = this.qtde - x 
        }else{
            console.log(`Estoque insuficiente`)
        }
    }

    aumentar = (x) => {
        this.preco += x
    }

    diminuir = (x) => {

        if (this.preco - x >= 0) {
            this.preco = this.preco - x
        }else{
            console.log('Preço não pode ser negativo')
        }
        

        //this.preco = (this.preco - x >= 0)? this.preco - x : console.log('Preço não pode ser negativo')
    }
    
    mostra = (x) => {
        console.log(`Id = ${this.id} Descricao = ${this.descricao} Quantidade = ${this.qtde} Preco = ${this.preco}`)
    }

   
}

let produto1 = new Produto(1, 'Opa', 10, 50)
produto1.comprar(1)
produto1.vender(2)
produto1.aumentar(1)
produto1.diminuir(56)
produto1.mostra()

let produto2 = new Produto(2, 'Salve', 20, 70)
produto2.comprar(1)
produto2.vender(2)
produto2.aumentar(1)
produto2.diminuir(2)
produto2.mostra()
