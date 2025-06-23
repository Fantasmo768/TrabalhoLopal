let promptSync = require('prompt-sync')
let fs = require('fs')
let path = require('path')

let nomes = []; //Vetor para armazenar valores dos nomes
let endereços = []; //Vetor para armazenar valores dos endereços
let distancias = []; //Vetor para armazenar valores das distâncias
let valores = []; //Vetor para armazenar valores dos valores
let tipos = [];
let rodarCodigo = true;
let quantidade = 0; 
let calculos = []; //Vetor para armazenar valores dos cálculos
let calculo = 0;
let conteudoArquivo = "----Histórico de entregas----"


if (!fs.existsSync("./log.txt")) {
fs.writeFileSync("./log.txt", conteudoArquivo, "utf-8")
}

while (rodarCodigo==true) {
    let nome = promptSync(`Digite o nome do ${quantidade}° cliente (digite "parar" no nome para parar o programa)`); //
    if (nome == "parar") {
        rodarCodigo=false
    } else if (!isNaN(nome)) {
        nome = promptSync(`Por favor, não digite nenhum número`)
    }
    let endereço = promptSync(`Digite o endereço do ${quantidade+1}° cliente`); 
    if (!isNaN(endereço)) {
        endereço = promptSync(`Por favor, não digite nenhum número`)
    }
    let distancia = parseInt(promptSync(`Digite a distância de entrega do ${quantidade}° cliente (em quilometros)`));
    if (isNaN(distancia)) {
        distancia = promptSync(`Por favor, não digite letras`)
    }
    let valor = parseInt(promptSync(`Digite o valor de cada KM do ${quantidade+1}° cliente (em reais)`));
    if (isNaN(valor)) {
        valor = promptSync(`Por favor, não digite letras`)
    }
    let tipo = promptSync(`Digite o tipo de entrega do ${quantidade+1}° cliente (escolha entre normal e urgente)`);

    nomes [quantidade] = nome;
    endereços [quantidade] = endereço;
    distancias[quantidade] = distancia;
    valores[quantidade] = valor;
    tipos[quantidade] = tipo;
    quantidade++
}

   fs.appendFileSync("./log.txt", `\n${nomes}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${endereços}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${distancias}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${valores}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${tipos}`, "utf-8")
