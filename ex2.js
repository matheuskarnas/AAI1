const rl = require('readline-sync')

let crianca = 0
let jovem = 0
let meia = 0
let idoso = 0

const coleta = () => {
    let newUser = Number(rl.question("Insira a idade "))

    if (newUser < 18) {
        crianca += 1
    } else if (newUser < 66) {
        jovem += 1
    } else if (newUser < 80) {
        meia += 1
    } else {
        idoso += 1
    }

    let continuar = rl.question('Para inserir mais dados digite "s"');

    if (continuar.toLowerCase() === 's') {
        coleta();
    } else {
        console.log('Até logo!');
    }
}

coleta()

console.log(`Crianças: ${crianca}, jovens: ${jovem}, meia idade: ${meia} e idosos: ${idoso}`)






