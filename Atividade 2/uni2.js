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

// EXERCÍCIO 1: FUMANTE
function fumante(){
    cigarros = parseInt(scan("Quantia de cigarros por dia: "));
    anos = parseInt(scan("Quantia de anos fumando: "));
    total = cigarros * 365 * anos;
    tempoPerdido = 10;
    tempoPerdidoMinutos = total * tempoPerdido;

    diasPerdidos = tempoPerdidoMinutos / (60 * 24);

    console.log(`Você perdeu ${diasPerdidos.toFixed(0)} dias de vida`);
    limparTela();
}

// EXERCÍCIO 2: VELOCIDADE CARRO
function velocidade(){
    velocidade = parseInt(scan("Velocidade do carro: "));
    if(velocidade > 80){
        console.log("Você foi multado!");
        multa = (velocidade - 80) * 5;
        console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
    }
    limparTela();
}

// EXERCÍCIO 3: DISTÂNCIA PASSAGEIRO
function distanciaPassageiro(){
    distancia = parseFloat(scan("Distância percorrida em KM: "));
    let preco = 0;
    if(distancia <= 200){
        preco = 0.50;        
    }else{
        preco = 0.45;
    }
    console.log(`Preço da passagem: ${(distancia * preco).toFixed(2)}`);
    limparTela();
}

// EXERCÍCIO 4: SEGMENTOS DE RETA
function segmento(){
    a = parseInt(scan("Segmento 1: "))
    b = parseInt(scan("Segmento 2: "))
    c = parseInt(scan("Segmento 3: "))

    if (a < b + c && b < a + c && c < a + b) {
        console.log("Um triângulo é formado por esses valores");
    } else {
        return "Os valores fornecidos não formam um triângulo";
    }
    limparTela();
}

// EXERCÍCIO 5: CRIE UM JOKENPO
function jokkenpo(){
    const rodada = {
        "pedra" : { vence: "tesoura", perde: "papel" },
        "papel": { vence: "pedra", perde: "tesoura" },
        "tesoura": { vence: "papel", perde: "pedra" }
    };

    play1 = scan("Jogador 1 sinaliza: ").toLowerCase();
    play2 = scan("Jogador 2 sinaliza: ").toLowerCase();

    if(play1 === play2){
        console.log("Empate");
    }else if(rodada[play1].vence === play2){
        console.log("\n-- Jogador 1 venceu-- ");
        console.log(`Escolha do 1: ${play1} | Escolha do 2: ${play2}`)
    }else{
        console.log("\n-- Jogador 2 venceu --");
        console.log(`Escolha do 2: ${play2} | Escolha do 1: ${play1}`)
    }

    limparTela();
}

// EXERCÍCIO 6: SORTEIO ENTRE 1 E 5
function sorteio(){
    numero = Math.floor(Math.random() * 5) + 1;
    console.log(`Número sorteado: ${numero}`);
    jogador = parseInt(scan("Informe um número: "));
    if(jogador === numero){
        console.log("Você acertou!");
    }else{
        console.log("Você errou!");
    }
    limparTela();
}

//EXERCÍCIO 7: ALUGUEL DE CARROS
function aluguel(){
    console.log("1 - Carro Popular | 2 - Carro de Luxo");
    //tipoCarro = parseInt(scan("1 - Carro Popular | 2 - Carro de Luxo"));
    tipoCarro = parseInt(scan(": "));
    aluguel = parseInt(scan("Dias de aluguel: "));
    km = parseInt(scan("KM Rodados: "));

    switch(tipoCarro){
        case 1:
            if(km <= 100){
                preco = (aluguel * 90) + (km * 0.20);
            }else{
                preco = (aluguel * 90) + (km * 0.10);
            }
            break;
        case 2:
            if(km <= 200){
                preco = (aluguel * 150) + (km * 0.30);    
            }else{
                preco = (aluguel * 150) + (km * 0.25);
            }
            break;
        default:
            console.log("Opção inválida");
            break;
    }
    console.log(`\n--- Preço do aluguel: R$ ${preco.toFixed(2)}`);
    limparTela();
}

// EXERCÍCIO 8: VIDA SAUDÁVEL
function saudavel(){
    horas = parseFloat(scan("Horas de atividade/mês: "));
    if(horas <= 10){
        pontos = 2 * horas;
        centavos = pontos * 0.5;
    }else if(horas >= 10 && horas <= 20){
        pontos = 5 * horas;
        centavos = pontos * 0.5;
    }else{
        pontos = 10 * horas;
        centavos = pontos * 0.5;
    }
    console.log(`\n--- Pontos: ${pontos} | Centavos: ${centavos}`);
    limparTela();
}

// EXERCÍCIO 9: SALÁRIO PAGO
function salarioPago(){
    parar = 'n';
    salarioM = 0;
    salarioF = 0;
    do{
        console.log("1 - Masculino | 2 - Feminino");
        sexo = scan(": ");
        if(sexo === "1"){
            salario = parseFloat(scan("Salário: "));
            salarioM += salario;
        }else if(sexo === "2"){
            salario = parseFloat(scan("Salário: "));
            salarioF += salario;
        }

        console.log("Deseja continuar: (s) - Sim | (n) - Não");
        parar = scan(": ").toLowerCase();
    }while(parar === 's');

    console.log(`\n--- Total Salário Homem: R$ ${salarioM.toFixed(2)}`);
    console.log(`\n--- Total Salário Mulher: R$ ${salarioF.toFixed(2)}`);
    
    limparTela();
}

// EXERCÍCIO 10: FAÇA ENQUANTO
function facaEnquanto(){
    numeros = [];
    do{
        aux = parseInt("Números: ");
        if(aux!== 0){
            numeros.push(aux);
        }
        console.log("Deseja continuar: (s) - Sim | (n) - Não");
        parar = scan(": ").toLowerCase();
    }while(parar === 'n');

    soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }

    menor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }

    media = soma / numero.length;

    pares = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares++;
        }
    }
    console.log(`\n--- Soma dos números: ${soma}`);
    console.log(`\n--- Menor número digitado: ${menor}`);
    console.log(`\n--- Média dos números: ${media}`);
    console.log(`\n--- Quantidade de números pares: ${pares}`);
    limparTela();
}

// EXERCÍCIO 11 - PROGRESSÃO ARITMÉTICA
function PA(){    
    primeiroTermo = parseInt(scan("Primeiro termo: "));
    razao = parseInt(scan("Razão: "));
    soma = 0;
    for(let i = 0; i < 10; i++){
        soma += primeiroTermo + (i * razao);
        console.log(`\n--- ${primeiroTermo + (i * razao)}`);
    }
    console.log(`\n--- Soma: ${soma}`);
    limparTela();    
}

// EXERCÍCIO 12 - FIBONACCI
function fibonacci(){
    let elem1 = 0;
    let elem2 = 1;
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        if (i <= 1) {
            soma = i;
        } else {
            soma = elem1 + elem2;
            elem1 = elem2;
            elem2 = soma;
        }
        console.log(`--- ${soma}`);
    }
    limparTela();
}

// EXERCÍCIO 13: FIBONACCI VETOR
function fibonacciVetor(){
    let elem1 = 0;
    let elem2 = 1;
    let soma = 0;
    let vetor = [];
    for (let i = 1; i <= 10; i++) {
        if (i <= 1) {
            soma = i;
        } else {
            soma = elem1 + elem2;
            elem1 = elem2;
            elem2 = soma;
        }
        vetor.push(soma);
    }
    console.log(vetor);
    limparTela();
}

// EXERCÍCIO 14: 7 NOMES
function sete(){
    nomes = [];
    for(let i = 1; i <= 7; i++){
        nomes.push(scan(`Nome ${i}: `));
    }
    console.log(`\nOrdem normal ${nomes}`);
    console.log(`Ordem inversa: ${nomes.reverse()}`);
    limparTela();
}

// EXERCÍCIO 15: PARES POR POSIÇÃO
function parPosition(){
    numeros = [];
    posicao = [];
    for(let i = 1; i <= 10; i++){
        numeros.push(parseInt(scan(`Número ${i}: `)));
    }
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            console.log(`-- ${numeros[i]}`);
            posicao.push(i);
        }
    }
    console.log(`Posiçoes: ${posicao}`);
    limparTela();
}

// EXERCÍCIO 16: VETOR 20 POSIÇÕES
function vetorVinte() {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random() * 99));
    }
    console.log(`Números automáticos: ${numeros}`);

    numeros.sort((a, b) => a - b);
    console.log(`Números ordenados: ${numeros}`);
    limparTela();
}

// EXERCÍCIO 17: NOME E IDADE DE 9
function nomeIdade() {
    nome = []; idade = [];
    for(let i = 0; i < 9; i++) {
        names = scan("Nome: ");
        age = parseInt(scan("Idade: "));
        nome.push(names);
        idade.push(age);
    }

    for(let i = 0; i < 9; i++){
        if(idade[i] < 18){
            console.log(`Nome: ${nome[i]} | Idade: ${idade[i]}`);
        }
    }
    limparTela();
}

// EXERCÍCIO 18: REGISTRO FUNCIONÁRIO
function registro(){
    let funcionario = {
        nome: "",
        cargo: "",
        salario: 0
    };

    funcionario.nome = scan("Nome: ");
    funcionario.cargo = scan("Cargo: ");
    funcionario.salario = parseFloat(scan("Salário: "));

    console.log(" -- Registro --");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: ${funcionario.salario}`);
    limparTela();
}

// EXERCÍCIO 19: CINCO HORÁRIOS
function cincoHoras(){
    function pedeHora(numero){
        let horario, hora, minuto, segundo;
        do{
            horario = scan(`Digite o ${numero + 1}º horário(HH:MM:SS):`);
            [hora, minuto, segundo] = horario.split(":").map(Number);

            if(!(valido(hora, minuto, segundo))){
                console.log("Horário inválido. Tente novamente!");
            }

        }while(!(valido(hora, minuto, segundo)));

        return horario;
    }

    function valido(hora, minuto, segundo){
        return hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59;
    }
    //
    let horarios = [];
    for(let i = 0; i < 5; i++){
        let aux = pedeHora(i);
        horarios.push(aux);
    }
    horarios.forEach((aux) => {
        console.log(aux);
    });
    limparTela();
}

// EXERCÍCIO 20: FOLHA DE PAGAMENTO - 80 EMPREGADOS
function folhaDePagamento(){
    let funcionarios = []; 

    let deducaoINSS = 0.12;

    for(let i = 0; i < 2; i++){ // o exerício pede 80 funcionários, coloquei 2 pra teste
        let funcionario = {
            matricula: parseFloat(scan("Matrícula: ")),
            nome: scan("Nome: "),
            salario_bruto: parseFloat(scan("Salário bruto: "))
        };

        let salario_liquido = funcionario.salario_bruto * (1 - deducaoINSS);

        funcionarios.push(funcionario);

        console.log(`-- Funcionário ${i} --`);
        console.log("Matrícula:", funcionario.matricula);
        console.log("Nome:", funcionario.nome);
        console.log("Salário bruto:", funcionario.salario_bruto);
        console.log("Dedução INSS:", funcionario.salario_bruto * deducaoINSS);
        console.log("Salário líquido:", salario_liquido);
        console.log("-------------------------");
    }
    console.log(funcionarios);
    limparTela();
}
// EXERCÍCIO 21: 
function pesoIdeal(altura, sexo){
    function calcularPeso(altura, sexo){
        //let peso;
        if(sexo === 'masculino'){
            peso = (72.7 * altura) - 58;
        }else if(sexo === 'feminino'){
            peso = (62.1 * altura) - 44.7;
        }else{
            return "Sexo não reconhecido. Insira 'masculino' ou 'feminimo'";
        }
        return peso;
    }

    const pesoCalculado = calcularPeso(altura, sexo);
    console.log("Peso ideal: " + pesoCalculado);
    limparTela();
}

// EXERCÍCIO 22: PESQUISA ENTRE HABITANTES 
function pesquisaHabitantes(){
    parar = 0, cont = 0, ate = 0, media = 0, mediaFilhos = 0, maior = 0;
    do{
        salario = parseFloat(scan("Salário: "));
        filhos = parseInt(scan("Filhos: "));
        if(salario <= 350){
            ate++;
        }
        media += salario;
        mediaFilhos += filhos;
        if(salario > maior){
            maior = salario;
        }
        cont++;
        parar = parseInt(scan("Digite 1 para continuar: "));
    }while(parar === 1);

    if(cont > 0){
        console.log(`\nMédia salarial: ${media/cont}`);    
        console.log(`Média de filhos: ${mediaFilhos / cont}`);  
        console.log(`Maior salário: ${maior}`);
        console.log(`Percentual de salários até R$ 350,00: ${ate/cont * 100}%`);
    }
    
    limparTela();
}

// EXERCÍCIO 23: MATRIZ IDENTIDADE
function matrizIdentidade(){
    const linhas = 7;
    const colunas = 7;

    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }

    console.log("Matriz Identidade:");
    for (let i = 0; i < linhas; i++) {
        let linha = "";
        for (let j = 0; j < colunas; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

// EXERCÍCIO 24: matriz M[1..6,1..8], criar um vetor C
 function matrizC(){
    const linhas = 6;
    const colunas = 8;

    let m = [];
    for (let i = 0; i < linhas; i++) {
        m[i] = [];
        for (let j = 0; j < colunas; j++) {
            m[i][j] = (i + 1) * (j + 1);
        }
    }

    c = [];
    for (let i = 0; i < linhas; i++) {
        negativos = 0;
        for(let j = 0; j < colunas; j++) {
            if(m[i][j] < 0) {
                negativos++;
                //c.push(m[i][j]);
            }
        }
        //c.push(negativos);
    }
    c = negativos;
    console.log(`Negativos: ${c}`);
}

// EXERCÍCIO 25: MATRIZ 15X20 E MOSTRE SOMA DE CADA COLUNA SEPRADAMENTE
 function matriz15x20(){
    const linhas = 15;
    const colunas = 20;

    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }

    c = [];
    for (let j = 0; j < colunas; j++) {
        soma = 0;
        for(let i = 0; i < linhas; i++) {
            soma += matriz[i][j];
        }
        c.push(soma);
    }
    console.log(c);
}

// EXERCÍCIO 26: DUAS MATRIZES A[1..3, 1..5] E B[1..3, 1..5]
 function duasMatrizes(){
    const linhasA = 3;
    const colunasA = 5;
    const linhasB = 3;
    const colunasB = 5;
    let a = [];
    let b = [];
    for (let i = 0; i < linhasA; i++) {
        a[i] = [];
        for (let j = 0; j < colunasA; j++) {
            a[i][j] = (i + 1) * (j + 1);
        }
    }
    for (let i = 0; i < linhasB; i++) {
        b[i] = [];
        for (let j = 0; j < colunasB; j++) {
            b[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log("\nMatriz A:");
    for (let i = 0; i < linhasA; i++) {
        let linha = "";
        for (let j = 0; j < colunasA; j++) {
            linha += a[i][j] + " ";
        }
        console.log(linha);
    }
    console.log("Matriz B:");
    for (let i = 0; i < linhasB; i++) {
        let linha = "";
        for (let j = 0; j < colunasB; j++) {
            linha += b[i][j] + " ";
        }
        console.log(linha);
    }
    console.log("\n -- Matriz Produto A + B:");
    for (let i = 0; i < linhasA; i++) {
        let linha = "";
        for (let j = 0; j < colunasA; j++) {
            linha += (a[i][j] + b[i][j]) + " ";
        }
        console.log(linha);
    }
    limparTela();
 }

 // EXERCÍCIO 27: MATRIZ 6X6 
function matriz6x6(){
    const linhas = 6; const colunas = 6;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`Matriz padrão: `);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }

    a = parseFloat(scan("\nMultiplicar valor em matriz: "));
    v = [];
    for(let i = 0; i < linhas; i++){
        for(let j = 0; j < colunas; j++){
            v.push(matriz[i][j] * a); 
        }
    }

    console.log(v);
    limparTela();
}

// EXERCÍCIO 28: MATRIZ COM 10x10 PEDIDO
function matrizPedido(){
    const linhas = 10; const colunas = 10;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`\nMatriz 10x10: \n`);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }
    // exibir a soma dos elementos acima da diagonal principal;
    somaAcima = 0; somaAbaixo = 0;
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (j > i) { // Acima da diagonal principal
                somaAcima += matriz[i][j];
            } else if (j < i) { // Abaixo da diagonal principal
                somaAbaixo += matriz[i][j];
            }
        }
    }
    console.log(`Soma acima da diagonal principal: ${somaAcima}`);
    console.log(`Soma abaixo da diagonal principal: ${somaAbaixo}`);
    limparTela();
}

// EXERCÍCIO 29: Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas
function vinte9(){
    const linhas = 5; const colunas = 5;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`\nMatriz 5x5: \n`);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }
    let somaLinha = 0;
    for(let i = 0; i < linhas; i++){
        somaLinha = 0;
        if(i == 3){
            somaLinha = 0;
            for(let j = 0; j < matriz.length; j++){
                somaLinha += matriz[i][j];
            }
            console.log(`\nSoma da linha 4: ${somaLinha}`);
        }
    }
    let somaColuna = 0;
    for(let i = 0; i < linhas; i++){
        somaColuna = 0;
        if(i == 1){
            somaColuna = 0;
            for(let j = 0; j < matriz.length; j++){
                somaColuna += matriz[j][i];
            }
            console.log(`\nSoma da coluna 2: ${somaColuna}`);
        }
    }
    let somaDiagonal = 0;
    for(let i = 0; i < linhas; i++){
        somaDiagonal = 0;
        if(i == 2){
            somaDiagonal = 0;
            for(let j = 0; j < matriz.length; j++){
                somaDiagonal += matriz[j][j];
            }
            console.log(`\nSoma da diagonal principal: ${somaDiagonal}`);
        }
    }
    let somaMatriz = 0;
    for(let i = 0; i < linhas; i++){
        somaMatriz = 0;
        if(i == 3){
            somaMatriz = 0;
            for(let j = 0; j < matriz.length; j++){
                somaMatriz += matriz[i][j];
            }
            console.log(`\nSoma da matriz: ${somaMatriz}`);
        }
    }
    limparTela();
}

// EXERCÍCIO 30: MATRIZ 5X5 E 2 VETORES SL(5) E SC(5)
function m2vetor(){
    const linhas = 5; const colunas = 5;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`\nMatriz 5x5: \n`);
    for(let i = 0; i < matriz.length; i++){
        let aux = "";
        for(let j = 0; j < matriz.length; j++){
            aux += matriz[i][j] + " ";
        }
        console.log(aux);
    }
    let sl = [];
    let sc = [];
    for(let i = 0; i < linhas; i++){
        let somaLinha = 0;
        for(let j = 0; j < matriz.length; j++){
            somaLinha += matriz[i][j];
        }
        sl.push(somaLinha);
    }
    for(let i = 0; i < linhas; i++){
        let somaColuna = 0;
        for(let j = 0; j < matriz.length; j++){
            somaColuna += matriz[j][i];
        }
        sc.push(somaColuna);
    }
    console.log(`Soma de linhas: ${sl}`);
    console.log(`Soma de colunas: ${sc}`);
    limparTela();
}

//EXERCÍCIO 31: MATRIZ 30X30
function matriz30x30(){
    const linhas = 30; const colunas = 30;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
    console.log(`Temos uma matriz 30x30. \nEscolha número para verificar existência na matriz`);    
    a = parseInt(scan("Número inteiro: "));
    let existe = 0;
    let difere = [];
    for(let i = 0; i < linhas; i++){
        for(let j = 0; j < colunas; j++){
            if(matriz[i][j] == a){
                existe += 1;
            }else{
                difere.push(matriz[i][j]);
            }
        }
    }
    console.log(`Quantia de vezes que ${a} existe na matriz: ${existe}`);
    console.log(`Quantia de vezes que ${a} difere na matriz: ${difere.length}`);
    console.log(`Matriz indiferente: ${difere}`);
    limparTela();    
}

//EXERCÍCIO 32 : Matriz 12x13 
function matriz12x13(){
    const linhas = 12; const colunas = 13;
    let matriz = [];
    for(let i = 0; i < linhas; i++){
        matriz[i] = [];
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }

    function maiorElementoLinha(linha) {
        let maior = linha[0];
        for (let i = 1; i < linha.length; i++) {
            if (Math.abs(linha[i]) > Math.abs(maior)) {
                maior = linha[i];
            }
        }
        return Math.abs(maior);
    }
    
    for(let i = 0; i < matriz.length; i++){
        const maior = maiorElementoLinha(matriz[i]);
        for(let j = 0; j < colunas; j++){
            matriz[i][j] /= maior;
            matriz[i][j] = matriz[i][j].toFixed(1);
        }
    }

    console.log("Matriz original:");
    for (let i = 0; i < linhas; i++) {
        let linhaOriginal = "";
        for(let j = 0; j < matriz.length; j++) {
            linhaOriginal += matriz[i][j]; //+ "\t";
        }
    }

    console.log("\nMatriz modificada:");
    for (let i = 0; i < linhas; i++) {
        let linhaModificada = "";
        for(let j = 0; j < matriz.length; j++) {
            linhaModificada += matriz[i][j]; //+ "\t";
        }
        console.log(linhaModificada);
    }
    limparTela();
}
///////////////////////////////////////////////////////////

let opcao;
function menu(){
    console.log(`--- Menu --- \n1 - Fumante\n2 - Velocidade do carro\n3 - Preço de passagem por KM \n4 - Triângulo - Segmento de reta\n5 - Jokkenpo\n6 - Sorteio entre 1 - 5\n7 - Aluguel de carros\n8 - Vida Saudável\n9 - Salário Pago\n10 - Faça enquanto\n11 - PA - Progressão Aritmética\n12 - Fibonacci\n13 - Fibonacci Vetor\n14 - Sete Nomes\n15 - Par por posição\n16 - VETOR 20 POSIÇÕES\n17 - Nome e Idade\n18 - Registro Funcionário\n19 - Cinco Horários\n20 - Folha de Pagamentos\n21 - Peso Ideal\n22 - Pesquisa de habitantes\n23 - Matriz Identidade\n24 - Matriz: Vetor C\n25 - Matriz 15 x 20\n26 - Matriz A e B\n27 - Matriz 6x6\n28 - Matriz 10x10 com Pedido\n29 - Matriz 5x5 e operações\n30 - Matriz e 2 vetores\n31 - Matriz 30x30\n32 - Matriz 12x13\n0 - Sair\n`); 
}

menu();
main();

function main(){
    do {
        opcao = parseInt(scan("********* Escolha a opção: "));
        switch(opcao) {
            case 1:
                fumante();
                break;
            case 2:
                velocidade();
                break;
            case 3:
                distanciaPassageiro();
                break;
            case 4:
                segmento();
                break;
            case 5:
                jokkenpo();
                break;
            case 6:
                sorteio();
                break;
            case 7:
                aluguel();
                break;
            case 8:
                saudavel();
                break;
            case 9:
                salarioPago();
                break;
            case 10:
                facaEnquanto();
                break;
            case 11:
                PA();
                break;
            case 12:
                fibonacci();
                break;
            case 13:
                fibonacciVetor();
                break;
            case 14:
                sete();
                break;
            case 15:
                parPosition();
                break;
            case 16:
                vetorVinte();
                break;
            case 17:
                nomeIdade();
                break;
            case 18:
                registro();
                break;
            case 19:
                cincoHoras();
                break;
            case 20:
                folhaDePagamento();
                break;
            case 21:
                var altura = 1.75;
                var sexo = 'masculino';
                pesoIdeal(altura, sexo);
                //pesoIdeal();
                break;
            case 22:
                pesquisaHabitantes();
                break;
            case 23:
                matrizIdentidade();
                break;
            case 24:
                matrizC();
                break;
            case 25:
                matriz15x20();
                break;
            case 26:
                duasMatrizes();
                break;
            case 27:
                matriz6x6();
                break;
            case 28:
                matrizPedido();
                break;
            case 29:
                vinte9();
                break;
            case 30:
                m2vetor();
                break;
            case 31:
                matriz30x30();
                break;
            case 32: 
                matriz12x13();
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
