let promptSync = require('prompt-sync')
let fs = require('fs')
let path = require('path')

let nomes = []
let endereços = []
let distancias = []
let valores = []
let tipo = ""
let quantidade = 0;
let calculos = []
let calculo = 0;
while (true) {
    let nome = promptSync(`Digite o nome do ${quantidade}° cliente`)
    let endereço = promptSync(`Digite o endereço do ${quantidade+1}° cliente`)
    let distancia = parseInt(promptSync(`Digite a distância de entrega do ${quantidade}° cliente`))
    let valor = parseInt(promptSync(`Digite o valor de cada KM do ${quantidade+1}° cliente`))
    tipo = promptSync(`Digite o tipo de entrega do ${quantidade+1}° cliente (escolha entre normal e urgente)`)

    if (tipo == "normal") {
        calculo = distancia * valor
    }
}