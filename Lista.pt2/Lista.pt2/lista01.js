//Exercicio 01
class Livro {
    constructor(nome, autor) {
        this.nomeLivro = nome
        this.autorLivro = autor
    }
    dadosLivro() {
        console.log(`Nome do livro: ${this.nomeLivro} \nAutor do Livro: ${this.autorLivro}`)
    }
}

const livros = [
    livro1 = new Livro("Palmeiras", "Aizza"),
    livro2 = new Livro("Melhores Comidas", "Nina"),
    livro3 = new Livro("Fracos", "Max")
]

livros.forEach(livro => {
    livro.dadosLivro()
})

//Exercicio 02
class Pessoa {
    constructor(nome, idade) {
        this.nomePessoa = nome
        this.idadePessoa = idade
    }
    falar() {
        console.log(`Olá meu nome é ${this.nomePessoa} e tenho ${this.idadePessoa}`)
    }
}
const pessoas = [
    pessoa01 = new Pessoa("Nina", 15),
    pessoa02 = new Pessoa("Luis", 20),
    pessoa03 = new Pessoa("Maria", 25)
]

pessoas.forEach(pessoa => {
    pessoa.falar()
})

//Exercicio 03 
class Retangulo {
    constructor(altura, largura) {
        this.alturaRetangulo = altura
        this.larguraRetangulo = largura
    }
    calcularArea() {
        let calculo = this.alturaRetangulo * this.larguraRetangulo
        console.log(`A area do retangulo é : ${calculo}m`)
    }
}
const retangulo1 = new Retangulo(20, 30)
retangulo1.calcularArea()

//Exercicio 04
class Carro {
    constructor(velocidade) {
        this.velocidadeCarro = velocidade
    }
    acelerar() {
        let km = 0
        for (km; km < 11; km++) {
            console.log(`Velocidade ${km}km`)
        }
    }
}
const carro1 = new Carro(0)
carro1.acelerar()

//Exercicio 05
class Produto {
    constructor(nome, preco) {
        this.nomeProduto = nome
        this.precoProduto = preco
    }
    aplicarDesconto(desconto) {
        let Desconto = (this.precoProduto * desconto) / 100
        console.log(`Produto: ${this.nomeProduto} \nPreço: R$${this.precoProduto} \nPreço com ${desconto}% off: R$${this.precoProduto - Desconto}`)
    }
}

const produtos = [
    produto1 = new Produto("Celular", 2350),
    produto2 = new Produto("Notebook", 3000),
    produto3 = new Produto("tablet", 1750)
]

produtos.forEach(produto => {
    produto.aplicarDesconto(5)
})

//Exercicio 06
class Contador {
    constructor(valor) {
        this.valor = valor
    }
    incrementar(incrementar) {
        console.log(`${this.valor} incrementando ${incrementar} é igual a ${this.valor + incrementar}`)
    }
    decrementar(decrementar) {
        console.log(`${this.valor} decrementando ${decrementar} é igual a ${this.valor - decrementar}`)
    }
}

const valor1 = new Contador(10)
valor1.incrementar(20)
valor1.decrementar(5)

//Exercicio 07

class Temperatura {
    constructor(temperatura) {
        this.temperaturaCelcius = temperatura
    }
    paraFahrenheit() {
        let converterFarenheit = (this.temperaturaCelcius * 1.8) + 32
        console.log(`Celcius: ${this.temperaturaCelcius}° \nFahrenheit: ${converterFarenheit}°`)
    }
}
const temperaturaCelcius1 = new Temperatura(25)
temperaturaCelcius1.paraFahrenheit()

//Exercicio 08
class Animal {
    constructor(nome, cor, raca, tipo) {
        this.nomeAnimal = nome
        this.corAnimal = cor
        this.racaAnimal = raca
        this.tipoAnimal = tipo
    }
    mostrarAnimal() {
        console.log(`Nome do ${this.tipoAnimal} : ${this.nomeAnimal} \nCor: ${this.corAnimal} \nRaça: ${this.racaAnimal}`)
    }
}

const animal1 = new Animal("Max", "Branco", "Shih Tzu", "Cachorro")
const animal2 = new Animal("Nina", "Cinza", "Tigrado", "Gato")
const animal3 = new Animal("Logan", "Preto", "Chow-Chow", "Cachorro")
animal1.mostrarAnimal()
animal2.mostrarAnimal()
animal3.mostrarAnimal()

//Exercicio 09
class Filme {
    constructor(titulo, ano) {
        this.tituloFilme = titulo
        this.anoLancamento = ano
    }
    verificarFilme() {
        let tempoLancamento = 2026 - this.anoLancamento
        if (tempoLancamento > 10) {
            console.log(`Filme: ${this.tituloFilme} \nLançamento: ${this.anoLancamento}\nTem mais de 10 anos de lançamento`)
        } else {
            console.log(`Filme: ${this.tituloFilme} \nLançamento: ${this.anoLancamento}\nTem menos de 10 anos de lançamento`)
        }
    }
}

const filme1 = new Filme("The Batman", 2022)
const filme2 = new Filme("Pecadores", 2025)
filme1.verificarFilme()
filme2.verificarFilme()

//Exercicio 10
class Lampada {
    constructor() {
        this.recebendoEnergia = false
    }
    ligar() {
        this.recebendoEnergia = true
        console.log("Lampada Ligada")
    }
    desligar() {
        this.recebendoEnergia = false
        console.log("Lampada Desligada")
    }
}

const lampada1 = new Lampada()
lampada1.ligar()