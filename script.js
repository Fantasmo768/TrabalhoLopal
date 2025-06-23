let promptSync = require('prompt-sync')();
let fs = require('fs')
let path = require('path')

//#region variaveis
let conteudoArquivo = "----Histórico de entregas----"
let nomes = []; // Vetor para armazenar valores dos nomes
let enderecos = []; // Vetor para armazenar valores dos enderecos
let distancias = []; // Vetor para armazenar valores das distâncias
let valores = []; //Vetor para armazenar valores dos valores
let tipos = []; // Vetor para armazenar valores dos tipos
let rodarCodigo = true; // Variável com valor atribuido em "true" para que ao o código continue sempre rodando
let i = 0; // Variável criada para armazenar valores
let calculos = []; // Vetor para armazenar valores dos cálculos
let calculo = 0; // Variável criada para calcular os valores atribuídos em outras variáveis
let soma = 0; // Variável criada para somar os valores atribuídos em outras variáveis
let media = 0; // Variável criada para triar uma média os valores atribuídos à ela
let mensagemTipo = ""; // Variável
let mensagensTipo = []; // Vetor
let nome = ""; // Variável
let endereco; // Variável
let distancia = 0; // Variável
let valor = 0; // Variável
let tipo = 0; // Variável
// Fim da criação de variáveis e vetores para serem utilizadas no programa
//#endregion

if (!fs.existsSync("./log.txt")) {
    fs.writeFileSync("./log.txt", conteudoArquivo, "utf-8");
}

while (rodarCodigo == true) {
// Enquanto a variável "rodarCodigo" for um valor verdadeiro o código irá rodar
    //#region nome
    nome = promptSync(`Digite o nome do ${i+1}° cliente (digite "-" no tipo para parar o programa): `);
    // Comando para pedir o nome do respectivo cliente
    while (!isNaN(nome)) {
        nome = promptSync(`Por favor, não digite nenhum número: `);
    //Valida se "nome" está dentro das condições da variável, ou seja, se é uma string
    }
    if (nome == "-") {
        rodarCodigo = false;
    } // Se o usuário digitar "-", então o código irá parar
    //#endregion

    if (nome != "-") {
    nomes[i] = nome;
    //#region endereco
    endereco = promptSync(`Digite o endereco do ${i + 1}° cliente: `);
    // Comando para pedir o endereço do respectivo cliente
    enderecos[i] = endereco;
    //#endregion

    //#region distancia
    distancia = parseFloat(promptSync(`Digite a distância de entrega do ${i+1}° cliente (em quilometros) `));
    // Comando para pedir a distancia do respectivo cliente
    while (isNaN(distancia) || distancia <= 0) {
        distancia = parseFloat(promptSync(`Por favor, não digite letras ou valores negativos `));
    }  //Valida se "distancia" está dentro das condições da variável, ou seja, se é um número Real
    distancias[i] = parseFloat(distancia.toFixed(2));
    //#endregion

    //#region valor
    valor = parseFloat(promptSync(`Digite o valor de cada KM do ${i + 1}° cliente (em reais) `));
    // Comando para pedir o valor do respectivo cliente
    while (isNaN(valor) || valor <= 0) {
        valor = parseFloat(promptSync(`Por favor, não digite letras ou valores negativos `));
    }  //Valida se "valor" está dentro das condições da variável, ou seja, se é um número Real
    valores[i] = parseFloat(valor.toFixed(2));
    //#endregion
    
    //#region tipo
    tipo = parseInt(promptSync(`Digite o tipo de entrega do ${i + 1}° cliente (digite 1 para normal 2 para urgente) `));
    while (isNaN(tipo) || tipo != 1 && tipo != 2) {
            tipo = parseFloat(promptSync(`Por favor, digite 1 ou 2 `));
        }
    
    if (tipo == 1) {
    calculo = distancia*valor;
    soma += calculo;
    mensagemTipo = "Normal";
    //Se o "tipo" não for urgente, o cálculo é a multiplicação da distancia pelo valor
} else if (tipo == 2) {
    calculo = (distancia*valor) * 1.20;
    soma += calculo;
    mensagemTipo = "Urgente";
} //Se o "tipo" for urgente, o cálculo é a multiplicação da distancia pelo valor e o resultado é multiplicado por 1.20
    //#endregion

    //#region Adicionar valores as arrays
    calculos [i] = parseFloat(calculo.toFixed(2));
    mensagensTipo [i] = mensagemTipo;
    i++;
    //#endregion
}
}
//Calcula a media através da divisão dos valores das variáveis "soma" e "i"
media = soma / i;

//Exibição das informações no console 
console.log(`Informacões das ${i+1} entregas:`);
console.log(`Nomes: ${nomes}`);
console.log(`Enderecos: ${enderecos}`);
console.log(`Distancias: ${distancias}`);
console.log(`valores (por KM): ${valores}`);
console.log(`tipos: ${mensagensTipo}`);
console.log(`Valor total de cada entrega: ${calculos}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Soma dos valores totais: ${soma.toFixed(2)}`);

//Adicionar as informações dos arquivos
fs.appendFileSync("./log.txt", `\n\n Quantidade de entregas: ${i}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Nomes: ${nomes}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Enderecos: ${enderecos}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Distancias: ${distancias}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Valores (por KM): ${valores}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Tipos: ${mensagensTipo}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Valor total de cada entrega entregas: ${calculos}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Média dos valores: ${media.toFixed(2)}\n`, "utf-8");
fs.appendFileSync("./log.txt", `Soma dos valores totais: ${soma.toFixed(2)}`, "utf-8");
