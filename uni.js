const scan = require('prompt-sync')();
function limparTela() {
    let limpa = parseInt(scan("\nDigite 1 para voltar ao menu... "));
    if(limpa === 1){
        for (var i = 0; i < 100; i++) {
            console.log("");
        }
        menu();
        main();
    }else{
        console.log("Encerrando aplicação... ")
        process.exit();
    }
}

// Exercício 01 - Celsius para Fahrenheit + resultado ///////////////
function converterCelsiusParaFahrenheit() {
    function celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    let temperaturaCelsius = parseFloat(scan("Digite a temperatura em graus Celsius: "));
    let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
    console.log("\nA temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));
    limparTela();

}

// Exercício 02 - Eleitores de um município //////////////////
function percentualEleitores() {
    function calcularPercentual(valor, total) {
        return (valor / total) * 100;
    }

    let eleitores = parseInt(scan("Digite quantia de eleitores: "));
    let brancos = parseInt(scan("Digite quantia de votos brancos: "));
    let nulos = parseInt(scan("Digite quantia de votos nulos: "));
    let validos = parseInt(scan("Digite quantia de votos válidos: "));

    let totalVotosValidos = eleitores - brancos - nulos;
    
    let percentualBrancos = calcularPercentual(brancos, eleitores);
    let percentualNulos = calcularPercentual(nulos, eleitores);
    let percentualValidos = calcularPercentual(validos, eleitores);    

    console.log("\nPercentual de votos em branco: " + percentualBrancos + "%");
    console.log("Percentual de votos nulos: " + percentualNulos + "%");
    console.log("Percentual de votos válidos: " + percentualValidos + "%");
    limparTela();
}

// Exercício 03 - Quatro números inteiros e realize algumas operações //////////////
function quatroNumeros(){
    let numeros = [];
    let a = 0;
    for(let i = 0; i < 4; i++){
        let n = parseInt(scan(`Digite o ${i+1}º número: `));
        numeros.push(n);
        a += numeros[i];
    }

    numeros[0] += 25;
    numeros[1] *= 3;
    numeros[2] += (numeros[2] * 0.12);
    numeros[3] = a - numeros[3];

    console.log(`\nMais 25: ${numeros[0]}\n Triplo: ${numeros[1]}\n 12%: ${numeros[2]}\n Soma dos 3 primeiros: ${numeros[3]}`);
    limparTela();
}

// Exercício 04 - Média Semestral /////////////////////
function mediaSemestral(){
    n1 = parseFloat(scan("Primeira nota: "));
    n2 = parseFloat(scan("Segunda nota: "));

    media = (n1+n2) / 2;
    if(media >= 6){
        console.log(`Média Semestral: ${media.toFixed(1)}\nAPROVADO`);
    }
    limparTela();
}

// Exercício 05 - Média Semestral Plus //////////////////////////
function mediaSemestralPlus(){
    n1 = parseFloat(scan("Primeira nota: "));
    n2 = parseFloat(scan("Segunda nota: "));

    media = (n1+n2) / 2;
    if(media >= 6){
        console.log(`Média Semestral: ${media.toFixed(1)}\nAPROVADO`);
    }else{
        console.log(`Média semestral: ${media}\nVocê foi REPROVADO! Estude mais`);
    }
    limparTela();
}

// Exercício 06 - Lados de um triângulo //////////////////////
function triangulo(){
    a = parseInt(scan("Lado A: "))
    b = parseInt(scan("Lado B: "))
    c = parseInt(scan("Lado C: "))

    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Equilátero");
        } else if (a === b || a === c || b === c) {
            console.log("Isósceles");
        } else {
            console.log("Escaleno");
        }
    } else {
        return "Os lados fornecidos não formam um triângulo.";
    }
    limparTela();
}

// Exercício 07 - Maçãs //////////////////////// 
function macas(){
    macas = parseFloat(scan("Número de maçãs compradas: "));
    if(macas < 12){
        console.log(`Valor total da compra: ${(macas * 0.30).toFixed(2)}`)
    }else{
        console.log(`Valor total da compra: ${(macas * 0.25).toFixed(2)}`)
    }
    limparTela();
}

// Exercício 08 - 2 valores em ordem Crescente //////////////////////
function doisCrescente(){
    val1 = parseInt(scan("Primeiro valor inteiro: "));
    val2 = parseInt(scan("Segundo valor inteiro: "));
    if(val2 === val1){
        val2 = parseInt(scan("Valor igual ao anterior! Digite um valor diferente: "));
    }
    if(val1 < val2){
        console.log(`Ordem Crescente: ${val1}, ${val2}`);
    }else{
        console.log(`Ordem Crescente: ${val2}, ${val1}`);
    }
    limparTela();
}

// Exercício 09 - Região de produto //////////////////////////////
function regiao(){
    codigo = parseInt(scan("Digite código de origem: "));
    if(codigo === 1){
        console.log("Sul");
    }else if(codigo === 2){
        console.log("Norte");
    }else if(codigo === 3){
        console.log("Leste");
    }else if(codigo === 4){
        console.log("Oeste");
    }else if(codigo === 5 || codigo === 6){
        console.log("Nordeste");
    }else if(codigo === 7 || codigo === 8 || codigo === 9){
        console.log("Sudeste");
    }else if(codigo >= 10 && codigo <= 20){
        console.log("Centro-Oeste");
    }else if(codigo >= 25 && codigo <= 50){
        console.log("Noroeste");
    }else{
        console.log("Fora dos Intervalos - Produto Importado");
    }
    continuar = scan("Digite 'sim' para repetir e 'nao' para voltar ao menu: ");
    if(continuar === 'sim'){
        regiao();
    }else{
        menu();
    }
}

// Exercício 10 - Número por 10 vezes ////////////////////
function dezVezes(){
    num = parseInt(scan("Informa número inteiro para ser repetido 10 vezes: "));
    for(let i = 0; i < 10; i++){
        console.log(num);
    }
    limparTela();
}

// Exercício 11 - Par ou Ímpar //////////////////
function parImpar(){
    let valor; let para = 1;
    while(true){
        valor = parseInt(scan("Informe um valor inteiro: "))
        if(isNaN(valor) || valor < 0){
            console.log("Valor nulo ou negativo. Saindo do exercício do 11");
            break;
        }
        if(valor % 2 === 0){
            console.log(`O valor ${valor} é par`);
        }else{
            console.log(`O valor ${valor} é ímpar`);
        }
    }
    limparTela();
}

// Exercício 12 -  1000 a 1999 /////////////////////
function doze(){
    for(let i = 1000; i <= 1999; i++){
        if(i % 11 === 5){
            console.log(i);
        }
    }
    limparTela();
}

// Exercício 13 - Tabuada de 1 a N //////////////////////
function tabuada(){
    for(let i = 1; i < 5; i++){
        let num = parseInt(scan("Informe um número inteiro: "));
        console.log(`Tabuada do ${num}: `)
        for(let j = 1; j <= num; j++){
            console.log(`${j} x ${num} = ${j * num}`)
        }
    }
    limparTela();
}

// Exercício 14 - Média aritmética ///////////////////
function aritmetica(){
    let numero; let cont = 0; let media = 0;
    while(true){
        numero = parseFloat(scan("Informe um número: "));
        if(numero === 0){
            console.log ("Número 0 digitado. Saindo do exercício...");
            break;
        }
        cont++;
        media += numero;
    }
    console.log(`Média aritmética dos números digitados: ${(media / cont).toFixed(1)}`);
    limparTela();
}

// Exercício 15 - Média ponderada ////////////////////////
function ponderada(){
    let numero, pesos = 0, soma = 0, somaPeso = 0;
    while(true){
        numero = parseFloat(scan("Informe NÚMERO: "));
        if(numero === 0){
            console.log ("Número 0 digitado. Saindo do exercício...");
            break;
        }
        pesos = parseFloat(scan("Informe PESO do número: "));
        soma += numero * pesos;
        somaPeso += pesos;
    }
    console.log(`Média ponderada: ${(soma / somaPeso).toFixed(1)}`)
    limparTela();
}

// Exercício 16 - Primos ///////////////////////////

function primos(){
    let num = 101;
    let aux = 0;

    while(aux < 50){
        let i = 2;
        while(i < num && num % i !== 0){
            i++;
        }

        if(i === num){
            console.log(num);
            aux++;
        }

        num++;
    }
    limparTela();
}

////////////////////////////// fim exercícios //////////////////

let opcao;

function menu(){
    console.log(`--- Menu --- \n1 - Converter Celsius para Fahrenheit\n2 - Percentual de Eleitores\n3 - Quatro números e operações\n4 - Média Semestral\n5 - Média Semestral Plus\n6 - Triângulo\n7 - Maçãs\n8 - Dois valores crescentes\n9 - Região do Produto\n10 - Número 10 vezes\n11 - Par ou Ímpar\n12 - Resto igual 5\n13 - Tabuada de 1 a N\n14 - Média Aritmética\n15 - Média ponderada com peso\n16 - Primos\n0 - Sair\n`); 
}

menu();
main();

function main(){
    do {
        opcao = parseInt(scan("********* Escolha a opção: "));
        switch(opcao) {
            case 1:
                converterCelsiusParaFahrenheit();
                break;
            case 2:
                percentualEleitores();
                break;
            case 3:
                quatroNumeros();
                break;
            case 4:
                mediaSemestral();
                break;
            case 5:
                mediaSemestralPlus();
                break;
            case 6:
                triangulo();
                break;
            case 7:
                macas();
                break;
            case 8:
                doisCrescente();
                break;
            case 9:
                regiao();
                break;
            case 10:
                dezVezes();
                break;
            case 11:
                parImpar();
                break;
            case 12:
                doze();
                break;
            case 13:
                tabuada();
                break;
            case 14:
                aritmetica();
                break;
            case 15:
                ponderada();
                break;
            case 16:
                primos();
                break;
            case 0:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
        console.log("");
    } while(opcao !== 0);
}
