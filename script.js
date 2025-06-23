let promptSync = require('prompt-sync')();
let fs = require('fs')
let path = require('path')

//#region variaveis
let conteudoArquivo = "----Histórico de entregas----"
let nomes = []; //Vetor para armazenar valores dos nomes
let endereços = []; //Vetor para armazenar valores dos endereços
let distancias = []; //Vetor para armazenar valores das distâncias
let valores = []; //Vetor para armazenar valores dos valores
let tipos = [];
let rodarCodigo = true;
let quantidade = 0;
let calculos = []; //Vetor para armazenar valores dos cálculos
let calculo = 0;
let soma = 0;
//#endregion

while (rodarCodigo == true) {
    
    //#region nome
    let nome = promptSync(`Digite o nome do ${quantidade}° cliente (digite "-" no tipo para parar o programa)`);
    while (!isNaN(nome)) {
        nome = promptSync(`Por favor, não digite nenhum número`)
    }
    if (nome == "-") {
        rodarCodigo = false
    } 
    //#endregion

    if (nome != "-") {
    //#region endereço
    let endereço = promptSync(`Digite o endereço do ${quantidade + 1}° cliente`);
    //#endregion

    //#region distancia
    let distancia = parseInt(promptSync(`Digite a distância de entrega do ${quantidade}° cliente (em quilometros)`));
    if (isNaN(distancia)) {
        distancia = promptSync(`Por favor, não digite letras`)
    }
    //#endregion

    //#region valor
    let valor = parseInt(promptSync(`Digite o valor de cada KM do ${quantidade + 1}° cliente (em reais)`));
    if (isNaN(valor)) {
        valor = promptSync(`Por favor, não digite letras`)
    }
    //#endregion
    
    //#region tipo
    let tipo = parseInt(promptSync(`Digite o tipo de entrega do ${quantidade + 1}° cliente (digite 1 para normal 2 para urgente)`));
    while (isNaN(tipo) || tipo != 1 || tipo != 2) {
            valor = promptSync(`Por favor, digite 1 ou 2`)
        }
    //#endregion

    //#region Adicionar valores as arrays
    nomes[quantidade] = nome;
    endereços[quantidade] = endereço;
    distancias[quantidade] = distancia;
    valores[quantidade] = valor;
    tipos[quantidade] = tipo;
    quantidade++
    //#endregion
}
}

    fs.appendFileSync("./log.txt", `\n${nomes}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${endereços}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${distancias}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${valores}\n`, "utf-8")
    fs.appendFileSync("./log.txt", `${tipos}`, "utf-8")
