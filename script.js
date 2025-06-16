let promptSync = require('prompt-sync')();
let fs = require('fs')
let path = require('path')

//#region variaveis
let nomes = []; //Vetor para armazenar valores dos nomes
let endereços = []; //Vetor para armazenar valores dos endereços
let distancias = []; //Vetor para armazenar valores das distâncias
let valores = []; //Vetor para armazenar valores dos valores
let tipos = [];
let rodarCodigo = true;
let quantidade = 0;
let calculos = []; //Vetor para armazenar valores dos cálculos
let calculo = 0;
//#endregion

while (rodarCodigo == true) {
    
    //#region Nome
    let nome = promptSync(`Digite o nome do ${quantidade}° cliente (digite "parar" no tipo para parar o programa)`);
    if (nome == "parar") {
        rodarCodigo = false
    } else if (!isNaN(nome)) {
        nome = promptSync(`Por favor, não digite nenhum número`)
    }
    //#endregion

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
    let tipo = promptSync(`Digite o tipo de entrega do ${quantidade + 1}° cliente (escolha entre normal e urgente)`);

    //#region Adicionar valores as arrays
    nomes[quantidade] = nome;
    endereços[quantidade] = endereço;
    distancias[quantidade] = distancia;
    valores[quantidade] = valor;
    tipos[quantidade] = tipo;
    quantidade++
    //#endregion
}