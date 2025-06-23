let promptSync = require('prompt-sync')();
let fs = require('fs')
let path = require('path')

//#region variaveis
let conteudoArquivo = "----Histórico de entregas----"
let nomes = []; //Vetor para armazenar valores dos nomes
let enderecos = []; //Vetor para armazenar valores dos enderecos
let distancias = []; //Vetor para armazenar valores das distâncias
let valores = []; //Vetor para armazenar valores dos valores
let tipos = [];
let rodarCodigo = true;
let i = 0;
let calculos = []; //Vetor para armazenar valores dos cálculos
let calculo = 0;
let soma = 0;
let media = 0;
let mensagemTipo = "";
let mensagensTipo = [];
let nome = "";
let endereco;
let distancia = 0;
let valor = 0;
let tipo = 0;
//#endregion

if (!fs.existsSync("./log.txt")) {
    fs.writeFileSync("./log.txt", conteudoArquivo, "utf-8")
}

while (rodarCodigo == true) {
    
    //#region nome
    nome = promptSync(`Digite o nome do ${i+1}° cliente (digite "-" no tipo para parar o programa): `);
    while (!isNaN(nome)) {
        nome = promptSync(`Por favor, não digite nenhum número: `)
    }
    if (nome == "-") {
        rodarCodigo = false
    } 
    //#endregion

    if (nome != "-") {
    nomes[i] = nome;
    //#region endereco
    endereco = promptSync(`Digite o endereco do ${i + 1}° cliente: `);
    enderecos[i] = endereco;
    //#endregion

    //#region distancia
    distancia = parseFloat(promptSync(`Digite a distância de entrega do ${i+1}° cliente (em quilometros) `));
    while (isNaN(distancia) || distancia <= 0) {
        distancia = parseFloat(promptSync(`Por favor, não digite letras ou valores negativos `))
    }
    distancias[i] = parseFloat(distancia.toFixed(2));
    //#endregion

    //#region valor
    valor = parseFloat(promptSync(`Digite o valor de cada KM do ${i + 1}° cliente (em reais) `));
    while (isNaN(valor) || valor <= 0) {
        valor = parseFloat(promptSync(`Por favor, não digite letras ou valores negativos `))
    }
    valores[i] = parseFloat(valor.toFixed(2));
    //#endregion
    
    //#region tipo
    tipo = parseInt(promptSync(`Digite o tipo de entrega do ${i + 1}° cliente (digite 1 para normal 2 para urgente) `));
    while (isNaN(tipo) || tipo != 1 && tipo != 2) {
            tipo = parseFloat(promptSync(`Por favor, digite 1 ou 2 `))
        }
    
    if (tipo == 1) {
    calculo = distancia*valor;
    soma += calculo;
    mensagemTipo = "Normal"
} else if (tipo == 2) {
    calculo = (distancia*valor) * 1.20;
    soma += calculo;
    mensagemTipo = "Urgente"
}
    //#endregion

    //#region Adicionar valores as arrays
    calculos [i] = parseFloat(calculo.toFixed(2));
    mensagensTipo [i] = mensagemTipo;
    i++;
    //#endregion
}
}

media = soma / i;

console.log(`Informacões das ${i+1} entregas:`)
console.log(`Nomes: ${nomes}`)
console.log(`Enderecos: ${enderecos}`)
console.log(`Distancias: ${distancias}`)
console.log(`valores (por KM): ${valores}`)
console.log(`tipos: ${mensagensTipo}`)
console.log(`Valor total de cada entrega: ${calculos}`)
console.log(`Média: ${media.toFixed(2)}`)
console.log(`Soma dos valores totais: ${soma.toFixed(2)}`)

fs.appendFileSync("./log.txt", `\n\n Quantidade de entregas: ${i}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Nomes: ${nomes}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Enderecos: ${enderecos}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Distancias: ${distancias}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Valores (por KM): ${valores}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Tipos: ${mensagensTipo}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Valor total de cada entrega entregas: ${calculos}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Média dos valores: ${media.toFixed(2)}\n`, "utf-8")
fs.appendFileSync("./log.txt", `Soma dos valores totais: ${soma.toFixed(2)}`, "utf-8")
