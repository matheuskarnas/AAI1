const rl = require('readline-sync')

const calculoIMC = () => {
    let altura = parseFloat(rl.question('insira sua altura: '))
    let peso = parseFloat(rl.question('Insira seu peso: '))

    let imc = peso / (altura ** 2)

    if (imc < 16) {
        console.log('Baixo peso muito grave');
    } else if (imc < 17) {
        console.log('Baixo peso grave');
    } else if (imc < 18.50) {
        console.log('Baixo peso');
    } else if (imc < 25) {
        console.log('Peso normal');
    } else if (imc < 30) {
        console.log('Sobrepeso');
    } else if (imc < 35) {
        console.log('Obesidade grau I');
    } else if (imc < 40) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade grau III');
    }
}

const repetirCalculo = () => {
    let continuar = rl.question('Para calcular um novo IMC digite "s" ou qualquer outra tecla para sair: ');

    if (continuar.toLowerCase() === 's') {
        calculoIMC(); 
        repetirCalculo(); 
    } else {
        console.log('Até logo!');
    }
}

calculoIMC();  
repetirCalculo();



